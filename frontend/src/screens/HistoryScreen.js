import React from "react";
import Navbar from "../components/Navbar";
// import { connect } from 'react-redux'

export const HistoryScreen = (props) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-5/6 bg-[#D9D9D9] px-8 py-8">
        <h1 className="text-center">Trade transaction History</h1>
        <ul className="text-center">
          <li>3 stocks from A transferred to B at price 500$</li>
          <li>3 stocks from A transferred to B at price 500$</li>
          <li>3 stocks from A transferred to B at price 500$</li>
          <li>3 stocks from A transferred to B at price 500$</li>
        </ul>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)
export default HistoryScreen;
