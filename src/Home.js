// src/Home.js
import React from 'react';
import { Container, Typography, Box, Button, Link } from '@mui/material';
import { Twitter, LinkedIn, GitHub, Facebook } from '@mui/icons-material';
import profilePicture from './profile.png';
import './Home.css'

const Home = () => {
  return (
    <Container id="home" style={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px'}}>
      <Box style={{ flex: '1', marginRight: '20px' }}>
        <Typography className='swajeet' variant="h1">Hello, It's Me</Typography>
        <Typography className='sohan' variant="h2">Swajeet Chavan</Typography>
        <Typography className='yash' variant="h3">And I'm a <span>Full Stack Developer</span></Typography>
        <Typography className='jay' variant="body1">"Being a full-stack developer is like trying to play both lead roles in a buddy cop movie – you're constantly arguing with yourself, but somehow, it all comes together in the end!" 🤣</Typography>
        <Box>
        <Link href="https://x.com/c_swajeett?t=LPg6GyS64YXJ4Me2m_txBg&s=15" target="_blank" color="inherit">
            <Twitter />
          </Link>
          <Link href="https://in.linkedin.com/in/swajeet-chavan-b72a01226" target="_blank" color="inherit">
            <LinkedIn />
          </Link>
          <Link href="https://github.com/swajeet732" target="_blank" color="inherit">
            <GitHub />
          </Link>
          <Link href="https://www.facebook.com/swajeet.chavan.1/" target="_blank" color="inherit">
            <Facebook />
          </Link>
        </Box>
        <Button variant="contained" href={`${process.env.PUBLIC_URL}/resume`} download>Download CV</Button>
      </Box>
      <Box style={{ flex: '1', textAlign: 'center' }}>
        <img src={profilePicture} alt="John Kendric" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }} />
      </Box>
    </Container>
  );
};

export default Home;
