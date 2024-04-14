import React from 'react';
import { Box } from "@mui/material";
import { NavbarContainer, MyList, LogoImage } from '../styles/navbar';
import { Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";


const Navbar = () => {
    return (
       <NavbarContainer>
        <LogoImage sx={{
                height:'90px',
                width: '90px',
                paddingRight: '10px',
                paddingBottom: '5px'
            }}src="/images/logo.webp"/>

        <MyList type="row">
            <ListItemText primary='Home'></ListItemText>
            <ListItemText primary='Categories'></ListItemText>
            <ListItemText primary='Products'></ListItemText>
            <ListItemText primary='Contact us'></ListItemText>
            <Box sx={{ flexGrow: 40 }} /> {/* Empty box to push icons to the right */}
            <ListItemButton>
                <ListItemIcon sx={{ color: "#DE1A78" }}>
                    <SearchIcon />
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{ color: "#DE1A78" }}>
                    <ShoppingCartIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation='vertical' flexItem/>
            <ListItemButton>
                <ListItemIcon sx={{ color: "#DE1A78" }}>
                    <FavoriteIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation='vertical' flexItem/>
            <ListItemButton>
                <ListItemIcon sx={{ color: "#DE1A78" }}>
                    <PersonIcon />
                </ListItemIcon>
            </ListItemButton>
        </MyList>
       </NavbarContainer>
    )
}

export default Navbar;
