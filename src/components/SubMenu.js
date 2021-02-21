import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root:{
  }
}));



const SubMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Grid className={classes.container} container sm={12}>
        
        <Grid item sm={6}>
          <PhoneIcon/>
          <Typography>1-800-456-478-23</Typography>
          <EmailIcon/>
          <Typography>Turyngbrasil@gmail.com</Typography>
        </Grid>
          
        <Grid item sm={6}>
          <FacebookIcon/>
          <InstagramIcon/>
        </Grid>

        <Divider/>
       
      </Grid>

    </div>
  )
}

export default SubMenu;
