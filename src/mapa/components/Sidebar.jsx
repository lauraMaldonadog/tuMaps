import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { Map, Person, TurnedInNot } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




export const SideBar = ({ drawerWidth = 340 }) => {
  
    const { displayName } = useSelector( state => state.auth );

  
    return (
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant='permanent'
          open
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Toolbar>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant='h6' noWrap component='div'>
                {displayName}
              </Typography>
            </Link>
          </Toolbar>
          <Divider />
  
          <List>
                    {
                        ['MapaMundi'].map(text => (
                            <ListItem key={text} disablePadding>
                                <Link to="/mapaMundi" style={{ textDecoration: 'none', color: 'inherit' }}>

                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Map />
                                        </ListItemIcon>
                                        <Grid container>
                                            <ListItemText primary={text} />
                                            <ListItemText secondary={'Al darle click aquí podrás ver el mapa mundi '} />

                                        </Grid>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>
                <List>
                    {
                        ['Barrios de Medellin'].map(text => (
                            <ListItem key={text} disablePadding>
                                <Link to="/barriosMedellin" style={{ textDecoration: 'none', color: 'inherit' }}>

                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Map />
                                        </ListItemIcon>
                                        <Grid container>
                                            <ListItemText primary={text} />
                                            <ListItemText secondary={'Al darle click aquí podrás ver los barrios de Medellín '} />

                                        </Grid>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>

                <List>
                    {
                        ['Editar Perfil'].map(text => (
                            <ListItem key={text} disablePadding>
                                <Link to="/updatePage" style={{ textDecoration: 'none', color: 'inherit' }}>

                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Person />
                                        </ListItemIcon>
                                        <Grid container>
                                            <ListItemText primary={text} />
                                            <ListItemText secondary={'Al darle click aquí podrás editar tu información personal'} />

                                        </Grid>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>

                <List>
                    {
                        ['Perfil'].map(text => (
                            <ListItem key={text} disablePadding>
                                <Link to="/perfilPage" style={{ textDecoration: 'none', color: 'inherit' }}>

                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Person />
                                        </ListItemIcon>
                                        <Grid container>
                                            <ListItemText primary={text} />
                                            <ListItemText secondary={'Al darle click aquí podrás ver tu perfil'} />

                                        </Grid>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>
        </Drawer>
      </Box>
    );
  };