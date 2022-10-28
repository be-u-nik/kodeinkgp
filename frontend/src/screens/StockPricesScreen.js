import React from "react";
import Navbar from "../components/Navbar";
// import { connect } from 'react-redux'

export const StockPricesScreen = (props) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-5/6 bg-[#D9D9D9] px-8 py-8">
        <div className="flex justify-between">
          <h2>Look here's a graph...</h2>
          <p>Current Stock Price: 9000$</p>
        </div>
        <div>Let's say... Graph</div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(StockPricesScreen)
export default StockPricesScreen;
