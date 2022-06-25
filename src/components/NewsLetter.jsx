import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../responsive";

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Title = styled.h1`
font-size: 60px;
margin-bottom: 40px;
`
const Desc = styled.p`
font-size: 25px;
margin-bottom: 20px;
${mobile({ fontSize: "18px", textAlign: "center" })}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({ width: "80%" })}
`
const Input = styled.input`
flex: 6;
border: none;
padding: 0 10px;
`
const Button = styled.button`
flex: 1;
border: none;
  background-color: teal;
  color: white;
`


export const NewsLetter = () => {
    return (
        <Container>
            <Title>khalid</Title>
            <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Desc>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button><SendIcon></SendIcon></Button>
            </InputContainer>
        </Container>
    )
}
