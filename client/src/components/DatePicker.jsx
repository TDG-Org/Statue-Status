import React, { useState } from "react";

// Datepicker 
import DatePickerr from "react-datepicker";

const DatePicker = () => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePickerr selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
};

export default DatePicker;