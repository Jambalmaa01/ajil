'use client'

import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { Global } from '@emotion/react';
import ZorchilGrapic from '../[locale]/(home)/dashboard/ZorchilGrapic copy';
import DashboardMainPage from '../[locale]/(home)/dashboard/main/page';
export default function Copyright() {
  return (
    <>
    <Typography
    
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
        marginTop: 2, // Added margin for better spacing
      }}
    >
      {'Copyright © '}
      <MuiLink color="inherit" href="https://yourwebsite.com/" target="_blank" rel="noopener noreferrer">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
      {' All rights reserved.'}
    </Typography>
    <ZorchilGrapic/>
    {/* <DashboardMainPage/> */}
    </>

  );
}
