'use client';

import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import { HomeAppBar } from './appbar';

export type HomeFrameProps = PropsWithChildren<{
  hideDateRange?: boolean;
}>;

export function HomeFrame(props: HomeFrameProps) {
//   const { hideDateRange = false } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <HomeAppBar />
      
    </Box>
  );
}
