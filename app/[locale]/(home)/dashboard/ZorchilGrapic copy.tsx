'use client'; // Энд 'use client' зааж өгнө

import React from 'react';
import { Card, CardContent, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import CardFlip from '../card/CardFlip';

function ZorchilGrapic() {
    const zevsegData = [
        { value: 'ddfs', count: 5 },
        { value: 'klss', count: 4 },
        { value: 'dsds', count: 7 }
    ];

    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const totalCount = zevsegData.reduce((sum, item) => sum + item.count, 0);

    const frontCard = () => (
        <Card sx={{
            height: '17vh',
            boxShadow: 3,
            bgcolor: 'background.paper',
            color: isDarkMode ? 'text.primary' : 'text.secondary',
            borderLeft: `4px solid ${isDarkMode ? '#2e3b55' : '#A0DEFF'}`,
            borderRadius: 2,
            width:'27vh',
            backgroundColor:'green'
        }}>
            <CardContent>
                <Grid container justifyContent="center" display="flex" flexDirection="column">
                    <Typography textAlign='center'>Zorchil</Typography>
                    <Typography sx={{
                        fontSize: {
                            xs: '3rem',
                            sm: '0.5rem',
                            md: '3rem',
                            lg: '2.5rem',
                            xl: '3rem',
                        },
                    }} fontWeight='bold' textAlign='center' color='#5AB2FF'>
                        {totalCount}
                    </Typography>
                    <Typography textAlign='center' fontSize={12}>niit</Typography>
                </Grid>
            </CardContent>
        </Card>
    );

    const backCard = () => (
        <Card sx={{
            height: '17vh',
            boxShadow: 3,
            bgcolor: 'background.paper',
            color: isDarkMode ? 'text.primary' : 'text.secondary',
            borderLeft: `4px solid ${isDarkMode ? '#2e3b55' : '#A0DEFF'}`,
            borderRadius: 2,
            width:'27vh'
        }}>
            <CardContent>
                <Grid container fontSize={12} display="flex" flexDirection="column" sx={{
                    maxHeight: '13vh',
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': { display: 'none' },
                    scrollbarWidth: 'none',
                    overflowX: 'hidden',
                }}>
                    <Typography textAlign='center' paddingBottom={2}>Zewseglel</Typography>
                    {zevsegData.map((item, index) => (
                        <Grid container justifyContent='space-around' key={index}>
                            <Grid item={true}>{item.value}</Grid>
                            <Grid item={true}>{item.count}</Grid>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );

    return (
        <div>
            <CardFlip frontCard={frontCard()} backCard={backCard()} height="100%" />
        </div>
    );
}

export default ZorchilGrapic;
