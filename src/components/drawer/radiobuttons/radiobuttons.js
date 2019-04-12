import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const RadioButtonsGroup = () => {
  const [important, handleImportant] = useState();

  const handleChange = event => {
    console.log(event.target.value);
    handleImportant(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup value={important} onChange={handleChange}>
          <FormControlLabel
            value="1"
            control={<Radio color="primary" />}
            label="Срочная важная задача"
            labelPlacement="end"
          />
          <FormControlLabel
            value="2"
            control={<Radio color="primary" />}
            label="Срочная неважная задача"
            labelPlacement="end"
          />
          <FormControlLabel
            value="3"
            control={<Radio color="primary" />}
            label="Не срочная важная задача"
            labelPlacement="end"
          />
          <FormControlLabel
            value="4"
            control={<Radio color="primary" />}
            label="Не срочная неважная задача"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioButtonsGroup;
