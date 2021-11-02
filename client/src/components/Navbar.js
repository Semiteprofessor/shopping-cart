import { Badge,  } from '@material-ui/core';
import { Menu, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd';


const Container  = styled.div`
  height: 80px;
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
    // border-radius: 5px;
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
    border: none;
`;

const MenuItem = styled.div`
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


const Navbar = () => {
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
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link to="/productlist" style={linkStyle}>
                        <MenuItem>Shop</MenuItem>
                    </Link>
                    <Link to="/cart" style={linkStyle}>
                        <MenuItem>
                            Cart
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge></MenuItem>
                    </Link>
                    <Link to="/login" style={linkStyle}>
                        <MenuItem>Sign In</MenuItem>
                    </Link>
                    <Link to="/register" style={linkStyle}>
                        <MenuItem>Register</MenuItem>
                    </Link>
                </Right>

                <div className="menu-avatar-container">
                    <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <span className="menu-avatar-name">Taiwo Olapade</span>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Navbar
