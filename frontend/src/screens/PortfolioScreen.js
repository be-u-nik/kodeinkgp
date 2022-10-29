import React from "react";
import Navbar from "../components/Navbar";
// import { connect } from 'react-redux'

export const PortfolioScreen = (props) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-5/6 bg-[#D9D9D9] px-8 py-8">
        <table className="table-fixed w-full border-seperate border-spacing-x-16 lg:border-spacing-x-40 border-slate-400">
          <thead className="h-[54px] lg:h-[62px]">
            <tr className="border-spacing-x-3 border-slate-300 border-b-[2px] border-[#4C986A] py-2 lg:py-8 pb-[40px]">
              <th>User Name</th>
              <th>Stocks</th>
              <th>Fiat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
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
