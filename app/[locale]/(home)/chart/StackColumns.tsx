'use client';

import React from 'react';
import {
  Chart as ChartJS,
  ChartOptions,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface DataItem {
  label: string;
  data: number[];
  backgroundColor: string;
}

interface StackedColumnChartProps {
  data: {
    labels: string[];
    datasets: DataItem[];
  };
  title: string;
}

const StackedColumnChart: React.FC<StackedColumnChartProps> = ({
  data,
  title,
}) => {
  const theme = useTheme();

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: theme.palette.text.primary,
          font: {
            size: 11, // Font size for legend labels
          },
        },
      },
      title: {
        display: true,
        text: title,
        color: theme.palette.text.primary,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
      },
      datalabels: {
        display: true,
        color: theme.palette.text.primary,
        anchor: 'center',
        clamp: false,
        align: 'center',
        formatter: (value: number) => {
          return value !== 0 ? value.toString() : null;
        },
        font: {
          size: 10,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          color: theme.palette.divider,
        },
        ticks: {
          color: theme.palette.text.primary,
          font: {
            size: 10,
          },
        },
      },
      y: {
        stacked: true,
        grid: {
          color: theme.palette.divider,
        },
        ticks: {
          stepSize: 1,
          color: theme.palette.text.primary,
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
};

export default StackedColumnChart;
