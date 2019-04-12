import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const TextFields = props => {
  const { placeholder, require, multiline } = props;
  // const [title, handleTitle] = useState('');

  // const changeTitle = e => {
  //   handleTitle(e.target.value);
  // };

  return (
    <TextField
      defaultValue=""
      placeholder={placeholder}
      margin="normal"
      required={require}
      multiline={multiline}
    />
  );
};

export default TextFields;
