import {
  AppBar as MuiAppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import {
  BrowserRouter,
  Navigate,
  NavigateFunction,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { Exercise1 } from './routes/Exercise1';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import LooksThreeIcon from '@mui/icons-material/Looks3';
import LooksFourIcon from '@mui/icons-material/Looks4';
import { Exercise2 } from './routes/Exercise2';
import { Exercise3 } from './routes/Exercise3';
import { Exercise4 } from './routes/Exercise4';

let navigate: NavigateFunction;

function SetHistory() {
  navigate = useNavigate();

  return null;
}

const drawerWidth = 240;

const Main = styled(
  'main',
  {}
)(({ theme, open }: { theme?: Theme; open: boolean }) => ({
  marginTop: '65px',
  flexGrow: 1,
  padding: theme?.spacing(3),
  transition: theme?.transitions.create('margin', {
    easing: theme?.transitions.easing.sharp,
    duration: theme?.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme?.transitions.create('margin', {
      easing: theme?.transitions.easing.easeOut,
      duration: theme?.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  }),
}));

const AppBar = styled(
  MuiAppBar,
  {}
)(({ theme, open }: { theme?: Theme; open: boolean }) => ({
  transition: theme?.transitions.create(['margin', 'width'], {
    easing: theme?.transitions.easing.sharp,
    duration: theme?.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme?.transitions.create(['margin', 'width'], {
      easing: theme?.transitions.easing.easeOut,
      duration: theme?.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export function App() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <SetHistory />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Code Exercises
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              navigate('/exercise1');
              handleDrawerClose();
            }}
          >
            <ListItemIcon>
              <LooksOneIcon />
            </ListItemIcon>
            <ListItemText primary="Exercise" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              navigate('/exercise2');
              handleDrawerClose();
            }}
          >
            <ListItemIcon>
              <LooksTwoIcon />
            </ListItemIcon>
            <ListItemText primary="Exercise" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              navigate('/exercise3');
              handleDrawerClose();
            }}
          >
            <ListItemIcon>
              <LooksThreeIcon />
            </ListItemIcon>
            <ListItemText primary="Exercise" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              navigate('/exercise4');
              handleDrawerClose();
            }}
          >
            <ListItemIcon>
              <LooksFourIcon />
            </ListItemIcon>
            <ListItemText primary="Exercise" />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <Routes>
          <Route path="/" element={<Navigate to="/exercise1" />} />
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
          <Route path="/exercise3" element={<Exercise3 />} />
          <Route path="/exercise4" element={<Exercise4 />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
