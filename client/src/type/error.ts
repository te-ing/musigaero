import { AxiosError } from 'axios';
import { ReactNode } from 'react';

export type CustomAxiosError = AxiosError & {
  response: {
    data: {
      message?: ReactNode;
    };
  };
};
