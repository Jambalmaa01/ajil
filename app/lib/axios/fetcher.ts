import axios, { AxiosError } from 'axios';

const BACKEND = process.env.NEXT_PUBLIC_BACKEND;

function getBackendIp() {
  let backendIP = BACKEND;

  if (typeof window !== 'undefined') {
    const storage = localStorage.getItem('backend_ip');

    if (storage) {
      backendIP = storage.substring(1, storage.length - 1);
    }
  }

  return backendIP;
}

export const axiosInstance = axios.create({
  baseURL: getBackendIp(),
  headers: {
    'Content-Type': 'application/json',
    // Authorization: getAuthorizationHeader(),
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token');

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (
      error.code === 'ERR_NETWORK' &&
      // @ts-ignore
      !originalRequest?._retry &&
      error.config?.url !== '/api/openid/'
    ) {
      window.location.href = '/ip-error';
    }

    // @ts-ignore
    if (error.response?.status === 401 && !originalRequest?._retry) {
      // @ts-ignore
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem('refresh_token');

        const response = await axios.post(`${BACKEND}/api/token/refresh/`, {
          refresh,
        });

        const access = response.data.access;

        localStorage.setItem('access_token', access);

        axiosInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${access}`;

        // @ts-ignore
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        window.location.href = '/auth/sign-in';

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
