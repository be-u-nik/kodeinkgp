import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
// import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
import StockPricesScreen from "./screens/StockPricesScreen";
import StockPrices from "./screens/StockPrices";
import PortfolioScreen from "./screens/PortfolioScreen";
import OrderBookScreen from "./screens/OrderBookScreen";
import HistoryScreen from "./screens/HistoryScreen";
import BuySellScreen from "./screens/BuySellScreen";

function App() {
  return (
    <>
      {/* // <Provider store={store}> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<StockPrices />}></Route>
          <Route
            exact
            path="/realcrypto"
            element={<StockPricesScreen />}
          ></Route>
          <Route exact path="/portfolio" element={<PortfolioScreen />}></Route>
          <Route exact path="/orderBook" element={<OrderBookScreen />}></Route>
          <Route exact path="/history" element={<HistoryScreen />}></Route>
          <Route exact path="/buysell" element={<BuySellScreen />}></Route>
        </Routes>
      </Router>
      {/* // </Provider> */}
    </>
  );
}

export default App;
