import styled from "styled-components"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Announcement } from "../components/Announcement"
import { NewsLetter } from "../components/NewsLetter"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { mobile } from "../responsive";


const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ flexDirection: "column", padding: "10px" })}

`
const ImageContainer = styled.div`
flex: 1;
`
const Title = styled.h2`
font-weight: 600;
`

const Image = styled.img`
width: 100%;
height: 90%;
object-fit: cover;
${mobile({ height: " 40vh" })}
`
const DescriptionContainer = styled.div`
flex: 1;
padding: 0 50px;
${mobile({ padding: "10px" })}

`
const FilterContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin: 30px 0px;
${mobile({ width: "100%" })}

`


const Info = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
 font-weight: 100;
  font-size: 40px;
`
const Color = styled.div`
display: flex;
`

const ColorText = styled.h3`font-size: 22px;
font-weight: 200;
`
const SizeText = styled.h3`font-size: 22px;
font-weight: 200;
`


const Filter = styled.div`
display: flex;
align-items: center;

`
const FilterSize = styled.select`
margin-left: 15px;
padding: 5px;
`;


const FilterOption = styled.option`
`


const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const AddContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
${mobile({ width: "100%" })}

`


const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 600;
`


const Amount = styled.span`
width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
margin: 0 5px;

`
const Button = styled.button`
padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`



export const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer><Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImageContainer>
                <DescriptionContainer>
                    <Title>Denium Jumpsuit</Title>
                    <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, libero culpa. Laborum, rem, ab illo ratione odio sunt assumenda sapiente impedit vel et dolore cumque minima ipsam, dolorem quae doloribus.</Info>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <ColorText>color: </ColorText>
                            <Color>
                                <FilterColor color="black" />
                                <FilterColor color="blue" />
                                <FilterColor color="gray" />
                            </Color>
                        </Filter>
                        <Filter>
                            <SizeText>Size: </SizeText>
                            <FilterSize>
                                <FilterOption>XS</FilterOption>
                                <FilterOption>S</FilterOption>
                                <FilterOption>M</FilterOption>
                                <FilterOption>L</FilterOption>
                                <FilterOption>XL</FilterOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon />
                            <Amount>1</Amount>
                            <AddIcon />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </DescriptionContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container >
    )
}
