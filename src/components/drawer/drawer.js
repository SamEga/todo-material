import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Datepicker from './datepickers/datepicker';
import SimpleSelect from './select/select';
import IntegrationReactSelect from './tag/tag';
import Header from './header/header';
import Footer from './footer/footer';
import TextField from './textfield/textfield';
import './drawer.css';

const SwipeableTemporaryDrawer = props => {
  const [side, handleSide] = useState(false);

  const toggleDrawer = side => () => {
    handleSide(side);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Добавить Задачу</Button>

      <SwipeableDrawer
        className="swipe-drawer"
        anchor="right"
        open={side}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Header />
        <List className="drawer">
          <ListItem>
            <TextField
              placeholder={'Название задачи'}
              require={true}
              multiline={false}
            />
          </ListItem>
          <ListItem>
            <TextField
              placeholder={'Описание задачи'}
              require={false}
              multiline={true}
            />
          </ListItem>
          <ListItem>
            <Datepicker />
          </ListItem>
          <ListItem>
            <SimpleSelect />
          </ListItem>
          <ListItem>
            <IntegrationReactSelect />
          </ListItem>
        </List>
        <Footer />
      </SwipeableDrawer>
    </div>
  );
};

export default SwipeableTemporaryDrawer;
