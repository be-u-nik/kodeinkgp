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
  const usertoId = {
    Nikhil: "635d0717e8ef696d3c0afe9b",
    Dheeraj: "635d0739e8ef696d3c0afe9c",
    Kiran: "635d074ee8ef696d3c0afe9d",
    vandy: "635d6866aa6500ccf26f74c9",
    aizen: "635d68b5aa6500ccf26f74ca",
    ichigo: "635d68c7aa6500ccf26f74cb",
    orihime: "635d68daaa6500ccf26f74cc",
    chad: "635d68f4aa6500ccf26f74cd",
    ishida: "635d6901aa6500ccf26f74ce",
    kempachi: "635d6915aa6500ccf26f74cf",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.value && field.name) {
        // if (field.name === "orderType" && field.value === "market") return;
        // else toast.error("Invalid " + field.name, { toastId: field.name });
        return;
      } else if (field.name === "userId")
        formData[field.name] = usertoId[field.value];
      else formData[field.name] = field.value;
    });
    console.log(formData);
    await axios
      .post("http://localhost:8000/api/stock", formData)
      .then((res) => {
        toast.info(res.data.message);
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
      <div className="lg:w-5/6 px-8 py-8 lg:px-16 bg-[#000] h-screen overflow-y-scroll hidescrollbar">
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
              <option value="Dheeraj">Dheeraj</option>
              <option value="Kiran">Kiran</option>
              <option value="vandy">vandy</option>
              <option value="aizen">aizen</option>
              <option value="ichigo">ichigo</option>
              <option value="orihime">orihime</option>
              <option value="chad">chad</option>
              <option value="ishida">ishida</option>
              <option value="kempachi">kempachi</option>
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
                className="px-6 py-2 h-[24px] md:h-[64px] text-center font-bold text-base lg:text-xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
              />
            </div>
            <div>
              {/* <label htmlFor="atprice">Select Price:</label> */}
              {/* <br /> */}
              <input
                type="number"
                placeholder="At Price"
                name="price"
                className="px-6 py-2 h-[24px] md:h-[64px] text-center font-bold text-base lg:text-xl rounded border-[3px] border-[#4E4E4E] bg-[#000] text-[#4E4E4E]"
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
