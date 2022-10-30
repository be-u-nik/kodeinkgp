import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReactApexChart from "react-apexcharts";

// import { connect } from 'react-redux'

export const StockPricesScreen = (props) => {
  const [xvalues, setxvalues] = useState([]);
  const [increased, setincreased] = useState(true);
  const [currentPrice, setcurrentPrice] = useState(0);
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
    let y = {};
    ws.onmessage = (e) => {
      // var d = new Date(JSON.parse(e.data).T);
      var d = new Date(JSON.parse(e.data).data.E);
      y[`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`] = JSON.parse(
        e.data
      ).data.c;
      // y[`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`] = JSON.parse(
      //   e.data
      // ).p;
      // if (Object.keys(y).length > 500) delete y[Object.keys(y)[0]];
      let yval = Object.values(y);
      // console.log(yval);
      // console.log(Number(yval.slice(-1)[0]));
      Number(yval.slice(-1)[0]) > currentPrice
        ? setincreased(true)
        : setincreased(false);
      setcurrentPrice(Number(yval.slice(-1)[0]));
      setxvalues(Object.keys(y));
      setseries_state([
        {
          name: "cap",
          data: yval.length > 500 ? yval.slice(-500) : yval,
        },
      ]);
      // console.log(JSON.parse(e.data).data.c);
    };

    return () => {};
  }, [currentPrice]);

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
        text: "Market Price",
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
          <h2 className="text-sm lg:text-4xl text-white">
            Bitcoin Stock Prices
          </h2>
          <div className="text-center px-1 lg:px-4 lg:py-1 bg-[#524C4C]/[.65] backdrop-blur-[2.8px] rounded-[8px]">
            <p className="text-white font-bold px-4 py-2 border-b-[2px] border-[#fff]">
              Current Stock Price{" "}
            </p>
            {increased ? (
              <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#1BFF4B]">
                {Math.round(currentPrice * 100) / 100} 📈
              </p>
            ) : (
              <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#DC1212]">
                {Math.round(currentPrice * 100) / 100} 📉
              </p>
            )}
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
