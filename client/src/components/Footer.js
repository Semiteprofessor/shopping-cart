import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const Container = styled.div`

`;

const Wrapper = styled.div`  
    display: flex;
    /* background-color: teal; */
    padding: 30px;
    color: white;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`;

const Logo = styled.h1`
    flex: 1;
    color: white;
    font-weight: bold;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    flex: 1;
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
    color: white;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    align-items: center;
    display: flex;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
    return (
        <Container>
            <MDBFooter color="stylish-color-dark">
            <Wrapper>
                <Left>
                    <Logo>Rancho Shopping Cart</Logo>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor expedita labore ratione reiciendis impedit ullam ex et rem vel quasi delectus tempora atque, omnis deleniti fugit corrupti doloremque autem.</Desc>
                    <SocialContainer>
                        <SocialIcon color="3B5999">
                            <Facebook />
                        </SocialIcon>
                        <SocialIcon color="E44054">
                            <Instagram />
                        </SocialIcon>
                        <SocialIcon color="55ACEE">
                            <Twitter />
                        </SocialIcon>
                        <SocialIcon color="E60023">
                            <Pinterest />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Men Fashion</ListItem>
                        <ListItem>Women Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                        <Room style={{ marginRight: "10px" }} /> 308, Murtala Muhammad Way, Yaba
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{ marginRight: "10px" }} /> +234 806 909 5729
                    </ContactItem>
                    <ContactItem>
                        <MailOutline style={{ marginRight: "10px" }} /> contact@rancho.dev
                    </ContactItem>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </Right>
            </Wrapper>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.geocodec-tech.com"> GeoCodec Technologies </a>
                {/* <p style={{ textAlign: 'right' }}>All Right Reserved</p> */}
                </MDBContainer>
            </div>
            </MDBFooter>
        </Container>
    )
}

export default Footer
