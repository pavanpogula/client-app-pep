import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';

const BasicDatePicker= ({setDateHanlder})=> {
  const minYear = dayjs('2000-01-01');
  const [value, setValue] = React.useState(dayjs('2024-04-04'));
  
  const handler= React.useCallback((newValue)=>{
setValue(newValue)

setDateHanlder(new Date(newValue).getFullYear())
  },[])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
          views={['year']}
          label="Year" 
          disableFuture
          minDate={minYear}
          value={value}
          onChange={(newValue) => handler(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default React.memo(BasicDatePicker)