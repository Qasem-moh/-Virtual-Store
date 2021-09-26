import React from 'react';
import {
  Typography,
  Button,
  img
} from '@material-ui/core';
import { useSelector } from 'react-redux';

function Header() {

  const cartItemsCount = useSelector(state => state.cartReducer.length)
  return (
    <div className="headerContainer" position="static">
      <header className="header">
        <Typography
          variant="h6"
          // className={classes.title}
        >
          Virtual Store
        </Typography>
        <Button ml="auto" color="inherit"> <img src="" alt=""/> ({cartItemsCount})</Button>
      </header>
    </div>
  );
}

export default Header;
