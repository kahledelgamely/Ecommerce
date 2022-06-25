import styled from "styled-components"
import { Announcement } from "../components/Announcement"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { NewsLetter } from "../components/NewsLetter"
import { Products } from "../components/Products"
import { mobile } from "../responsive"

const Container = styled.div``
const Title = styled.h1`
margin: 20px;
`
const ProductContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin:  20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ margin: "5px 0" })}
`

const SelectOption = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0" })}
`
const FilterOption = styled.option``



export const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <ProductContainer>
                <Filter>
                    <FilterTitle>FilterProducts:</FilterTitle>
                    <SelectOption>
                        <FilterOption>White</FilterOption>
                        <FilterOption>Black</FilterOption>
                        <FilterOption>Red</FilterOption>
                        <FilterOption>Blue</FilterOption>
                        <FilterOption>Yellow</FilterOption>
                        <FilterOption>Green</FilterOption>
                    </SelectOption>
                    <SelectOption>
                        <FilterOption>XS</FilterOption>
                        <FilterOption>S</FilterOption>
                        <FilterOption>M</FilterOption>
                        <FilterOption>L</FilterOption>
                        <FilterOption>XL</FilterOption>
                    </SelectOption>
                </Filter>
                <Filter>
                    <FilterTitle>SortProducts: </FilterTitle>
                    <SelectOption>
                        <FilterOption>XS</FilterOption>
                        <FilterOption>S</FilterOption>
                        <FilterOption>M</FilterOption>
                        <FilterOption>L</FilterOption>
                        <FilterOption>XL</FilterOption>
                    </SelectOption>
                </Filter>
            </ProductContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}
