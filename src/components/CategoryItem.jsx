import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
flex: 1;
margin: 5px;
height: 70vh;
position: relative;
`
const Img = styled.img`
width: 100%;
height: 100%;
object-fit:cover;
${mobile({ height: "20vh" })}
`
const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h1`
color:white;
    margin-bottom: 20px;
`
const Button = styled.button`
border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`


export const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Img src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOW NOW</Button>
            </Info>
        </Container>
    )
}
