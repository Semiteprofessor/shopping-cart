import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions


const Container = styled.div`
  
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Bottom = styled.div`
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;

const ProductName = styled.span`
  font-size: 30px;
  font-weight: bold;
  position: relative;
  margin: 20px;
`;

const ProductId = styled.span`
  flex: 3;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-bottom: 10px;
`;

const ProductSize = styled.span`
  flex: 3;
`;

const DeleteProduct = styled.span`
  flex: 3;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200 bold;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FIlterSizeOption = styled.option``;


const DeleteButton = styled.button`
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
    color: red;
`;


const CartItem = ({item, qty, qtyChangeHandler, removeHandler}) => {

    return (
        <Container>
            <Wrapper>
                
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src={item.imageUrl} />
                                <Details>
                                    <ProductTitle>
                                        Product:
                                    <ProductName>{item.name}</ProductName>
                                    </ProductTitle>
                                    <ProductId>ID:{item.itemId}</ProductId>
                                    <ProductColor>{item.color}</ProductColor>
                                    <ProductSize>Size:{item.size}</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                                <Filter>
                                  <FilterTitle>Qty</FilterTitle>
                                      <FilterSize value={qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                                          {[...Array(item.countInStock).keys()].map(x => (
                                          <FIlterSizeOption value={x+1} key={x+1}>{x+1}</FIlterSizeOption>
                                          ))}
                                      </FilterSize>
                                  </Filter>
                                 <ProductPrice>&#8358;{item.price}</ProductPrice>
                                    <DeleteButton onClick={() => removeHandler(item.product)} ><i className="fas fa-trash"></i></DeleteButton>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Hr></Hr>
                </Bottom>
            </Wrapper>

        </Container>
    )
}

export default CartItem
