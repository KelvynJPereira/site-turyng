import React from 'react';
import { 
  Container,
  Typography
} from '@material-ui/core';
import SubMenu from '../components/SubMenu';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>

        <Container maxWidth="lg">
          <SubMenu/>
          <NavBar/>
        </Container>

        <Container maxWidth="lg">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '120vh' }} />
        </Container>
   
      <Footer/>
    </div>
  )
}
