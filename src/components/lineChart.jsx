import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { ResponsiveContainer } from 'recharts';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );
  // coinHistory?.data?.history?.length
const LineChart = ({ coinHistory }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < 53; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < 13; i += 1) {
    coinTimestamp.push(`01/01/${2009 + i}`);
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: true,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  
  
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

 
  return (
      <ResponsiveContainer width="100%" height="100%">
      <Line data={data} options={options} />
      </ResponsiveContainer>
  );
};

export default LineChart;