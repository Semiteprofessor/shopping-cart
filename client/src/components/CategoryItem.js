import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 60vh;
  position: relative;
  
  transition: all 0.5s ease-in-out;

  &:hover {
      transform: scale(1.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({imageUrl, name, desc, productId, price}) => {
    return (
        <Container>
            <Image src={imageUrl}/>
            <Info>
                <Title>{ name }</Title>
                <Link productId={productId} name={name} imageUrl={imageUrl} desc={desc} price={price} key={productId} to="/productlist">
                  <Button>SHOP NOW</Button>
                </Link>
            </Info>
        </Container>
    )
}

export default CategoryItem
