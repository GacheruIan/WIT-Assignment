import React from 'react';
import { useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, Avatar, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import "../Styles/Contact.css"

import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Contact() {
  // const [expanded, setExpanded] = React.useState(false);
  const [showEmoji, setShowEmoji] = useState(false);


  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ian~kibui/', '_blank');
  };

  const handleEmojiToggle = () => {
    setShowEmoji(!showEmoji);
  };


  const handleImageClick = () => {
    // Redirect to the specified link when the image is clicked
    window.open('https://github.com/GacheruIan', '_blank');
  };

  return (
    <div className="contact-container"> {/* Container for centering content */}

    <Card sx={{ maxWidth: 345 }} className='contact-card' style={{ marginLeft: "40%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            I
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" className="more-icon"onMouseOver={handleEmojiToggle}>
          {showEmoji ? "😊" : <MoreVertIcon />}
        </IconButton>
        }
        title="Welcome Ian"
        // subheader="September 14, 2016"
      />

      <a href="https://github.com/GacheruIan" onClick={handleImageClick}>
        <CardMedia
          component="img"
          height="194"
          image="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif" 
          alt="userimage"
          onClick={handleImageClick}
        />
      </a>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {/* 
         <i>Welcome Ian</i> 
         <a href="http s://www.linkedin.com/in/ian~kibui/">click_here</a> 
        <i>for more</i>
      */}
      
      <button id='karibu' onClick={handleLinkedInClick}>Welcome</button>
      </Typography>
      </CardContent>
    </Card>
    
    </div>

  );
}
