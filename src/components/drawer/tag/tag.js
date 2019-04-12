import React, { useState } from 'react';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import './tag.css';

const suggestions = [
  { label: 'Тэг0' },
  { label: 'Тэг1' },
  { label: 'Тэг2' },
  { label: 'Тэг3' },
  { label: 'Тэг4' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography color="textSecondary" {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return <Typography {...props.innerProps}>{props.children}</Typography>;
}

function ValueContainer(props) {
  return <div>{props.children}</div>;
}

function Menu(props) {
  return (
    <Paper square {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

const IntegrationReactSelect = () => {
  const [single, handleTag] = useState();

  const handleChange = name => value => {
    handleTag(value);
  };

  return (
    <div className="tag-select">
      <NoSsr>
        <Select
          options={suggestions}
          components={components}
          value={single}
          onChange={handleChange('single')}
          placeholder="Тэг"
          isClearable
        />
      </NoSsr>
    </div>
  );
};

export default IntegrationReactSelect;
