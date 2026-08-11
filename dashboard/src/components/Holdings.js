import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHoldings = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/allHoldings")
      .then((res) => {
        setAllHoldings(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHoldings();

    window.addEventListener("orderPlaced", fetchHoldings);
    return () => window.removeEventListener("orderPlaced", fetchHoldings);
  }, []);

  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + (stock.avg || 0) * (stock.qty || 0),
    0
  );
  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + (stock.price || 0) * (stock.qty || 0),
    0
  );
  const totalPnL = currentValue - totalInvestment;
  const pnlPercent =
    totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  const labels = allHoldings.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(56, 126, 209, 0.5)",
      },
    ],
  };

  if (loading) {
    return <p style={{ padding: "20px", color: "#888" }}>Loading holdings...</p>;
  }

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {allHoldings.length === 0 ? (
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
          <div style={{ fontSize: "3.5rem", marginBottom: "16px" }}>💼</div>
          <h4
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#334155",
              margin: "0 0 8px 0",
            }}
          >
            No holdings found
          </h4>
          <p
            style={{
              color: "#64748b",
              fontSize: "0.9rem",
              margin: "0 0 20px 0",
            }}
          >
            You don't have any stocks in your holding portfolio yet. Buy stocks from the watchlist to build your investment portfolio.
          </p>
        </div>
      ) : (
        <>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>LTP</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                  <th>Net chg.</th>
                  <th>Day chg.</th>
                </tr>
              </thead>
              <tbody>
                {allHoldings.map((stock, index) => {
                  const qty = Number(stock.qty || 0);
                  const avg = Number(stock.avg || 0);
                  const price = Number(stock.price || 0);
                  const curValue = price * qty;
                  const pnl = curValue - avg * qty;
                  const isProfit = pnl >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={stock._id || index}>
                      <td>{stock.name}</td>
                      <td>{qty}</td>
                      <td>{avg.toFixed(2)}</td>
                      <td>{price.toFixed(2)}</td>
                      <td>{curValue.toFixed(2)}</td>
                      <td className={profClass}>{pnl.toFixed(2)}</td>
                      <td className={profClass}>{stock.net || "+0.00%"}</td>
                      <td className={dayClass}>{stock.day || "+0.00%"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="row">
            <div className="col">
              <h5>
                {totalInvestment.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </h5>
              <p>Total investment</p>
            </div>
            <div className="col">
              <h5>
                {currentValue.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </h5>
              <p>Current value</p>
            </div>
            <div className="col">
              <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
                {totalPnL >= 0 ? "+" : ""}
                {totalPnL.toFixed(2)} ({pnlPercent >= 0 ? "+" : ""}
                {pnlPercent.toFixed(2)}%)
              </h5>
              <p>P&L</p>
            </div>
          </div>
          <VerticalGraph data={data} />
        </>
      )}
    </>
  );
};

export default Holdings;