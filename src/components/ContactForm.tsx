import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box marginTop={6} marginLeft={4} marginRight={4}>
      <Typography variant="h5" align="center" gutterBottom>
        Questions?
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
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
        <Box marginTop={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
