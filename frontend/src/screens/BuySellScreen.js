import React from "react";
import Navbar from "../components/Navbar";
// import { connect } from 'react-redux'

export const BuySellScreen = (props) => {
  // FORM HANDLING FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="lg:flex">
      {/* NAVBAR */}
      <Navbar />
      {/* SCREEN CONTENT */}
      <div className="lg:w-5/6 px-8 py-8 lg:px-16 bg-[#000] h-screen overflow-y-scroll">
        {/* BUY/SELL FORM */}
        <form
          action=""
          className="border-[2px] border-[#1BFF3B] rounded-[8px] h-full w-full p-4 lg:p-16"
        >
          <h1 className="text-white text-center font-bold text-base lg:text-3xl">
            Buy/Sell Stocks
          </h1>
          <div className="mt-2 lg:mt-4 ">
            {/* <label htmlFor="buysell">Choose to whether Buy/Sell: </label> */}
            <br />
            <select
              name="buysell"
              id="buysell"
              className="px-6 py-2 w-full h-[24px] lg:h-[64px] text-center font-bold text-base lg:text-2xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
            >
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <div className="flex justify-between mt-2 lg:mt-8 ">
            {/* <label htmlFor="user">Select User: </label> */}
            {/* <br /> */}
            <select
              name="user"
              id="user"
              className="px-6 py-2 w-1/4 h-[24px] lg:h-[64px] text-center font-bold text-base lg:text-2xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
            >
              <option value="user1">User1</option>
              <option value="user2">User2</option>
              <option value="user3">User3</option>
              <option value="user4">User4</option>
            </select>

            {/* <label htmlFor="ordertype">Select Order Type(limit/market): </label> */}
            {/* <br /> */}
            <select
              name="ordertype"
              id="ordertype"
              className="px-6 py-2 w-1/4 h-[24px] lg:h-[64px] text-center font-bold text-base lg:text-2xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
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
                name="stockamount"
                className="px-6 py-2 h-[24px] lg:h-[64px] text-center font-bold text-base lg:text-2xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
              />
            </div>
            <div>
              {/* <label htmlFor="atprice">Select Price:</label> */}
              {/* <br /> */}
              <input
                type="number"
                placeholder="At Price"
                name="atprice"
                className="px-6 py-2 h-[24px] lg:h-[64px] text-center font-bold text-base lg:text-2xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
              />
            </div>
          </div>
          <div className="mt-2 lg:mt-4 flex justify-center">
            <button
              type="submit"
              className="lg:mt-8 px-6 py-2 lg:px-12 lg:py-4 rounded text-center font-bold text-base lg:text-2xl rounded bg-[#1BFF3B] text-[#4E4E4E]"
              onClick={handleSubmit}
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
