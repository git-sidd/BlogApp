import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { GiHamburgerMenu } from "react-icons/gi";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;


function Navbar(props) {
  const { window,isAuthenticated,setIsAuthenticated } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box  onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}  className='cursor-pointer'>
    <Link to={"/"} className='cursor-pointer' >  <h1 className='font-semibold cursor-pointer'><span className='text-blue-700 text-3xl underline'>S</span>idd<span className='text-blue-700 text-3xl underline'>B</span>logz</h1></Link>
      </Typography>
      <Divider />
     {
      isAuthenticated?(
        <List>
        
        <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText>
             <Link to={"/"}>
                   Home
             </Link>
          </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText>
          <Link to={"/about"}>
                   About
             </Link>
          </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText>
          <Link to={"/contact"}>
                   Contact
             </Link>
          </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText onClick={()=>setIsAuthenticated(false)}>
          
                   Logout
             
          </ListItemText>
          </ListItemButton>
        </ListItem>
  
    </List>
      ):
      (
        <List>
           <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText>
          <Link to={"/login"}>
                   Login
             </Link>
          </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText>
          <Link to={"/signup"}>
                   SignUp
             </Link>
          </ListItemText>
          </ListItemButton>
        </ListItem>
        </List>
      )
     }
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className='bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <GiHamburgerMenu  />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            
          >
             <Link to={"/"} >  <h1 className='font-semibold cursor-pointer'><span className='text-black text-3xl underline'>S</span>idd<span className='text-black text-3xl underline'>B</span>logz</h1></Link>
          </Typography>
        {
          isAuthenticated?(  <Box   sx={{ display: { xs: 'none', sm: 'block' } }}>
            
            <Button  sx={{ color: '#fff' }}>
            <Link to={"/"}>
                   Home
             </Link>
            </Button>
            <Button  sx={{ color: '#fff' }}>
            <Link to={"/about"}>
                   About
             </Link>
            </Button>
            <Button  sx={{ color: '#fff' }}>
            <Link to={"/contact"}>
                   Contact
             </Link>
            </Button>
            <Button  sx={{ color: '#fff' }}  onClick={()=>setIsAuthenticated(false)}>
            
                   Logout
             
            </Button>
          
        </Box>):(  <Box   sx={{ display: { xs: 'none', sm: 'block' } }}>
            
            <Button  sx={{ color: '#fff' }}>
            <Link to={"/login"}>
                   Login
             </Link>
            </Button>
            <Button  sx={{ color: '#fff' }}>
            <Link to={"/signup"}>
                   SignUp
             </Link>
            </Button>
            
          
        </Box>)
        }
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
           
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,backgroundColor:'#aacff3 ', borderTopRightRadius:'10px', borderBottomRightRadius:'10px' ,borderRightColor:'#ffffff', borderWidth:'5px'},
          }}
        >
         <div  >
         {drawer}
         </div>
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>


        </Typography>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
