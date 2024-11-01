'use client'
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query'; // react-query импортлох
import { TextField, Button, Typography, Container, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { AuthSignInAPIResponse } from './api';
import {
    AuthSignInSchema,
  } from './schema';
import { axiosInstance } from '@/app/lib/axios/fetcher';

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6}  variant="filled" {...props} />
));

export function SignIn  ()  {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const mutation = useMutation({
    mutationFn:  (data:AuthSignInSchema) => {
        return axiosInstance.post<AuthSignInAPIResponse>('api/token/', data).then(res=>res.data)
        
    },
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      // Redirect to home...
    },
    onError: (error) => {

        console.error('Sign-in error:', error); // Log the entire error for debugging
        const message =
        error.response?.data?.detail || 
        error.message ||  'An error occurred';
      setSnackbarMessage(message);
      setSnackbarOpen(true);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(credentials);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          value={credentials.username}
          onChange={(e) => setCredentials((credentials) => ({ ...credentials, username: e.target.value }))}
          required
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={mutation.isPaused}
        >
          {mutation.isPaused ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

