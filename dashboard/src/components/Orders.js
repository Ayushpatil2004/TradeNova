import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/allOrders")
      .then((res) => {
        setAllOrders(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();

    window.addEventListener("orderPlaced", fetchOrders);
    return () => window.removeEventListener("orderPlaced", fetchOrders);
  }, []);

  if (loading) {
    return <p style={{ padding: "20px", color: "#888" }}>Loading orders...</p>;
  }

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      {allOrders.length === 0 ? (
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
          <div
            style={{
              fontSize: "3.5rem",
              marginBottom: "16px",
            }}
          >
            📜
          </div>
          <h4
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#334155",
              margin: "0 0 8px 0",
            }}
          >
            No orders placed today
          </h4>
          <p
            style={{
              color: "#64748b",
              fontSize: "0.9rem",
              margin: "0 0 20px 0",
            }}
          >
            Execute buy or sell orders using the watchlist on the left.
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              backgroundColor: "#16db65",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
            }}
          >
            Get Started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Time</th>
                <th style={{ textAlign: "left" }}>Instrument</th>
                <th style={{ textAlign: "center" }}>Type</th>
                <th>Qty.</th>
                <th>Price</th>
                <th style={{ textAlign: "center" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => {
                const isBuy = (order.mode || "BUY").toUpperCase() === "BUY";
                const orderTime = order.createdAt
                  ? new Date(order.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })
                  : "N/A";

                return (
                  <tr key={order._id || index}>
                    <td style={{ textAlign: "left", color: "#64748b", fontSize: "0.85rem" }}>
                      {orderTime}
                    </td>
                    <td style={{ textAlign: "left", fontWeight: "600" }}>{order.name}</td>
                    <td style={{ textAlign: "center" }}>
                      <span
                        style={{
                          backgroundColor: isBuy ? "#eef4ff" : "#fff4e5",
                          color: isBuy ? "#387ed1" : "#f56834",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          fontSize: "0.75rem",
                          fontWeight: "700",
                        }}
                      >
                        {isBuy ? "BUY" : "SELL"}
                      </span>
                    </td>
                    <td>{order.qty || order.quantity || 1}</td>
                    <td>₹{Number(order.price || 0).toFixed(2)}</td>
                    <td style={{ textAlign: "center" }}>
                      <span
                        style={{
                          color: "#16db65",
                          backgroundColor: "#e8f8ee",
                          padding: "2px 8px",
                          borderRadius: "10px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                        }}
                      >
                        COMPLETE
                      </span>
                    </td>
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

export default Orders;
