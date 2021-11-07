import styled from 'styled-components';
// import {popularProducts} from '../data'
import Product from './Product';
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`;


const Products = ({imageUrl, name, desc, productId, price}) => {
    return (
        <Container>
            <Link to={`/product/${productId}`}>
                <Product productId={productId} name={name} imageUrl={imageUrl} desc={desc} price={price} key={productId} />
            </Link>
        </Container>
    )
}

export default Products
