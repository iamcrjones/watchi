import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';

export default function NavDrawer({toggle, icon}) {
  const [state, setState] = React.useState({
    right: false
  });

  const themeIcon = icon

  const toggler = () => {
    toggle();
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <div className='menu'>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuIcon className="menubutton"onClick={toggleDrawer(anchor, true)}variant='contained'></MenuIcon>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
            <Box
              sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 150 }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
               <div className="themeToggle" onClick={toggler}>
                {themeIcon()}
              </div>
              <Divider />
              <Button variant="contained">
                  <a className='linky' href="/" onClick={toggleDrawer(anchor, false)}>Home</a>
              </Button>
              <Divider />
              <Button variant="contained">
                <a className='linky' href="/" onClick={toggleDrawer(anchor, false)}>About</a>
              </Button>
              <Divider />
              <Button variant="contained">
                <a className='linky' href="/" onClick={toggleDrawer(anchor, false)}>Projects</a>
              </Button>
              <Divider />
              <Button variant="contained">
                <a className='linky' href="/" onClick={toggleDrawer(anchor, false)}>Contact</a>
              </Button>
            </Box>
              {/* {list} */}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
