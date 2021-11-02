import { ArrowBackIos, ArrowForwardIos, ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { useState } from "react"
import { slideItems } from '../data';
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

const Slider = () => {
    const [slideIdex, setSlideIdex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIdex(slideIdex > 0 ? slideIdex-1 : 2)
        } else {
            setSlideIdex(slideIdex < 2 ? slideIdex+1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIos />
            </Arrow>
            <Wrapper slideIdex={slideIdex}>
                { slideItems.map(item => (
                    <Slide bg={ item.bg } key={item.id}>
                        <ImgContainer>
                            <Image src={ item.img } />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{ item.title }</Title>
                            <Desc>{ item.desc }</Desc>

                            <Link to={`/product/${item.id}`}>
                                <Button>
                                SHOW NOW
                            </Button>
                            </Link>
                            
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIos />
            </Arrow>
        </Container>
    )
}

export default Slider
