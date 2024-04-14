import {Button, Container, ThemeProvider} from '@mui/material';
import {useEffect} from 'react';
import theme from "./styles/theme";
import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import FeaturedCategories from './components/Categories';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {

  useEffect(() => {
    document.title = "Home Page";
  }, []);


  return (
  <ThemeProvider theme={theme}>
    <Container
    maxWidth="xl"
    sx={{
      background: "#fff",
    }}
    >
      <Navbar />
      <Banner />
      <FeaturedCategories />
      <Testimonials />
      <ContactForm />
    </Container>
    <Footer />
    </ThemeProvider>
    
  );
}

export default App;
