import styled from 'styled-components';
import { Search, ShoppingCartOutlined, FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons';


const Info = styled.div`
opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
      opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: white;
  position:absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
      background-color: #e95f5f;
      transform: scale(1.1);
  }
`;


const Product = ({imageUrl}) => {
    return (
        <Container>
            <Circle />
            <Image src={ imageUrl } />
            <Info>
                <Icon>
                <ShoppingCartOutlined />
                </Icon>
                <Icon>
                <SearchOutlined />
                </Icon>
                <Icon>
                <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
