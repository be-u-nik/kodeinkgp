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
      <div className="lg:w-5/6 px-8 py-8">
        <h1 className="text-center">Trade transaction History</h1>
        <ul className="text-center">
          {history.map((transaction) => (
            <li>3 stocks from A transferred to B at price 500$</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)
export default HistoryScreen;
