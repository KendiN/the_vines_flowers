import React from 'react';
import { Typography, Box, TextField, Button, Container } from '@mui/material';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '6rem', textAlign: 'center' }}>
      <Typography variant="h5" style={{ fontFamily: 'Raleway'}} gutterBottom>
        Questions?
      </Typography>
      <Typography variant="body1" style={{ fontFamily: 'Raleway'}} gutterBottom>
        We'd love to hear from you!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box marginTop={2}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="dense"
            required
          />
        </Box>
        <Box marginTop={2}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="dense"
            type="email"
            required
          />
        </Box>
        <Box marginTop={2}>
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="dense"
            multiline
            rows={4}
            required
          />
        </Box>
        <Box marginTop={2} style={{ textAlign: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ borderRadius: 20, width:"30px" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ContactForm;
