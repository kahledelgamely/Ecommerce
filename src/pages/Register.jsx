import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 40%;
background-color: white;
padding: 30px;
${mobile({ width: "75%" })}

`
const Title = styled.h1`
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Desc = styled.p`
font-size: 15px;
margin: 20px 0;`

const Button = styled.button`
 width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`


export const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Desc>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Desc>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
