import { PencilIcon } from '@/assets/svg';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import styles from './pencilDateInput.module.css';

type Props = {
  className?: string;
  placeholder?: string;
  onChange?: (date: Date) => void;
  required?: boolean;
};

const PencilDateInput = ({ ...props }: Props) => {
  const [date, setDate] = useState<Date>();

  const handleOnChange = (date: Date) => setDate(date || new Date());

  return (
    <div className={`flex items-center gap-2 `}>
      <PencilIcon />
      <DatePicker
        selected={date}
        placeholderText="떠난 날을 알려주세요"
        onChange={handleOnChange}
        onSelect={props.onChange}
        locale={ko}
        className={styles['react-datepicker']}
        required={props.required}
      />
    </div>
  );
};

export default PencilDateInput;
