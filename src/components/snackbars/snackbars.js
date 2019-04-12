import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const SimpleSnackbar = () => {
  const [open, handleOpen] = useState(false);

  const handleClick = () => {
    handleOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    handleOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">Note archived</span>}
        action={[
          <Button
            key="undo"
            color="secondary"
            size="small"
            onClick={handleClose}
          >
            UNDO
          </Button>
          //   <IconButton
          //     key="close"
          //     aria-label="Close"
          //     color="inherit"
          //     onClick={this.handleClose}
          //   >
          //     <CloseIcon />
          //   </IconButton>
        ]}
      />
    </div>
  );
};

export default SimpleSnackbar;
