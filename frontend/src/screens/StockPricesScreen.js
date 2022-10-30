import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReactApexChart from "react-apexcharts";

// import { connect } from 'react-redux'

export const StockPricesScreen = (props) => {
  const [xvalues, setxvalues] = useState([]);
  const [increasedo, setincreasedo] = useState(true);
  const [increasedh, setincreasedh] = useState(true);
  const [increasedl, setincreasedl] = useState(true);
  const [increasedc, setincreasedc] = useState(true);
  const [closePrice, setclosePrice] = useState(0);
  const [openPrice, setopenPrice] = useState(0);
  const [highPrice, sethighPrice] = useState(0);
  const [lowPrice, setlowPrice] = useState(0);
  const [series_state, setseries_state] = useState([
    {
      name: "status",
      data: [],
    },
  ]);
  useEffect(() => {
    // let ws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
    let ws = new WebSocket(
      "wss://stream.binance.com:9443/stream?streams=btcusdt@miniTicker"
    );
    let y = {},
      yval = [];
    ws.onmessage = (e) => {
      // var d = new Date(JSON.parse(e.data).T);
      var d = new Date(JSON.parse(e.data).data.E);

      y[`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`] = JSON.parse(
        e.data
      ).data.c;
      // y[`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`] = JSON.parse(
      //   e.data
      // ).p;
      if (Object.keys(y).length > 500) delete y[Object.keys(y)[0]];
      yval = Object.values(y);
      // console.log(yval);
      // console.log(Number(yval.slice(-1)[0]));
      Number(yval.slice(-1)[0]) > closePrice
        ? setincreasedc(true)
        : setincreasedc(false);
      openPrice > JSON.parse(e.data).data.o
        ? setincreasedo(true)
        : setincreasedo(false);
      highPrice > JSON.parse(e.data).data.h
        ? setincreasedh(true)
        : setincreasedh(false);
      lowPrice > JSON.parse(e.data).data.l
        ? setincreasedl(true)
        : setincreasedl(false);
      setclosePrice(Number(yval.slice(-1)[0]));
      setopenPrice(JSON.parse(e.data).data.o);
      sethighPrice(JSON.parse(e.data).data.h);
      setlowPrice(JSON.parse(e.data).data.l);
      setxvalues(Object.keys(y));
      setseries_state([
        {
          name: "cap",
          data: yval.length > 500 ? yval.slice(-500) : yval,
        },
      ]);

      // console.log(series_state[0]?.data);
      // console.log(JSON.parse(e.data).data.c);
    };
    return () => {
      // ws.close();
    };
  }, []);

  // DEFINING PLOTTING POINTS ON THE GRAPH
  const series = series_state;
  // SETTING ADDITIONAL OPTIONS FOR THE GRAPH
  const options = {
    chart: {
      animations: {
        enabled: false,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      type: "line",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: false,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    noData: {
      text: "Chart data aot available",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#fff",
        fontSize: "14px",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1BFF4B"],
    markers: {
      size: 0,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        gradientToColors: ["#1BFF4B", "#1BFF4B", "#fff"],
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      type: "category",
      range: 20,
      categories: xvalues,
      tickAmount: 24,
      labels: {
        formatter: function (val) {
          // return val?.slice(-1) == 0 ? val : "";
          return val;
        },
        style: {
          colors: "#ffffff",
          fontSize: "12px",
          fontWeight: 600,
        },
      },
      title: {
        text: "Today-Time(HH:MM:SS)",
        style: {
          color: "#fff",
          fontSize: "12px",
          fontWeight: 600,
        },
      },
    },
    yaxis: {
      // min: 20770,
      // max: 20800,
      type: "number",
      opposite: true,
      labels: {
        formatter: function (val) {
          return Math.round(Number(val));
        },
        style: {
          colors: "#ffffff",
          fontSize: "12px",
          fontWeight: 600,
        },
      },
      title: {
        text: "Closing Price",
        style: {
          color: "#fff",
          fontSize: "12px",
          fontWeight: 600,
        },
      },
    },
    stroke: {
      curve: "straight",
      colors: ["#1BFF4B"],
      width: 1,
    },
    tooltip: {
      shared: false,
      x: {
        format: "HH:mm",
      },
      y: {
        formatter: function (val) {
          return val.toString();
        },
      },
    },
  };
  return (
    <div className="lg:flex">
      {/* NAVBAR */}
      <Navbar />
      {/* SCREEN CONTENT */}
      <div className="lg:w-5/6 px-8 py-8 bg-[#000] h-screen overflow-y-scroll hidescrollbar">
        {/* GRAPH HEADING */}
        <div className="flex flex-col lg:flex-row justify-between items-center my-2 lg:my-6 lg:mb-8">
          <h2 className="mb-2 md:mb-0 text-sm lg:text-4xl text-white">
            Bitcoin Stock Prices
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="mb-2 md:mb-0 md:mr-2 text-center px-1 lg:px-4 lg:py-1 bg-[#524C4C]/[.65] backdrop-blur-[2.8px] rounded-[8px]">
              <p className="text-white font-bold px-4 py-2 border-b-[2px] border-[#fff]">
                Open Price{" "}
              </p>
              {increasedo ? (
                <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#1BFF4B]">
                  {Math.round(openPrice * 100) / 100} 📈
                </p>
              ) : (
                <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#DC1212]">
                  {Math.round(openPrice * 100) / 100} 📉
                </p>
              )}
            </div>
            <div className="mb-2 md:mb-0 md:mr-2 text-center px-1 lg:px-4 lg:py-1 bg-[#524C4C]/[.65] backdrop-blur-[2.8px] rounded-[8px]">
              <p className="text-white font-bold px-4 py-2 border-b-[2px] border-[#fff]">
                High Price{" "}
              </p>
              {increasedh ? (
                <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#1BFF4B]">
                  {Math.round(highPrice * 100) / 100} 📈
                </p>
              ) : (
                <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#DC1212]">
                  {Math.round(highPrice * 100) / 100} 📉
                </p>
              )}
            </div>
            <div className="mb-2 md:mb-0 md:mr-2 text-center px-1 lg:px-4 lg:py-1 bg-[#524C4C]/[.65] backdrop-blur-[2.8px] rounded-[8px]">
              <p className="text-white font-bold px-4 py-2 border-b-[2px] border-[#fff]">
                Low- Price{" "}
              </p>
              {increasedl ? (
                <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#1BFF4B]">
                  {Math.round(lowPrice * 100) / 100} 📈
                </p>
              ) : (
                <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#DC1212]">
                  {Math.round(lowPrice * 100) / 100} 📉
                </p>
              )}
            </div>
            <div className="text-center px-1 lg:px-4 lg:py-1 bg-[#524C4C]/[.65] backdrop-blur-[2.8px] rounded-[8px]">
              <p className="text-white font-bold px-4 py-2 border-b-[2px] border-[#fff]">
                Close Price{" "}
              </p>
              {increasedc ? (
                <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#1BFF4B]">
                  {Math.round(closePrice * 100) / 100} 📈
                </p>
              ) : (
                <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#DC1212]">
                  {Math.round(closePrice * 100) / 100} 📉
                </p>
              )}
            </div>
          </div>
        </div>
        {/* GRAPH */}
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={550}
        />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(StockPricesScreen)
export default StockPricesScreen;
