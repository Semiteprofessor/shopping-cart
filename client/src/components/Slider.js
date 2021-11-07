import { ArrowBackIos, ArrowForwardIos, ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { useState } from "react"
// import { slideItems } from '../data';
import { Link } from "react-router-dom";
// import {Button} from '@mui/material/Button';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto !important;
    cursor: pointer;
    opacity: .6;
    z-index: 2;

    &:hover {
      background-color: cyan;
      transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIdex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;  
    background-color: #${props=> props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: orange;
      color: white;
      font-weight: bold;
  }
`;

const Slider = ({imageUrl, name, desc, productId, price}) => {
    const [slideIdex, setSlideIdex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIdex(slideIdex > 0 ? slideIdex-1 : 10)
        } else {
            setSlideIdex(slideIdex < 10 ? slideIdex+1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIos />
            </Arrow>
            <Wrapper slideIdex={slideIdex}>
                    <Slide  key={productId}>
                        <ImgContainer>
                            <Image src={ imageUrl } />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{ name }</Title>
                            <Desc>{ desc }</Desc>

                            <Link productId={productId} name={name} imageUrl={imageUrl} desc={desc} price={price} key={productId} to={`/product/${productId}`}>
                                <Button>
                                SHOW NOW
                            </Button>
                            </Link>
                            
                        </InfoContainer>
                    </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIos />
            </Arrow>
        </Container>
    )
} 

export default Slider
