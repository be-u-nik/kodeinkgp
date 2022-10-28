import React from "react";
import Navbar from "../components/Navbar";
// import { connect } from 'react-redux'

export const PortfolioScreen = (props) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-5/6 bg-[#D9D9D9] px-8 py-8">PortfolioScreen</div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(PortfolioScreen)
export default PortfolioScreen;
