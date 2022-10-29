import React from "react";
import Navbar from "../components/Navbar";
import ReactApexChart from "react-apexcharts";
// import { connect } from 'react-redux'

export const StockPricesScreen = (props) => {
  const xvalues = [6, "b", "c", "d"];
  const yvalues = [1, 2, 6, 4];
  const series = [
    {
      name: "status",
      data: yvalues,
    },
  ];
  const options = {
    chart: {
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
      labels: {
        formatter: function (val) {
          return val === 0 ? "Down" : val === 1 ? "Up" : "";
        },
      },
      title: {
        text: "Downtime",
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
    <div className="flex">
      <Navbar />
      <div className="w-5/6 bg-[#D9D9D9] px-8 py-8">
        <div className="flex justify-between">
          <h2>Look here's a graph...</h2>
          <p>Current Stock Price: 9001$</p>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={150}
        />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(StockPricesScreen)
export default StockPricesScreen;
