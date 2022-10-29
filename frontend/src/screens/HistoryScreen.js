import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
// import { connect } from 'react-redux'

export const HistoryScreen = (props) => {
  const [history, sethistory] = useState([]);
  useEffect(() => {
    // FUNCTION TO GET TRANSACTION HISTORY
    async function getHistory() {
      await axios.get("<base>/history").then((res) => {
        sethistory(res.data);
      });
    }
    getHistory();
    return () => {};
  }, []);

  return (
    <div className="lg:flex">
      {/* NAVBAR */}
      <Navbar />
      {/* SCREEN CONTENT */}
      <div className="text-white lg:w-5/6 px-8 py-8 lg:px-16 bg-[#000] h-screen overflow-y-scroll">
        <h1 className="text-white text-center font-bold text-base lg:text-3xl">
          Trade transaction History
        </h1>
        <ul className="text-center text-white mt-2 lg:mt-16">
          {history.map((transaction) => (
            <li className="mb-1 lg:mb-8">
              3 stocks from A transferred to B at price 500$
            </li>
          ))}
          <li className="mb-1 lg:mb-8">
            3 stocks from A transferred to B at price 500$
          </li>

          <li className="mb-1 lg:mb-8">
            3 stocks from A transferred to B at price 500$
          </li>
          <li className="mb-1 lg:mb-8">
            3 stocks from A transferred to B at price 500$
          </li>
        </ul>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)
export default HistoryScreen;
