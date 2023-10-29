import { PencilIcon } from '@/assets/svg';
import React, { ComponentProps } from 'react';

type Props = ComponentProps<'input'> & {
  className?: string;
};

const PencilInput = ({ className, ...props }: Props) => {
  return (
    <div className={`flex items-center gap-2`}>
      <PencilIcon />
      <input
        className={`border-b-[1px] text-gray-500 border-stone-300 focus:outline-none ${className}
      `}
        {...props}
      />
    </div>
  );
};

export default PencilInput;
