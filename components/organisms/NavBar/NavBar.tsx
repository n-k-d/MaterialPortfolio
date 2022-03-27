import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { MenuItem } from '@mui/material';
import { ColorModeContext } from '../../../context/MUIThemeProvider';
import ToggleButton from '../../molecules/ToggleButton';
import HeaderButton from '../../molecules/HeaderButton';

const pages = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
];

interface NavBarType {
  currentPage: number;
}

function NavBar(props: NavBarType) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const themeContext = React.useContext(ColorModeContext);

  const { currentPage } = props;

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{ backdropFilter: 'blur(10px)' }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar alt="Remy Sharp" src="me.png" sx={{ display: { md: 'none' } }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <HeaderButton
                key={index}
                enable={currentPage === index}
                text={page.title}
                href={page.href}
              />
            ))}
          </Box>
          <ToggleButton
            mode={themeContext.mode}
            animation={themeContext.animation}
            setAnimation={themeContext.setAnimation}
            setMode={themeContext.setMode}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
