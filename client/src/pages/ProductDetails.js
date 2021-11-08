import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';


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
    font-weight: bold;
`;

const FilterOption = styled.div`
    font-size: 25px;
    font-weight: 300;
    padding: 15px;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
    padding: 20px;
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

    
    &:hover {
      background-color: orange;
      color: white;
      font-weight: bold;
    }
`;



const ProductDetails = ({match, history}) => {

    const [ qty, setQty] = useState(1)
    
      const dispatch = useDispatch();
      
      const getProduct = useSelector((state) => state.getProductDetails);
      
      const { product, loading, error } = getProduct;

      useEffect(() => {
        if(product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
      }, [dispatch, product, match]);


      const addToCartHanler = (e) => {
          dispatch(addToCart(product._id, qty));
          history.push("/cart");
      }

    return (
        
        
        <Container>
            
      { loading ? <div><Box sx={{ width: '100%' }}>
                  <LinearProgress />
                  </Box></div>   : error ? <h2>{ error }</h2> :  (
      
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
                            <FilterTitle>Status</FilterTitle>
                                <FilterOption>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</FilterOption>
                        </Filter>
                    </FilterContainer>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color={product.color} />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FIlterSizeOption>{product.size}</FIlterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            
                        <Filter>
                            <FilterTitle>Qty</FilterTitle>
                            <FilterSize value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map(x => (
                                <FIlterSizeOption value={x+1} key={x+1}>{x+1}</FIlterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                        </AmountContainer>
                        <Button onClick={addToCartHanler}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            )}

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductDetails
