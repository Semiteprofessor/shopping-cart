import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
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
  border: ${(props)=> props.type === "filled" && "none"};
  background-color: ${(props)=> 
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props)=> props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  
`;

const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
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

const ProductName = styled.span`
  flex: 3;
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

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=> props.type === "total" && "500"};
  font-weight: ${props=> props.type === "total" && "500"};
`;

const SummaryItemText = styled.span`
  flex: 1;
`;

const SummaryItemPrice = styled.span`
  flex: 1;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const DeleteButton = styled.button`
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
    color: red;
`;

const Cart = () => {

  const { id } = useParams();
  const { items, isPending, error } = useFetch('http://localhost:4000/api/' + id);
  const history = useHistory();

  const handleDelete = (id) => {
    fetch('http://localhost:4000/api/' + items.id, {
      method: 'DELETE'
    })
    .then(() => {
      history.push('/')
    })
  }
    return (
        <Container>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://i.postimg.cc/J7pVMJCp/1-video-camera-png-image.png"/>
                                <Details>
                                    <ProductName><b>Product:</b>TAIWO OLAPADE CAMERA</ProductName>
                                    <ProductId><b>ID:</b>56219570075</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                 <ProductPrice>&#8358;500</ProductPrice>
                                    <DeleteButton onClick={() => handleDelete(items.id)}><i className="fas fa-trash"></i></DeleteButton>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src="https://i.postimg.cc/g0Ht4FYg/1-red-women-bag-png-image.png"/>
                                <Details>
                                    <ProductName><b>Product:</b>TAIWO OLAPADE CAMERA</ProductName>
                                    <ProductId><b>ID:</b>56219570075</ProductId>
                                    <ProductColor color="gray"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                 <ProductPrice>&#8358;500</ProductPrice>
                                    <DeleteButton><i className="fas fa-trash"></i></DeleteButton>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>&#8358;500</SummaryItemPrice>
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
                            <SummaryItemPrice>&#8358;500</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
