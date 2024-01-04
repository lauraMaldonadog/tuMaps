import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { NavBar, SideBar } from '../components';

const drawerWidth = 280;

export const MapaLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}
      >
        <Toolbar />
        <Box sx={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
