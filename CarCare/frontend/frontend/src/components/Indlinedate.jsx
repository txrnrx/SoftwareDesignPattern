import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/css/style.css'
const InlineDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date('2024-07-30'));

  return (
    <div className="mt-6 w-full"> {/* Ensure full width */}
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      inline
    />
  </div>
  );
};

export default InlineDatePicker;
