import React from 'react';
import Button from '@material-ui/core/Button';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Button variant="contained" color="primary">
        Сохранить
      </Button>
      <Button variant="contained">Отмена</Button>
    </div>
  );
};

export default Footer;
