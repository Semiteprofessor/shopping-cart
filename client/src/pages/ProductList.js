import styled from 'styled-components';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


import useFetch from './useFetch';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';


const Container = styled.div`
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {

    
  const dispatch = useDispatch();
  
  const getProduct = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProduct;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);


    return (
        <Container>
            <Title>Product List</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select>
                        <Option disabled select>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled select>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
      
    { loading ? <div><Box sx={{ width: '100%' }}>
            <LinearProgress />
            </Box></div>   : error ? <h2>{ error }</h2> : products.map((product) => (
            
      <Products 
      key={product._id} 
      productId={product._id}
      name={product.name}
      price={product.price}
      desc={product.description}
      imageUrl={product.imageUrl}
      countInStock={product.countInStock}
      color={product.color}
      size={product.size}

      />
      ))}

            <Newsletter />
            <Footer /> 
        </Container>
    )
}

export default ProductList
