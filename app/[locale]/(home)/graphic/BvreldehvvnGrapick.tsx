'use client';

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import StackedColumnChart from '../chart/StackColumns';
import { useDashboardGraphic } from './useDashBoardGrspik'

export function BureldehuunGraphic() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const { data, isLoading, isError } = useDashboardGraphic();
  const huch = data?.bureldehuun;

  const chartData = React.useMemo(() => {
    if (!huch || !huch.amralt_counts) return { labels: [], datasets: [] };

    // Define the categories
    const labels = ['Ахлагч', 'Офицер', 'Гэрээт', 'Хугацаат', 'Энгийн'];

    // Initialize datasets for each metric
    const datasets = [
      {
        label: 'Аж ахуйн ажил',
        data: labels.map(label =>
          Object.values(huch.amralt_counts).reduce(
            (acc, item) =>
              item.type === label && item.count ? acc + item.count : acc,
            0
          )
        ),
        backgroundColor: '#7BD3EA',
      },
      {
        label: 'Амралт',
        data: labels.map(label =>
          Object.values(huch.amralt_counts).reduce(
            (acc, item) =>
              item.type === label && item.count ? acc + item.count : acc,
            0
          )
        ),
        backgroundColor: '#A1EEBD',
      },
      {
        label: 'Гадна',
        data: labels.map(label =>
          Object.values(huch.amralt_counts).reduce(
            (acc, item) =>
              item.type === label && item.count ? acc + item.count : acc,
            0
          )
        ),
        backgroundColor: '#F6F7C4',
      },
      {
        label: 'Манаа',
        data: labels.map(label =>
          Object.values(huch.amralt_counts).reduce(
            (acc, item) =>
              item.type === label && item.count ? acc + item.count : acc,
            0
          )
        ),
        backgroundColor: '#E5D4FF',
      },
    ];

    return { labels, datasets };
  }, [huch]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        my: 1,
        boxShadow: 3,
        height: '23vh',
        padding: 1,
        borderRadius: 2,
        bgcolor: isDarkMode
          ? theme.palette.background.paper
          : theme.palette.background.paper,
        color: isDarkMode
          ? theme.palette.text.primary
          : theme.palette.text.secondary,
      }}
    >
      {isLoading ? (
        <Typography textAlign='center'>Мэдээлэл хайж байна ...</Typography>
      ) : isError ? (
        <Typography textAlign='center'>Мэдээлэл хайж байна ...</Typography>
      ) : (
        <StackedColumnChart data={chartData} title='Бие бүрэлдэхүүн' />
      )}
    </Box>
  );
}
