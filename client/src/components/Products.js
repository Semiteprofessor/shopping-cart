import styled from 'styled-components';
import {popularProducts} from '../data'
import Product from './Product';
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`;


const Products = () => {
    return (
        <Container>
            { popularProducts.map(product => (
            <Link to={`/product/${product.id}`}>
                <Product product={product} key={product.id} />
            </Link>
            )) }
        </Container>
    )
}

export default Products
