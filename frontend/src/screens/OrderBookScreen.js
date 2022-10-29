import React from "react";
import Navbar from "../components/Navbar";
// import { connect } from 'react-redux'

export const OrderBookScreen = (props) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-5/6 bg-[#D9D9D9] px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="text-center flex flex-col">
            <h1 className="mt-2 lg:my-6">Buy</h1>
            <table className="table-fixed border-separate border-spacing-x-24 border-slate-400">
              <thead>
                <tr className="border-spacing-x-3 border-slate-300 border-b-[2px] border-[#4C986A] py-2 lg:py-8 pb-[40px]">
                  <th>Quantity</th>
                  <th>Price</th>
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
          {/* <div className="h-[400px] border-[1px] absolute fixed"></div> */}
          <div className="text-center flex flex-col">
            <h1 className="mt-2 lg:my-6">Sell</h1>
            <table className="table-fixed border-separate border-spacing-x-24 border-slate-400">
              <thead>
                <tr className="border-spacing-x-3 border-slate-300 border-b-[2px] border-[#4C986A] py-2 lg:py-8 pb-[40px]">
                  <th>Quantity</th>
                  <th>Price</th>
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
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(OrderBookScreen)
export default OrderBookScreen;
