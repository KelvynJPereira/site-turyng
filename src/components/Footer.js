import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar,
  Container,
  Toolbar,
  Typography,
} from '@material-ui/core';

const Footer = () => {
  return (
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Footer;
