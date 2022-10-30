import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// import { connect } from 'react-redux'

export const OrderBookScreen = (props) => {
  const [buy, setbuy] = useState([]);
  const [sell, setsell] = useState([]);
  useEffect(() => {
    // FUNCTION TO GET TRANSACTION HISTORY
    async function getOrderBook() {
      await axios.get("http://localhost:8000/api/orderBook").then((res) => {
        // sethistory(res.data);
        console.log(res.data);
        setbuy(res.data.buy);
        setsell(res.data.sell);
      });
    }
    getOrderBook();
    return () => {};
  }, []);
  return (
    <div className="lg:flex">
      <ToastContainer position="top-center" autoClose={5000} />

      {/* NAVBAR */}
      <Navbar />
      {/* SCREEN CONTENT */}
      <div className="text-white lg:w-5/6 px-8 py-8 bg-[#000] h-screen overflow-y-scroll hidescrollbar">
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="text-center flex flex-col">
            {/* PENDING TRANSSACTIONS - BUY */}
            <h1 className="mt-2 lg:my-6 text-base lg:text-xl font-bold text-[#1BFF3B]">
              Buy
            </h1>
            <table className="table-fixed border-separate border-spacing-x-24 border-slate-400">
              <thead className="h-[54px] lg:h-[62px] ">
                <tr className="text-[#4E4E4E] text-center border-spacing-x-3 border-b-[2px] border-[#1BFF3B] py-2 lg:py-8 pb-[40px]">
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>type</th>
                </tr>
              </thead>
              <tbody className="">
                {buy.map((val, index) => (
                  <tr
                    key={`buy_${index}`}
                    className="text-white text-center border-spacing-x-3 border-slate-300 py-6 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]"
                  >
                    <td>{val.noOfStocks}</td>
                    <td>{val.amount}</td>
                    <td>{val.orderType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <div className="h-[400px] border-[1px] absolute fixed"></div> */}
          <div className="text-center flex flex-col">
            {/* PENDING TRANSSACTIONS - SELL */}
            <h1 className="mt-2 lg:my-6 text-base lg:text-xl font-bold text-[#DC1212]">
              Sell
            </h1>
            <table className="table-fixed border-separate border-spacing-x-24 border-slate-400">
              <thead className="h-[54px] lg:h-[62px]">
                <tr className="text-[#4E4E4E] text-center border-spacing-x-3 border-slate-300 border-b-[2px] border-[#4C986A] py-2 lg:py-8 pb-[40px]">
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>type</th>
                </tr>
              </thead>
              <tbody className="">
                {sell.map((val, index) => (
                  <tr
                    key={`sell_${index}`}
                    className="text-white text-center border-spacing-x-3 border-slate-300 py-6 lg:py-8 pb-[40px] h-[54px] lg:h-[62px]"
                  >
                    <td>{val.noOfStocks}</td>
                    <td>{val.amount}</td>
                    <td>{val.orderType}</td>
                  </tr>
                ))}
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
