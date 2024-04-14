import React from 'react';
import { Typography, Grid, Box, Divider } from '@mui/material';

// Sample testimonial data
const testimonials = [
  { id: 1, text: "Michele is the kind of person you dream about working with for your wedding. Not only is she extremely personable, down to earth, FUN and friendly - but she has amazing attention-to-detail, her paperwork is professional and easy to follow, she LISTENS thoroughly to what you're looking for, uses visuals to communicate whenever possible, and is extremely reliable and responsive.", name: "- David" },
  { id: 2, text: "I cannot say enough about Michele and her entire team at Vines. Michele created my dream wedding flowers with little guidance on my part. She was very flexible, responsive and willing to planning the arrangements through email since my husband and I were overseas. Her artistic eye cannot be beat and I absolutely loved that she was able to incorporate exotic, dried flowers with beautiful, fresh flowers in such a gorgeous way. Support small businesses + support Vines!", name: " - Madeline" },
  { id: 3, text: "Some of the friendliest people I have ever met. Down to Earth staff who are incredibly talented designers. Everything arrangement you get, you are always going to get a beautiful variety of flowers and foliages for the most competitive price in the area.", name: "- Max" },
  { id: 4, text: "The Vines floral arrangements are spectacular!! Never have I received more beautiful arrangements. Thank you for bringing so much joy. No need to use any other florist in the area. They are fantastic!", name: "- Gerri" }
];

const Testimonials = () => {
  return (
    <Box marginTop={6} marginLeft={4} marginRight={4}>
        <Divider style={{ backgroundColor: '#DE1A78', marginBottom: '20px' }} /> {/* Colored line */}
      <Typography variant="h5" align="center" marginBottom={3} gutterBottom style={{ fontFamily: 'Raleway'}}>
        TESTIMONIALS
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Typography variant="body1" gutterBottom style={{ fontSize: '16px', fontFamily: 'Raleway' }}>{testimonials[0].text}</Typography>
          <Typography variant="subtitle1" style={{ fontSize: '14px' }}>{testimonials[0].name}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Typography variant="body1" gutterBottom style={{ fontSize: '16px', fontFamily: 'Raleway' }}>{testimonials[1].text}</Typography>
          <Typography variant="subtitle1" style={{ fontSize: '14px' }}>{testimonials[1].name}</Typography>
        </Grid>
      
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Typography variant="body1" gutterBottom style={{ fontSize: '16px', fontFamily: 'Raleway' }}>{testimonials[2].text}</Typography>
          <Typography variant="subtitle1" style={{ fontSize: '14px' }}>{testimonials[2].name}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <Typography variant="body1" gutterBottom style={{ fontSize: '16px', fontFamily: 'Raleway' }}>{testimonials[3].text}</Typography>
          <Typography variant="subtitle1" style={{ fontSize: '14px' }}>{testimonials[3].name}</Typography>
        </Grid>
      </Grid>
      <Divider style={{ backgroundColor: '#DE1A78', marginBottom: '20px', marginTop: "20px" }} /> {/* Colored line */}
    </Box>
  );
};

export default Testimonials;
