import imageRequire from '@/assets/images/dog.png';
import { ReactEventHandler } from 'react';

export const onImgError: ReactEventHandler<HTMLImageElement> = (e) => {
  e.currentTarget.src = imageRequire || '';
};
