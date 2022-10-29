import React from "react";
import Navbar from "../components/Navbar";
// import { connect } from 'react-redux'

export const BuySellScreen = (props) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-5/6 bg-[#D9D9D9] px-8 py-8">
        <form action="">
          <div className="mt-2 lg:mt-8 ">
            <label htmlFor="buysell">Choose to whether Buy/Sell: </label>
            <br />
            <select name="buysell" id="buysell" className="px-6 py-2 rounded">
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <div className="mt-2 lg:mt-8 ">
            <label htmlFor="user">Select User: </label>
            <br />
            <select name="user" id="user" className="px-6 py-2 rounded">
              <option value="user1">User1</option>
              <option value="user2">User2</option>
              <option value="user3">User3</option>
              <option value="user4">User4</option>
            </select>
          </div>
          <div className="mt-2 lg:mt-8 ">
            <label htmlFor="ordertype">Select Order Type(limit/market): </label>
            <br />
            <select
              name="ordertype"
              id="ordertype"
              className="px-6 py-2 rounded"
            >
              <option value="limit">limit</option>
              <option value="market">market</option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-2 lg:mt-8 ">
            <div>
              <label htmlFor="stockamount">Input Stock Amount:</label>
              <br />
              <input type="number" name="stockamount" className="px-6 py-2 " />
            </div>
            <div>
              <label htmlFor="atprice">Select Price:</label>
              <br />
              <input type="number" name="atprice" className="px-6 py-2 " />
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 lg:mt-8 px-6 py-2 rounded border-[1px]"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(BuySellScreen)
export default BuySellScreen;
