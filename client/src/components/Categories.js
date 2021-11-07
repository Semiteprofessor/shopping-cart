// import { categories } from '../data';
import CategoryItem from './CategoryItem';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  
  
`;


const Categories = ({imageUrl, name, desc, productId, price}) => {
    return (
        <Container>
                <CategoryItem productId={productId} name={name} imageUrl={imageUrl} desc={desc} price={price} key={productId} />
        </Container>
    )
}

export default Categories
