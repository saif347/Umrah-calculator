import  { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function DateRangePickerComponent() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div>
      <h2>Date Range Picker</h2>
      <DateRangePicker
        ranges={dateRange}
        onChange={handleSelect}
      />
      <div>
        <p>Start Date: {dateRange[0].startDate.toDateString()}</p>
        <p>End Date: {dateRange[0].endDate ? dateRange[0].endDate.toDateString() : 'Not Selected'}</p>
      </div>
    </div>
  );
}

export default DateRangePickerComponent;
