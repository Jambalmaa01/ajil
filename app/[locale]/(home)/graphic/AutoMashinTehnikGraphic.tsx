import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useDashboardGraphic } from './useDashBoardGrspik';
import StackedColumnChart from '../chart/StackColumns';

interface HuchData {
  Автомашин: { option_value: string; count: number }[];
  Мотоцикл: { option_value: string; count: number }[];
  'Цасны чарга': { option_value: string; count: number }[];
  'Моторт завь': { option_value: string; count: number }[];
}

export function AutoMashinTehnikGraphic() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const { data } = useDashboardGraphic();
  const huch = data?.huch_data as HuchData;

  const chartData = React.useMemo(() => {
    if (!huch) return { labels: [], datasets: [] };

    const labels = ['Автомашин', 'Мотоцикл', 'Цасны чарга', 'Моторт завь'];

    const getCounts = (optionValue: string) =>
      labels.map(
        category =>
          huch[category as keyof HuchData]?.find(
            item => item.option_value === optionValue
          )?.count || 0
      );

    const datasets = [
      {
        label: 'Ашиглаж байгаа',
        data: getCounts('Тийм'),
        backgroundColor: '#6DC5D1',
      },
      {
        label: 'Эвдрэлтэй',
        data: getCounts('Үгүй'),
        backgroundColor: '#FEB941',
      },
      {
        label: 'Засвартай',
        data: getCounts('Засвартай'),
        backgroundColor: '#FDE49E',
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
      {chartData.datasets.length > 0 ? (
        <StackedColumnChart
          data={chartData}
          title='Автомашин техник хэрэгсэл'
        />
      ) : (
        <p>Мэдээлэл хайж байна ...</p>
      )}
    </Box>
  );
}
