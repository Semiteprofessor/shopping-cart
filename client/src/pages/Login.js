import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255,0.5),
      rgba(255, 255, 255,0.5)
       ), url("https://i.postimg.cc/Xv0sP2rJ/pexels-andrea-piacquadio-3769747.jpg") center;
    
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ButtonLink = styled.a`
  margin: 5px 0px;
  text-decoration: underline;
  font-size: 12px;
  cursor: pointer;
  
`;


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <p>Forgot Password ?</p>
                    <ButtonLink>
                      <Link to="/register">Create an account</Link>
                    </ButtonLink>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
