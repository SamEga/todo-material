import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import RadioButtonsGroup from '../radiobuttons/radiobuttons';
import { CurTaskContext } from '../../../App';

class DatePicker extends React.Component {
  // const [date, handleDate] = useState();

  // const changeDate = e => {
  //   console.log(e.target.value);
  //   handleDate(e.target.value);
  // };

  render() {
    let curTask = CurTaskContext;
    console.log(curTask.id);
    return (
      <form>
        <TextField
          label="Дата"
          type="date"
          // value={}
          // defaultValue={date}
          // onChange={changeDate}
          InputLabelProps={{
            shrink: true
          }}
        />
        {/* {date ? <RadioButtonsGroup /> : null} */}
      </form>
    );
  }
}

export default DatePicker;
