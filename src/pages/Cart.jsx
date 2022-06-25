import styled from "styled-components";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Announcement } from "../components/Announcement"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { mobile } from "../responsive";

const Container = styled.div``


const Title = styled.h1`
text-align: center;
margin: 10px 0;
font-weight: 300;
`

const ProductContainer = styled.div`

`

const ProductList = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px;
`

const Button = styled.button`
 padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`


const TopTexts = styled.div`
${mobile({ display: "none" })}

`
const TopText = styled.span`
text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const ProductDetailsCont = styled.div`
padding: 30px;
display: flex;
${mobile({ flexDirection: "column" })}

`
const ProductDetails = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
flex: 3;
`

const ProductItem = styled.div`
flex: 3;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const ProductInfo = styled.div`
font-size: 20px;
display: flex;
`
const ProductName = styled.span`
`
const ProductId = styled.span``
const ProductColor = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: black;
`

const ProductSize = styled.span``
const ProductInfoLeft = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductPrice = styled.div`
flex: 2;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
${mobile({ marginBottom: "20px" })}

`
const AmountContainer = styled.div`
display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Amount = styled.span`
font-size: 24px;
  margin: 5px;
`
const Price = styled.span`
font-size: 30px;
  font-weight: 200;
`
const Hr = styled.hr`
background-color: #eee;
  border: none;
  height: 1px;
`

const ProductSummery = styled.div`
flex: 1;
border: 1px solid #ddd;
padding: 30px;
font-size: 20px;
`
const SummeryTitle = styled.div`
font-size: 30px;
font-weight: 600;
margin-bottom: 15px ;
`
const SummeryItem = styled.div`
display: flex;
justify-content: space-between;
margin: 40px 0;
`

const Item = styled.div``

const SummeryItemPrice = styled.div``

const SummeryButton = styled.button`
width: 100%;
padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`





export const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>YOUR BAG</Title>
            <ProductContainer>
                <ProductList>
                    <Button>CONTINUE SHOPPING</Button>
                    <TopTexts>
                        <TopText>shopping list</TopText>
                        <TopText>your bag</TopText>
                    </TopTexts>
                    <Button type="filled">CHECKOUT NOW</Button>
                </ProductList>

                <ProductDetailsCont>
                    <Info>
                        <ProductDetails>
                            <ProductItem>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <ProductInfo>
                                    <ProductInfoLeft>
                                        <ProductName> <b>Product</b>: kahlid ali</ProductName>
                                        <ProductId> <b>ID</b>: 06541851</ProductId>
                                        <ProductColor></ProductColor>
                                        <ProductSize><b>Size</b>: 37.5</ProductSize>
                                    </ProductInfoLeft>
                                </ProductInfo>
                            </ProductItem>
                            <ProductPrice>
                                <AmountContainer>
                                    <AddIcon />
                                    <Amount>1</Amount>
                                    <RemoveIcon />
                                </AmountContainer>
                                <Price>$30</Price>
                            </ProductPrice>
                        </ProductDetails>
                        <Hr />
                        <ProductDetails>
                            <ProductItem>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <ProductInfo>
                                    <ProductInfoLeft>
                                        <ProductName> <b>Product</b>: kahlid ali</ProductName>
                                        <ProductId> <b>ID</b>: 06541851</ProductId>
                                        <ProductColor></ProductColor>
                                        <ProductSize><b>Size</b>: 37.5</ProductSize>
                                    </ProductInfoLeft>
                                </ProductInfo>
                            </ProductItem>
                            <ProductPrice>
                                <AmountContainer>
                                    <AddIcon />
                                    <Amount>1</Amount>
                                    <RemoveIcon />
                                </AmountContainer>
                                <Price>$30</Price>
                            </ProductPrice>
                        </ProductDetails>
                    </Info>
                    <ProductSummery>
                        <SummeryTitle>ORDER SUMMERY</SummeryTitle>
                        <SummeryItem>
                            <Item>Estimated Shipping</Item>
                            <SummeryItemPrice>$ 5.90</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryItem>
                            <Item>Shipping Discount</Item>
                            <SummeryItemPrice>$ -5.90</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryItem>
                            <Item>Total</Item>
                            <SummeryItemPrice>$ -5.90</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryButton>CHECKOUT NOW</SummeryButton>
                    </ProductSummery>
                </ProductDetailsCont>
            </ProductContainer>
            <Footer />
        </Container>
    )
}
