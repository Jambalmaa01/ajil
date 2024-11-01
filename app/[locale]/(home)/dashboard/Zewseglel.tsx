'use client';

import { Card, CardContent, Grid, Typography, useTheme } from '@mui/material';
import CardFlip from '../card/CardFlip';
import { useDashboard } from './useDashoard';

export function Zewseglel() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const { data, isLoading, isError } = useDashboard();

  const zevsegData = data?.zevseg?.flat() || [];

  const totalCount = zevsegData.reduce((sum, item) => sum + item.count, 0);

  const frontCard = () => {
    return (
      <Card
        sx={{
          height: '17vh',
          boxShadow: 3,
          bgcolor: 'background.paper',
          color: isDarkMode ? 'text.primary' : 'text.secondary',
          borderColor: isDarkMode ? 'background.paper' : 'background.paper',
          borderRadius: 2,
          position: 'relative',

          borderLeft: `4px solid ${isDarkMode ? '#2e3b55' : '#A0DEFF'}`,
        }}
      >
        <CardContent>
          <Grid fontSize={12} columnSpacing={{ xs: 0, sm: 1, md: 2 }}>
            <Typography textAlign='center'>Зэвсэглэл</Typography>

            {isLoading ? (
              <Typography textAlign='center'>Loading</Typography>
            ) : isError ? (
              <Typography textAlign='center'>Алдаа гарлаа</Typography>
            ) : (
              <>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '3rem',
                      sm: '0.5rem',
                      md: '3rem',
                      lg: '2.5rem',
                      xl: '3rem',
                    },
                  }}
                  fontWeight={'bold'}
                  textAlign='center'
                  color={'#5AB2FF'}
                >
                  {totalCount}
                </Typography>
                <Typography textAlign='center' fontSize={12}>
                  Нийт
                </Typography>
              </>
            )}
          </Grid>
        </CardContent>
      </Card>
    );
  };

  const backCard = () => {
    return (
      <Card
        sx={{
          height: '17vh',
          boxShadow: 3,
          bgcolor: 'background.paper',
          color: isDarkMode ? 'text.primary' : 'text.secondary',
          borderColor: isDarkMode ? 'background.paper' : 'background.paper',
          borderRadius: 2,
          position: 'relative',
          borderLeft: `4px solid ${isDarkMode ? '#2e3b55' : '#A0DEFF'}`,
        }}
      >
        <CardContent>
          <Grid
            fontSize={12}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              maxHeight: '13vh',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              overflowX: 'hidden',
            }}
          >
            <Typography textAlign='center' paddingBottom={2}>
              Зэвсэглэл
            </Typography>

            {isLoading ? (
              <Typography textAlign='center'>Loading</Typography>
            ) : isError ? (
              <Typography textAlign='center'>Алдаа гарлаа</Typography>
            ) : (
              zevsegData?.map((item, index) => (
                <Grid
                  display='flex'
                  justifyContent='space-between'
                  key={index}
                  sx={{
                    fontSize: {
                      xs: '1rem',
                      sm: '0.5rem',
                      md: '0.7rem',
                      lg: '0.7rem',
                      xl: '12px',
                    },
                  }}
                >
                  <Grid> {item.value}</Grid>
                  <Grid> {item.count ?? '...'}</Grid>
                </Grid>
              ))
            )}
          </Grid>
        </CardContent>
      </Card>
    );
  };

  return (
    <CardFlip frontCard={frontCard()} backCard={backCard()} height='17vh' />
  );
}
