'use client';

import React from 'react';
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@mui/material';

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler
);

interface DataItem {
  name: string;
  data: number;
}

export type AreaChartData = {
  field_name: string;
  value: DataItem[];
};

interface AreaChartProps {
  data: AreaChartData;
  title: string;
}

const AreaChart: React.FC<AreaChartProps> = ({ data, title }) => {
  const theme = useTheme();

  const chartData: ChartData<'line'> = {
    labels: data.value.map(item => item.name),
    datasets: [
      {
        label: title,
        data: data.value.map(item => Number(item.data)),
        fill: true,
        backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#40A578',
        borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#aee1fc',
        borderWidth: 2, // Thicker line
        tension: 0.4,
        pointStyle: 'circle', // Circle points
        pointRadius: 5, // Larger points
        pointBorderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#aee1fc',
        pointBackgroundColor:
          theme.palette.mode === 'dark' ? '#424242' : '#40A578',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: theme.palette.text.primary,
          font: {
            size: 12, // Larger font size for legend labels
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `Value: ${context.raw}`,
        },
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        type: 'category',
        labels: data.value.map(item => item.name),
        ticks: {
          color: theme.palette.text.primary,
          font: {
            size: 12,
          },
        },
        grid: {
          color: theme.palette.divider,
        },
      },
      y: {
        title: {
          display: true,
          text: data.field_name,
          color: theme.palette.text.primary,
        },
        ticks: {
          stepSize: 1,
          color: theme.palette.text.primary,
          font: {
            size: 12,
          },
        },
        grid: {
          color: theme.palette.divider,
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default AreaChart;
