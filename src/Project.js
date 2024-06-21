// Project.js
import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import makeiteasy from './makeiteasy.png';
import ecommerce from './ecommerce.jpeg';
import hrmanagemnt from './studentmanagementsystem.png';

const projects = [
  {
    title: 'Ecommerce - Toy Store',
    description: 'This is a toy store website built using the MERN stack.',
    image: ecommerce
  },
  {
    title: 'Student Management System',
    description: 'A MERN-based project with Apex Charts for managing student data.',
    image: hrmanagemnt
  },
  {
    title: ' Make It Easy',
    description: 'An HR management website using the MERN stack for management of office.',
    image: makeiteasy
  }
];

const Project = () => {
  return (
    <Container style={{ padding: '20px', marginTop: '20px' }}>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Project;
