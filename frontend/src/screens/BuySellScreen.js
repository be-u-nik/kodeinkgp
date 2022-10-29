import axios from "axios";
import React from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";

// import { connect } from 'react-redux'

export const BuySellScreen = (props) => {
  // FORM HANDLING FUNCTION
  const formData = {
    buySell: "buy",
    userId: "Nikhil",
    orderType: "limit",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.value && field.name) {
        toast.error("Invalid " + field.name, { toastId: field.name });
        return;
      } else if (field.name) formData[field.name] = field.value;
    });
    await axios
      .post("http://localhost:8000/api/stock", formData)
      .then((res) => {
        // toast.info("");
        console.log(res.data);
        // setTimeout(() => {
        //   navigate("/");
        // }, 6000);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  return (
    <div className="lg:flex">
      <ToastContainer position="top-center" autoClose={5000} />
      {/* NAVBAR */}
      <Navbar />
      {/* SCREEN CONTENT */}
      <div className="lg:w-5/6 px-8 py-8 lg:px-16 bg-[#000] h-screen overflow-y-scroll">
        {/* BUY/SELL FORM */}
        <form
          action=""
          className="border-[2px] border-[#1BFF3B] rounded-[8px] h-full w-full p-4 lg:p-16"
          method="post"
          onSubmit={handleSubmit}
        >
          <h1 className="text-white text-center font-bold text-base lg:text-3xl">
            Buy/Sell Stocks
          </h1>
          <div className="mt-2 lg:mt-4 ">
            {/* <label htmlFor="buysell">Choose to whether Buy/Sell: </label> */}
            <br />
            <select
              name="buySell"
              id="buysell"
              className="px-6 py-2 w-full h-[24px] md:h-[64px] text-center font-bold text-base lg:text-2xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
            >
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <div className="flex justify-between mt-2 lg:mt-8 ">
            {/* <label htmlFor="user">Select User: </label> */}
            {/* <br /> */}
            <select
              name="userId"
              id="user"
              className="px-6 py-2 w-1/4 h-[24px] md:h-[64px] text-center font-bold text-base lg:text-2xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
            >
              <option value="Nikhil">Nikhil</option>
              <option value="Dheeraj">User2</option>
              <option value="Kiran">Kiran</option>
              <option value="user4">User4</option>
            </select>

            {/* <label htmlFor="ordertype">Select Order Type(limit/market): </label> */}
            {/* <br /> */}
            <select
              name="orderType"
              id="ordertype"
              className="px-6 py-2 w-1/4 h-[24px] md:h-[64px] text-center font-bold text-base lg:text-2xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
            >
              <option value="limit">Limit</option>
              <option value="market">Market</option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-2 lg:mt-8 ">
            <div>
              {/* <label htmlFor="stockamount">Input Stock Amount:</label> */}
              {/* <br /> */}
              <input
                type="number"
                placeholder="Stock Amount"
                name="amountOfStocks"
                className="px-6 py-2 h-[24px] md:h-[64px] text-center font-bold text-base lg:text-2xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
              />
            </div>
            <div>
              {/* <label htmlFor="atprice">Select Price:</label> */}
              {/* <br /> */}
              <input
                type="number"
                placeholder="At Price"
                name="price"
                className="px-6 py-2 h-[24px] md:h-[64px] text-center font-bold text-base lg:text-2xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
              />
            </div>
          </div>
          <div className="mt-2 lg:mt-4 flex justify-center">
            <button
              type="submit"
              className="lg:mt-8 px-6 py-2 lg:px-12 lg:py-4 rounded text-center font-bold text-base lg:text-2xl rounded bg-[#1BFF3B] text-[#4E4E4E]"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(BuySellScreen)
export default BuySellScreen;
