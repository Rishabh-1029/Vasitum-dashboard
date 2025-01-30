import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Date picker - Date droper

function DateDropSelector() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="date-drop-selector">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd, MMMM yyyy"
        className="custom-datepicker"
        dropdownMode="select"
        style={{ textAlign: "center" }}
      />
    </div>
  );
}

export default DateDropSelector;
