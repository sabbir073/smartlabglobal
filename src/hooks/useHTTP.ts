'use client';
import axiosInstance from 'axios';

// import { clearCredentials } from '@/store/slices/authSlice/authSlice';
// import { fetchWebToken } from '@/utils/helpers/getWebTokenFromWeb';
import { decrementActiveCallsCount, incrementActiveCallsCount } from '@/store/slices/loaderSlice';
import { getAuthTokenFromLocalStorage } from '@/utils/helpers/localStorage';
import { useAppDispatch } from '@/store/hooks';
import { useToast } from './useToast';
import { useState } from 'react';


interface HTTPBaseOptions {
  api: string;
  config?: Record<string, any>;
  showLoader?: boolean;
  showErrorAlert?: boolean;
  showSuccessAlert?: boolean;
}

interface HTTPBodyOptions extends HTTPBaseOptions {
  body?: Record<string, any>;
}

interface AuthOptions extends HTTPBodyOptions {
  type: 'get' | 'post';
  headers?: Record<string, string>;
}

type HTTPResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: any;
};

export default function useHTTP() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { pushToast } = useToast()
  const errorHandler = (error: any) => {
    const message = error?.response?.data?.message || 'Something went wrong. Please try again.';
    pushToast({ message, type: 'error' })
    if (error?.response?.status === 401) {
      if (error?.response?.data?.status?.toString() === '400407') {
        // fetchWebToken();
        return;
      }
      // dispatch(clearCredentials());
    }
  };

  const handleRequest = async <T>(
    fn: () => Promise<T>,
    { showLoader = true, showErrorAlert = true, showSuccessAlert }: HTTPBaseOptions
  ): Promise<HTTPResponse<any>> => {
    if (showLoader) dispatch(incrementActiveCallsCount());
    setIsLoading(true)
    try {
      const result = await fn();
      if (showSuccessAlert) {
        pushToast({ message: 'Success', type: 'success' })
      }
      return { success: true, data: result };
    } catch (error) {
      if (showErrorAlert) errorHandler(error);
      return { success: false, error };
    } finally {
      if (showLoader) dispatch(decrementActiveCallsCount());
      setIsLoading(false)
    }
  };

  const GetData = async <T = any>({
    api,
    config = {},
    showLoader = false,
    showErrorAlert = false,
    showSuccessAlert = false,
  }: HTTPBaseOptions): Promise<HTTPResponse<T>> =>
    handleRequest(() => axiosInstance.get<T>(api, config), { api, showLoader, showErrorAlert, showSuccessAlert });

  const PostData = async <T = any>({
    api,
    body = {},
    config = {},
    showLoader = true,
    showErrorAlert = true,
    showSuccessAlert = true,
  }: HTTPBodyOptions): Promise<HTTPResponse<T>> =>
    handleRequest(() => axiosInstance.post<T>(api, body, config), { api, showLoader, showErrorAlert, showSuccessAlert });

  const UpdateData = async <T = any>({
    api,
    body = {},
    config = {},
    showLoader = true,
    showErrorAlert = false,
    showSuccessAlert = true,
  }: HTTPBodyOptions): Promise<HTTPResponse<T>> =>
    handleRequest(() => axiosInstance.put<T>(api, body, config), { api, showLoader, showErrorAlert, showSuccessAlert });

  const DeleteData = async <T = any>({
    api,
    config = {},
    showLoader = true,
    showErrorAlert = false,
    showSuccessAlert = true,
  }: HTTPBaseOptions): Promise<HTTPResponse<T>> =>
    handleRequest(() => axiosInstance.delete<T>(api, config), { api, showLoader, showErrorAlert, showSuccessAlert });

  const AuthData = async <T = any>({
    api,
    type,
    body = {},
    headers = {},
    showLoader = true,
    showErrorAlert = true,
    showSuccessAlert = false,

  }: AuthOptions): Promise<HTTPResponse<T>> => {
    const AuthToken = getAuthTokenFromLocalStorage();
    const config = {
      headers: {
        Authorization: `Bearer ${AuthToken}`,
        ...headers,
      },
    };

    if (type === 'post') {
      return await PostData({ api, body, config, showErrorAlert, showLoader, showSuccessAlert });
    }

    return await GetData({ api, config, showErrorAlert, showLoader, showSuccessAlert });
  };

  return {
    AuthData,
    GetData,
    PostData,
    UpdateData,
    DeleteData,
    isLoading
  };
}
