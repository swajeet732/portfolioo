// ContactPage.js
import React from 'react';
import { Container, Typography, Box, Paper, Link } from '@mui/material';

const ContactPage = () => {
  return (
    <Container maxWidth="sm" style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '10px', marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          
        </Typography>
        <Box style={{ marginBottom: '15px' }}>
          <Typography variant="h6" component="p">
            <strong>Name:</strong> Swajeet Chavan
          </Typography>
        </Box>
        <Box style={{ marginBottom: '15px' }}>
          <Typography variant="h6" component="p">
            <strong>Phone:</strong> 
            <Link href="tel:+919834610192" style={{ marginLeft: '10px', textDecoration: 'none', color: '#3f51b5' }}>
              +91 9834610192
            </Link>
          </Typography>
        </Box>
        <Box style={{ marginBottom: '15px' }}>
          <Typography variant="h6" component="p">
            <strong>Email:</strong> 
            <Link href="mailto:swajeetchavan732@gmail.com" style={{ marginLeft: '10px', textDecoration: 'none', color: '#3f51b5' }}>
              swajeetchavan732@gmail.com
            </Link>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="p" gutterBottom>
            <strong>About Me:</strong>
          </Typography>
          <Typography variant="body1" component="p">
            I am a full stack developer with a passion for creating dynamic and responsive web applications. With experience in both front-end and back-end technologies, I strive to deliver seamless user experiences and robust functionalities. Let's build something great together!
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactPage;
