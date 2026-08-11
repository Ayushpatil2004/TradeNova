import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY", price = 0 }) => {
  const generalContext = useContext(GeneralContext);

  const [currentMode, setCurrentMode] = useState(mode);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price || 100.0);

  const handleOrderClick = async () => {
    try {
      await axios.post(process.env.REACT_APP_API_URL + "/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        quantity: Number(stockQuantity),
        price: Number(stockPrice),
        mode: currentMode,
      });
      // Trigger a page event or soft refresh so components re-fetch data
      window.dispatchEvent(new Event("orderPlaced"));
    } catch (err) {
      console.error("Order submit error:", err);
    }
    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  const isBuy = currentMode === "BUY";
  const marginRequired = (Number(stockQuantity) * Number(stockPrice)).toFixed(2);

  return (
    <div
      className="container"
      id="buy-window"
      draggable="true"
      style={{
        borderTop: isBuy ? "4px solid #4184f3" : "4px solid #f56834",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        borderRadius: "6px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <h4 style={{ margin: 0, fontWeight: "500", color: "#333" }}>
          {currentMode} {uid}
        </h4>

        {/* Mode Toggle Buttons */}
        <div style={{ display: "flex", gap: "6px" }}>
          <button
            type="button"
            onClick={() => setCurrentMode("BUY")}
            style={{
              padding: "4px 10px",
              borderRadius: "4px",
              border: "1px solid #4184f3",
              backgroundColor: isBuy ? "#4184f3" : "#fff",
              color: isBuy ? "#fff" : "#4184f3",
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: "600",
            }}
          >
            BUY
          </button>
          <button
            type="button"
            onClick={() => setCurrentMode("SELL")}
            style={{
              padding: "4px 10px",
              borderRadius: "4px",
              border: "1px solid #f56834",
              backgroundColor: !isBuy ? "#f56834" : "#fff",
              color: !isBuy ? "#fff" : "#f56834",
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: "600",
            }}
          >
            SELL
          </button>
        </div>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{marginRequired}</span>
        <div>
          <button
            type="button"
            className={isBuy ? "btn btn-blue" : "btn"}
            style={{
              backgroundColor: isBuy ? "#4184f3" : "#f56834",
              color: "#fff",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              fontWeight: "500",
            }}
            onClick={handleOrderClick}
          >
            {currentMode}
          </button>
          <button
            type="button"
            className="btn btn-grey"
            style={{
              backgroundColor: "#999",
              color: "#fff",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              marginLeft: "6px",
            }}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
