import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import CountFun from '../countButton'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';


const Container = styled.div`
  
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 10;
  font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 40%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FIlterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;



const ProductDetails = () => {
    
    
      const dispatch = useDispatch();
      
      const getProduct = useSelector((state) => state.getProducts);
    
      const { products } = getProduct;
    
      useEffect(() => {
        dispatch(listProducts())
      }, [dispatch]);

 
    return (
        
        
        <Container>
            { products.map(product => 
            <Wrapper>
                <ImgContainer>
                    <Image src={product.imageUrl} alt/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.name}</Title>
                    <Desc>
                        {product.description}
                    </Desc>
                    <Price>
                        &#8358; {product.price}
                    </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>{product.color}</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>{product.size}</FilterTitle>
                            <FilterSize>
                                <FIlterSizeOption>XS</FIlterSizeOption>
                                <FIlterSizeOption>S</FIlterSizeOption>
                                <FIlterSizeOption>M</FIlterSizeOption>
                                <FIlterSizeOption>L</FIlterSizeOption>
                                <FIlterSizeOption>XL</FIlterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            
                        <Filter>
                            <FilterTitle>Qty</FilterTitle>
                            <FilterSize>
                                <FIlterSizeOption>1</FIlterSizeOption>
                                <FIlterSizeOption>2</FIlterSizeOption>
                                <FIlterSizeOption>3</FIlterSizeOption>
                                <FIlterSizeOption>4</FIlterSizeOption>
                                <FIlterSizeOption>5</FIlterSizeOption>
                                <FIlterSizeOption>6</FIlterSizeOption>
                                <FIlterSizeOption>7</FIlterSizeOption>
                                <FIlterSizeOption>8</FIlterSizeOption>
                                <FIlterSizeOption>9</FIlterSizeOption>
                                <FIlterSizeOption>10</FIlterSizeOption>
                                <FIlterSizeOption>11</FIlterSizeOption>
                                <FIlterSizeOption>12</FIlterSizeOption>
                                <FIlterSizeOption>13</FIlterSizeOption>
                                <FIlterSizeOption>14</FIlterSizeOption>
                                <FIlterSizeOption>15</FIlterSizeOption>
                            </FilterSize>
                        </Filter>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>)}
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductDetails
