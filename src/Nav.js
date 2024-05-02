import React from 'react';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the cart icon
import Logo from './images/logo2.jpg';
import AboutUs from './About';
import Home from './Home';
import Veg from './Veg';
import Tiffins from './Tiffins';
import './Nav.css';
import Homepage from './Homepage';
import Cart from './Cart';


function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={'goldenrod'}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={'70'} width="200" />
      </Typography>
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to="/home1">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about-us">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/home">
            NonVeg
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/veg">
            Veg
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/tiffins">
            Tiffins
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/add-to-cart">
            {/* Include the cart symbol instead of the text "Cart" */}
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: 'none' },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={'goldenrod'}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={'70'} width="250" />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to="/home1">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/about-us">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/home">
                    NonVeg
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/veg">
                    Veg
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/tiffins">
                    Tiffins
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/add-to-cart">
                    {/* Include the cart symbol instead of the text "Cart" */}
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '240px',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>

      <Routes>
        <Route path="/home1" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/tiffins" element={<Tiffins />} />
        <Route path="/add-to-cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
