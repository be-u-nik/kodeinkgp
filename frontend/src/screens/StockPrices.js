import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

// import { connect } from 'react-redux'

export const StockPrices = (props) => {
  const [xvalues, setxvalues] = useState([]);
  const [yvalues, setyvalues] = useState([]);
  const [increased, setincreased] = useState(true);
  const [currentPrice, setcurrentPrice] = useState(0);
  const [series_state, setseries_state] = useState([
    {
      name: 'status',
      data: yvalues,
    },
  ]);
  const [history, sethistory] = useState([]);

  useEffect(() => {
    async function getStocks() {
      await axios.get('http://localhost:8000/api/transactions').then((res) => {
        sethistory(res.data);
        console.log(res.data);
        var yvals = res.data.map((val) => {
          return val.price;
        });
        var xvals = res.data.map((val) => {
          const date = new Date(val.time);
          return `${date.getDate()} - ${
            date.getMonth() + 1
          } - ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        });
        setcurrentPrice(yvals.slice(-1));
        if (yvals.slice(-1) > currentPrice) setincreased(true);
        else setincreased(false);
        setseries_state([
          {
            name: 'status',
            data: yvals,
          },
        ]);
        setxvalues(xvals);
      });
    }
    getStocks();
    return () => {};
  }, []);

  // DEFINING PLOTTING POINTS ON THE GRAPH
  const series = series_state;
  // SETTING ADDITIONAL OPTIONS FOR THE GRAPH
  const options = {
    chart: {
      animations: {
        enabled: false,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      type: 'line',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: false,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
    },

    dataLabels: {
      enabled: false,
    },
    colors: ['#1BFF4B'],
    markers: {
      size: 0,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        gradientToColors: ['#1BFF4B', '#1BFF4B', '#fff'],
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
      type: 'category',
      categories: xvalues,
      tickAmount: 24,
      labels: {
        formatter: function (val) {
          // return val?.slice(-1) == 0 ? val : "";
          return val;
        },
        style: {
          colors: '#ffffff',
          fontSize: '12px',
          fontWeight: 600,
        },
      },
    },
    yaxis: {
      type: 'number',
      opposite: true,
      labels: {
        formatter: function (val) {
          return Math.round(Number(val));
        },
        style: {
          colors: '#ffffff',
          fontSize: '12px',
          fontWeight: 600,
        },
      },
      title: {
        text: 'Market Price',
        style: {
          color: '#fff',
          fontSize: '12px',
          fontWeight: 600,
        },
      },
    },
    stroke: {
      curve: 'straight',
      colors: ['#1BFF4B'],
    },
    tooltip: {
      shared: false,
      x: {
        format: 'HH:mm',
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
      <div className="lg:w-5/6 px-8 py-8 bg-[#000]">
        {/* GRAPH HEADING */}
        <div className="flex flex-col lg:flex-row justify-between items-center my-2 lg:my-6 lg:mb-8">
          <h2 className="text-sm lg:text-4xl text-white">
            Etheur Stock Prices
          </h2>
          <div className="text-center px-1 lg:px-4 lg:py-1 bg-[#524C4C] rounded-[8px]">
            <p className="text-white font-bold px-4 py-2 border-b-[2px] border-[#fff]">
              Choi-Stock Price{' '}
            </p>
            {increased ? (
              <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#1BFF4B]">
                {Math.round(currentPrice)} $
              </p>
            ) : (
              <p className="px-4 py-2 font-bold text-base lg:text-lg text-[#DC1212]">
                {Math.round(currentPrice)} $
              </p>
            )}
          </div>
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
