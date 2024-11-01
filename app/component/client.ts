'use client'
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      // keepPreviousData: true,
      networkMode: process.env.NODE_ENV === 'development' ? 'always' : 'online',
    },
    mutations: {
      networkMode: process.env.NODE_ENV === 'development' ? 'always' : 'online',
    },
  },
});
