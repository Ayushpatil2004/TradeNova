import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [username, setUsername] = useState("");
  const [holdings, setHoldings] = useState([]);

  const fetchData = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        process.env.REACT_APP_API_URL + "/",
        {},
        {
          withCredentials: true,
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
      .then((res) => {
        if (res.data.status) {
          setUsername(res.data.user);
        }
      })
      .catch((err) => console.log(err));

    axios
      .get(process.env.REACT_APP_API_URL + "/allHoldings")
      .then((res) => {
        setHoldings(res.data || []);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();

    window.addEventListener("orderPlaced", fetchData);
    return () => window.removeEventListener("orderPlaced", fetchData);
  }, []);

  const totalInvestment = holdings.reduce(
    (acc, stock) => acc + (stock.avg || 0) * (stock.qty || 0),
    0
  );
  const currentValue = holdings.reduce(
    (acc, stock) => acc + (stock.price || 0) * (stock.qty || 0),
    0
  );
  const totalPnL = currentValue - totalInvestment;
  const pnlPercent =
    totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  const formatK = (val) => {
    if (Math.abs(val) >= 1000) {
      return (val / 1000).toFixed(2) + "k";
    }
    return val.toFixed(2);
  };

  return (
    <>
      <div className="username">
        <h6>Hi, {username || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={totalPnL >= 0 ? "profit" : "loss"}>
              {totalPnL >= 0 ? "+" : ""}
              {formatK(totalPnL)}{" "}
              <small>
                ({pnlPercent >= 0 ? "+" : ""}
                {pnlPercent.toFixed(2)}%)
              </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{formatK(currentValue)}</span>{" "}
            </p>
            <p>
              Investment <span>{formatK(totalInvestment)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
