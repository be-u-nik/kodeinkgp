import React from "react";
import Navbar from "../components/Navbar";
// import { connect } from 'react-redux'

export const PortfolioScreen = (props) => {
  return (
    <div className="lg:flex">
      {/* NAVBAR */}
      <Navbar />
      {/* SCREEN CONTENT */}
      <div className="lg:w-5/6 px-8 py-8 bg-[#000] h-screen overflow-y-scroll">
        {/* USER DETAILS - NAME, STOCKS, FIAT IN TABULAR FORMAT */}
        <table className="table-fixed w-full border-seperate border-spacing-x-16 lg:border-spacing-x-40 border-slate-400">
          <thead className="h-[54px] lg:h-[62px]">
            <tr className="text-white border-spacing-x-3 border-slate-300 border-b-[2px] border-[#1BFF3B] py-2 lg:py-8 pb-[40px]">
              <th>User Name</th>
              <th>Stocks</th>
              <th>Fiat</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="text-white border-spacing-x-3 border-slate-300 py-6 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
            <tr className="text-white border-spacing-x-3 border-slate-300 py-2 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]">
              <td>kaizen</td>
              <td>Stonks🚀</td>
              <td>No money</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(PortfolioScreen)
export default PortfolioScreen;
