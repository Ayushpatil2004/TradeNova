import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, mode, price) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");
  const [initialPrice, setInitialPrice] = useState(0);

  const handleOpenBuyWindow = (uid, mode = "BUY", price = 0) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setOrderMode(mode);
    setInitialPrice(price);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setOrderMode("BUY");
    setInitialPrice(0);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
          mode={orderMode}
          price={initialPrice}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
