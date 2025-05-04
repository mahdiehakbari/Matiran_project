// src/components/Sidebar.tsx
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      {/* Drawer (Mobile View) */}
      <Drawer
        anchor='left'
        open={open}
        onClose={() => toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.background.paper,
            width: 240,
          },
        }}
      >
        <List>
          <ListItem component={Link} to='/' onClick={() => toggleDrawer(false)}>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <Divider />
          <ListItem
            component={Link}
            to='/crypto-details'
            onClick={() => toggleDrawer(false)}
          >
            <ListItemText primary='Crypto Details' />
          </ListItem>
        </List>
      </Drawer>

      {/* Desktop Sidebar */}
      <Drawer
        sx={{
          display: { xs: 'none', sm: 'block' }, // Show on desktop and hide on mobile
          '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.background.paper,
            width: 240,
            position: 'sticky',
            height: '100vh',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <List>
          <ListItem component={Link} to='/'>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <Divider />
          <ListItem component={Link} to='/crypto-details'>
            <ListItemText primary='Crypto Details' />
          </ListItem>
        </List>
      </Drawer>

      {/* Menu Icon for Mobile View */}
      <IconButton
        color='inherit'
        aria-label='menu'
        edge='start'
        onClick={() => toggleDrawer(true)}
        sx={{ mr: 2, display: { sm: 'none' } }} // Only show on mobile
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Sidebar;
