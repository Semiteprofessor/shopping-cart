import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from './CartItem'

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const Container = styled.div`
  
`;

const TopBar = styled.div`
  display: flex;
  padding: 30px;
  background-color: pink;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  background-color: black;
  &:hover {
      background-color: purple;
      color: white;
      font-weight: bold;
  }
`;

const TopTexts = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  font-weight: bold;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    margin-top: 60px;
    margin-left: 20px;
`;

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 500px;
`;

const Summary = styled.div`
  flex: 1;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: bold;
`;

const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=> props.type === "total" && "500"};
  font-weight: ${props=> props.type === "total" && "500"};
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const SummaryItemText = styled.span`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  margin-right: 60px;
`;

const SummaryItemPrice = styled.span`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;

  
  &:hover {
      background-color: purple;
      color: white;
      font-weight: bold;
  }
`;


const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
 
  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty, product) => {
    dispatch(addToCart(id, qty, product));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

    return (
        <Container>
          <TopBar>
            
            <Left>
              <Link to="/productlist">
                <TopButton>CONTINUE SHOPPING</TopButton>
              </Link>
            </Left>
            <Center>
            <Title>YOUR ORDER(S)</Title>
                <Top>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                </Top>
            </Center>
            <Right>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Total Items</SummaryItemText>
                    <SummaryItemPrice>{getCartCount()}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>&#8358;{getCartSubTotal()}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>&#8358;50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>-&#8358;50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>&#8358;{getCartSubTotal()}</SummaryItemPrice>
                </SummaryItem>
                <Link to="/checkout">
                  <Button>CHECKOUT NOW</Button>
                </Link>
              </Summary>
            </Right>
          </TopBar>

          { cartItems.length === 0 ? (
            <div>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">Your Cart is empty!</Alert>
            </Stack>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                // itemId={item.id}
                // name={item.name}
                // price={item.price}
                // desc={item.description}
                // imageUrl={item.imageUrl}
                // countInStock={item.countInStock}
                // color={item.color}
                // size={item.size}
                // qty={item.qty}
                // product={item.product}
                
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
            
            <Footer />
        </Container>
    )
}

export default Cart
