import styled from "styled-components"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlined from "@mui/icons-material/MailOutlined";
import { mobile } from "../responsive";


const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column", marginBottom: "70px" })}
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;

`
const IconContainer = styled.div`
display: flex;

`
const Icon = styled.div`
width: 40px;
height: 40px;
margin-right: 10px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
justify-content: center;
align-items: center;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`
const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.div`
width: 50%;
margin-bottom: 10px
`


const Right = styled.div`
flex: 1;
padding: 20px;
`

const Info = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const Visa = styled.img`
width: 50%;
`


export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Khalid</Logo>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit vitae, perferendis voluptatem fugiat nam quidem consequatur, eum praesentium ipsam quae cumque tempore maiores, saepe odio dolor deserunt non modi debitis.</Desc>
                <IconContainer>
                    <Icon color="3B5999"><InstagramIcon /></Icon>
                    <Icon color="E4405F"><TwitterIcon /></Icon>
                    <Icon color="55ACEE"><FacebookIcon /></Icon>
                    <Icon color="E60023"><LinkedInIcon /></Icon>
                </IconContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
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
                <Info>
                    <LocationOnIcon style={{ marginRight: "10px" }} />
                    622 Dixie Path , South Tobinchester 98336
                </Info>
                <Info>
                    <PhoneIcon style={{ marginRight: "10px" }} />
                    +1 234 56 78
                </Info>
                <Info>
                    <MailOutlined style={{ marginRight: "10px" }} />
                    contact@lama.dev
                </Info>
                <Visa src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container >
    )
}
