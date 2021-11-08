import { Badge,  } from '@material-ui/core';
import {  Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
// import { Avatar } from 'antd';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { useSelector } from 'react-redux'

const Container  = styled.div`
  height: 70px;
  width: 100%;
  background-color: #f1356d;
  @media only screen and (max-width:380px) {
      ${mobile({ backgroundColor: '#f1356d' })}
  }
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    border-radius: 3px;
    display: flex !important;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    color: white;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: white;
    /* font-size: 20px; */
`;

const Input = styled.input`
    border: 1px solid white;
    border-radius: 3px;
`;

const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
    fontWeight: 'bold',
  };


const Navbar = ({user}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

    
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ cursor: 'pointer' }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Rancho Shopping Cart</Logo>
                </Center>
                <Right>
                    <Link to="/" style={linkStyle}>
                        <MenuItems>Home</MenuItems>
                    </Link>
                    <Link to="/productlist" style={linkStyle}>
                        <MenuItems>Shop</MenuItems>
                    </Link>
                    <Link to="/cart" style={linkStyle}>
                        <MenuItems>
                            Cart
                        <Badge badgeContent={getCartCount()} color="primary">
                            <ShoppingCartOutlined />
                        </Badge></MenuItems>
                    </Link>
                    <Link to="/login" style={linkStyle}>
                        <MenuItems>Sign In</MenuItems>
                    </Link>
                    <Link to="/register" style={linkStyle}>
                        <MenuItems>Register</MenuItems>
                    </Link>
                </Right>

                        <div className="menu-avatar-container">
                <React.Fragment>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title={ `${user.firstName}` + ` ${user.lastName}` }>
                        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                            <Avatar sx={{ width: 40, height: 40 }}>
                            <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Avatar>
                        </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                            },
                            '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                            },
                        },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem>
                        <Avatar size={35} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> { `${user.firstName}` + ` ${user.lastName}` }
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                        </MenuItem>
                        <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                        </MenuItem>
                    </Menu>
                    </React.Fragment>
                    
                    {/* <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> */}
                {/* <Stack direction="row" spacing={2}>
                    <Avatar alt="Taiwo Olapade" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Stack> */}
                    {/* <span className="menu-avatar-name">Taiwo Olapade</span> */}
                </div>
                
            </Wrapper>
        </Container>
    )
}

export default Navbar
