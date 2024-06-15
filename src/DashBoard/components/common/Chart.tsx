import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { camelCaseToWords } from '../utils';

const Chart = (dashboardData) => {
  const keys = Object.entries(dashboardData).map(([key, value])=>camelCaseToWords(key));
  const data = Object.entries(dashboardData).map(([key, value])=>value);
  const options = {
    chart: {
      height: 350,
      type: 'line',
    },
    xaxis: {
      categories: keys,
      labels: {
        style: {
          colors: '#3B82F6',
        },
      },
    },
  };

  const series = [{
    name: 'Total',
    data: data,
  }];

  return (
    <div className="col-span-12 rounded-xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div id="chartOne" className="-ml-5">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default Chart;
