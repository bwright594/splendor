import { CheckCircleTwoTone, EditTwoTone, HomeTwoTone, Brightness7TwoTone, Brightness4TwoTone, ChevronLeft, Menu } from '@mui/icons-material';
import { AppBar, Button, Divider, Drawer, Toolbar, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ColorModeContext } from './App';

export default function AppMenu() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Button startIcon={<Menu/>} onClick={handleDrawerOpen} color="inherit"/>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <Button onClick={handleDrawerClose} startIcon={<ChevronLeft/>} sx={{justifyContent: 'right'}}/>
        <Divider/>
        <Button component={Link} to="/" startIcon={<HomeTwoTone/>} sx={{justifyContent: 'left', mx: 2}}>
          Home
        </Button>
        <Button component={Link} to="feature1" startIcon={<EditTwoTone/>} sx={{justifyContent: 'left', mx: 2}}>
          Feature 1
        </Button>
        <Button component={Link} to="feature2" startIcon={<CheckCircleTwoTone/>} sx={{justifyContent: 'left', mx: 2}}>
          Feature 2
        </Button>
        <Button startIcon={theme.palette.mode === 'dark' ? <Brightness7TwoTone/> : <Brightness4TwoTone/>} sx={{marginTop: 'auto', mx: 2}} onClick={colorMode.toggleColorMode}>
          Theme
        </Button>
      </Drawer>
     <Outlet/>
    </>
  );
}
