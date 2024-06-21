// Skills.js
import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText } from '@mui/material';
import frontendImage from './frontend.jpg';
import backendImage from './backend.jpg';
import databaseImage from './database.jpg';
import devopsImage from './devops.png';

const skills = [
  {
    title: 'Frontend',
    image: frontendImage,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular']
  },
  {
    title: 'Backend',
    image: backendImage,
    skills: ['Node.js', 'Express', 'Python', 'Java', 'Ruby on Rails']
  },
  {
    title: 'Database',
    image: databaseImage,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle', 'SQL Server']
  },
  {
    title: 'DevOps',
    image: devopsImage,
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Azure']
  }
];

const Skills = () => {
  return (
    <Container style={{ padding: '20px', marginTop: '20px' }}>
      <Grid container spacing={4}>
        {skills.map((skillCategory, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card style={{ height: '100%' }}>
              <CardMedia
                component="img"
                alt={skillCategory.title}
                height="140"
                image={skillCategory.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {skillCategory.title}
                </Typography>
                <List>
                  {skillCategory.skills.map((skill, i) => (
                    <ListItem key={i}>
                      <ListItemText primary={skill} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
