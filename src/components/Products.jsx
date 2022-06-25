import styled from "styled-components"
import { ProductItem } from "./ProductItem"
import { popularProducts } from "../data.js"

const Container = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

export const Products = () => {
    return (
        <Container>
            {popularProducts.map(item => (
                <ProductItem item={item} />
            ))}
        </Container>
    )
}
