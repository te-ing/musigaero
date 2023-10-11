import { PencilIcon } from '@/assets/svg';
import React, { ChangeEventHandler, ComponentProps, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import styles from './pencilDateInput.module.css';

type Props = ComponentProps<'input'> & {
  className?: string;
};

const PencilInput = ({ className, ...props }: Props) => {
  if (props.type === 'date') return PencilDateInput({ ...props });
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

const PencilDateInput = ({ ...props }: Props) => {
  const [date, setDate] = useState<Date>();
  const handleOnChange = (date: Date) => {
    setDate(date || new Date());
  };
  return (
    <div className={`flex items-center gap-2 `}>
      <PencilIcon />
      <DatePicker
        selected={date}
        placeholderText="떠난 날을 알려주세요"
        onChange={handleOnChange}
        onSelect={props.onChange as ChangeEventHandler<HTMLInputElement> & undefined}
        locale={ko}
        className={styles['react-datepicker']}
      />
    </div>
  );
};

export default PencilInput;
