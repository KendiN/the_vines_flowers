import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#F4BAC9", padding: '2rem', textAlign: 'center', marginTop: '30px' }}>
      <Typography variant="h6" gutterBottom>
        Connect with us
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <IconButton aria-label="facebook" size="large">
          <FacebookIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="twitter" size="large">
          <TwitterIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="instagram" size="large">
          <InstagramIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Typography variant="body2" style={{ fontFamily: 'Raleway', marginTop: '2rem' }}>
        © 2024 Your Flower Shop. All rights reserved.
      </Typography>
      <Typography variant="body2" style={{ fontFamily: 'Raleway' }}>
        Designed and developed with love by Your Name.
      </Typography>
    </Box>
  );
};

export default Footer;
