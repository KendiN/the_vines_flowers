import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled component for category name
const CategoryName = styled(Typography)({
  textAlign: 'center',
  marginTop: '8px' // Reduced margin
});

// Sample data for categories
const categories = [
  { id: 1, name: 'Fresh Flowers', image: '/images/cat1.webp' },
  { id: 2, name: 'Plants', image: '/images/cat2.webp' },
  { id: 3, name: 'Home Decor', image: '/images/cat3.webp' },
  { id: 4, name: 'Michigan Made', image: '/images/cat4.webp' },
  { id: 5, name: 'Gifts', image: '/images/cat5.webp' },
  { id: 6, name: 'Garden', image: '/images/cat6.webp' },
  { id: 7, name: 'Weddings', image: '/images/cat1.webp' },
  { id: 8, name: 'Seasonal', image: '/images/cat2.webp' },
];

const FeaturedCategories = () => {
  return (
    <Box marginTop={8} marginLeft={4} marginRight={4}> 
      <Typography variant="h5" align="center" marginBottom={3} gutterBottom style={{ fontFamily: 'Raleway'}}>
        FEATURED CATEGORIES
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categories.map(category => (
          <Grid key={category.id} item xs={12} sm={6} md={4} style={{ maxWidth: '250px' }}> 
            <img src={category.image} alt={category.name} style={{ width: '100%', borderRadius: '8px' }} />
            <CategoryName variant="subtitle1">{category.name}</CategoryName>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedCategories;
