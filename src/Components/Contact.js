import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Contact() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleImageClick = () => {
    // Redirect to the specified link when the image is clicked
    window.open('', '_blank');
  };

  return (
    <Card sx={{ maxWidth: 345 }} className='contact-card' style={{ marginLeft: "40%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            I
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Welcome Ian"
        // subheader="September 14, 2016"
      />
      {/* Wrap the CardMedia with an anchor tag for the image link */}
      <a href="https://www.linkedin.com/in/ian~kibui/" onClick={handleImageClick}>
        <CardMedia
          component="img"
          height="194"
          image="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif" // Replace this URL with your image link
          alt="userimage"
          onClick={handleImageClick}
        />
      </a>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         <i>Welcome Ian</i> <a href="https://www.linkedin.com/in/ian~kibui/">click_here</a> <i>for more</i>
        </Typography>
      </CardContent>
    </Card>
  );
}
