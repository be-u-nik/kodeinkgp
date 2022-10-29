import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReactApexChart from "react-apexcharts";
// import { connect } from 'react-redux'

export const StockPrices = (props) => {
  const [xvalues, setxvalues] = useState([]);
  const [yvalues, setyvalues] = useState([]);
  const [series_state, setseries_state] = useState([
    {
      name: "status",
      data: yvalues,
    },
  ]);
  useEffect(() => {
    return () => {};
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

    dataLabels: {
      enabled: false,
    },
    colors: ["#4C986A"],
    markers: {
      size: 0,
    },
    fill: {
      type: "solid",
      colors: ["#fff"],
    },
    grid: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: xvalues,
      tickAmount: 24,
    },
    yaxis: {
      type: "number",
      labels: {
        formatter: function (val) {
          return Math.round(Number(val));
        },
      },
      title: {
        text: "Market Price",
      },
    },
    stroke: {
      curve: "straight",
      colors: ["#4C986A"],
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
      <div className="lg:w-5/6 px-8 py-8">
        {/* GRAPH HEADING */}
        <div className="flex justify-between my-2 lg:my-6 lg:mb-8">
          <h2 onClick={() => console.log(series)}>Look here's a graph...</h2>
          <p>Current Stock Price: 9001$</p>
        </div>
        {/* GRAPH */}
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={450}
        />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(StockPricesScreen)
export default StockPrices;
