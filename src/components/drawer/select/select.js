import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './select.css';

const SimpleSelect = () => {
  //   handleChange = event => {
  //     this.setState({ [event.target.name]: event.target.value });
  //   };

  return (
    <form autoComplete="off" className="status-select">
      <FormControl>
        <InputLabel htmlFor="Статус">Статус</InputLabel>
        <Select value={6}>
          <MenuItem value={1}>Выполняется</MenuItem>
          <MenuItem value={2}>На потом</MenuItem>
          <MenuItem value={3}>Выполнена</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default SimpleSelect;
