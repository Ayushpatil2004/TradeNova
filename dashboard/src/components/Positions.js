import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/allPositions")
      .then((res) => {
        setAllPositions(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ padding: "20px", color: "#888" }}>Loading positions...</p>;
  }

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      {allPositions.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            border: "1px dashed #cbd5e1",
            marginTop: "20px",
          }}
        >
          <div style={{ fontSize: "3.5rem", marginBottom: "16px" }}>⚡</div>
          <h4
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#334155",
              margin: "0 0 8px 0",
            }}
          >
            No active positions
          </h4>
          <p
            style={{
              color: "#64748b",
              fontSize: "0.9rem",
              margin: 0,
            }}
          >
            You don't have any open F&O or Intraday positions at the moment.
          </p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
              </tr>
            </thead>
            <tbody>
              {allPositions.map((stock, index) => {
                const qty = Number(stock.qty || 0);
                const avg = Number(stock.avg || 0);
                const price = Number(stock.price || 0);
                const curValue = price * qty;
                const isProfit = curValue - avg * qty >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={stock._id || index}>
                    <td>{stock.product}</td>
                    <td>{stock.name}</td>
                    <td>{qty}</td>
                    <td>{avg.toFixed(2)}</td>
                    <td>{price.toFixed(2)}</td>
                    <td className={profClass}>
                      {(curValue - avg * qty).toFixed(2)}
                    </td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Positions;
