import { AxiosError } from 'axios';

export const getErrorMessage = (error: any): string => {
  if (error instanceof AxiosError) {
    return error.response?.data.message || error.message;
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return "An unexpected error occurred. Please try again later.";
  }
};