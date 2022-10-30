import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// CUSTOM NAVIGATION BUTTON
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className={`text-center mx-4 lg:mx-auto lg:w-full lg:max-w-[200px] rounded-[8px] text-xs text-white lg:text-sm py-1 px-2 md:py-2 lg:px-6 lg:py-3 font-bold my-2 lg:my-4 xl:my-6 hover:bg-[#1E5128] bg-[#00a82f]`}
    >
      {children}
    </Link>
  );
}

// CUSTOM NAVIGATION BUTTON
function Notifications({ open, setOpen, notifications }) {
  return open ? (
    <div className="hidescrollbar translate-x-[-100%] lg:translate-x-12 z-50 text-white absolute max-w-[300px] px-8 py-4 w-[200px] md:w-[300px] h-[300px] bg-[#010000]/[.3] backdrop-blur-[2.8px] rounded-[8px] overflow-y-scroll">
      {notifications.map((notification) => (
        <div className="border-b-[1px] border-[#1BFF3B] py-1">
          {notification.message}
        </div>
      ))}
    </div>
  ) : (
    <div></div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [notifications, setnotifications] = useState([]);
  useEffect(() => {
    async function getnotifications() {
      await axios.get("http://localhost:8000/api/notifications").then((res) => {
        console.log(res.data);
        setnotifications(res.data);
      });
    }
    getnotifications();
    return () => {};
  }, [open]);
  return (
    <nav className="flex flex-col lg:w-1/6 lg:h-screen lg:border-r-[2px] border-[#000000] bg-[#000]/[0.86] ">
      {/* <MobileNav open={open} setOpen={setOpen} /> */}
      {/* HEADING AND NOTIFICATION ICON */}
      <div className="lg:w-auto flex items-center justify-between mx-4 py-2 px-4 lg:mb-2 lg:mt-6">
        <Link
          to="/"
          className={`text-center w-full px-2 text-black bg-[white] rounded-[8px] py-1 md:py-2 lg:py-3 font-bold text-lg`}
        >
          Kaizen-stocks
        </Link>
      </div>
      <div className="lg:w-auto flex items-center justify-between mx-4 py-2 px-4 lg:mb-8">
        {/* <div className="font-bold text-xl"></div> */}
        <Link to="/realcrypto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            className="w-10 h-10 lg:w-12 lg:h-12 border-[2px] rounded p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
        </Link>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 lg:w-12 lg:h-12 border-[2px] rounded p-1"
            onClick={() => setOpen((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <Notifications open={open} notifications={notifications} />
        </div>
      </div>
      {/* HORIZONTAL RULE */}
      <div className="mx-auto w-1/2 border-b-[2px] border-[#000] hidden lg:block lg:mb-8"></div>
      {/* NAVIGATION TABS */}
      <div className="flex mx-6 flex-wrap lg:flex-col items-center">
        <NavLink to="/">Stock Prices</NavLink>
        <NavLink to="/portfolio">Users portfolio</NavLink>
        <NavLink to="/orderBook">OrderBook</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/buysell">Buy/Sell Stocks</NavLink>
      </div>
    </nav>
  );
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default Navbar;

// function MobileNav({ open, setOpen }) {
//   return (
//     <div
//       className={`absolute top-0 left-0  w-screen bg-white transform z-50 ${
//         open ? "translate-y-16" : "-translate-y-full"
//       } transition-transform duration-300 ease-in-out filter drop-shadow-md rounded-[4px] shadow-lg`}
//     >
//       <div className="flex flex-col ml-4">
//         <Link
//           to="/"
//           className="text-base lg:text-lg font-normal my-4"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           Stock Prices
//         </Link>
//         <Link
//           to="/portfolio"
//           className="text-base lg:text-lg  font-normal my-4"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           Users portfolio
//         </Link>
//         <Link
//           to="/orderBook"
//           className="text-base lg:text-lg  font-normal my-4"
//           onClick={() => {
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100);
//           }}
//         >
//           OrderBook
//         </Link>
//         <Link
//           to="/history"
//           className="text-base lg:text-lg  font-normal my-4"
//           onClick={() => {
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100);
//           }}
//         >
//           History
//         </Link>
//         <Link
//           to="/buysell"
//           className="text-base lg:text-lg  font-normal my-4"
//           onClick={() => {
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100);
//           }}
//         >
//           Buy/Sell Stocks
//         </Link>
//       </div>
//     </div>
//   );
// }
