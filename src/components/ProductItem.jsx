import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
display: flex;
justify-content: center;
align-items: center;
z-index: 3;
cursor: pointer;
transition: all 0.5s ease;
`

const Container = styled.div`
flex: 1;
min-width: 290px;
height: 350px;
background-color: #f5fbfd;
margin: 5px;
display: flex;
justify-content: center;
align-items: center;
position: relative;

&:hover ${Info}{
    opacity: 1;
}
`

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
/* position: absolute; */
`
const Img = styled.img`
height: 100%;
z-index: 3;
`

const Icon = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: white;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
`

export const ProductItem = ({ item }) => {
    return (
        <Container>
            <Circle>
                <Img src={item.img} />
                <Info>
                    <Icon><ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon></Icon>
                    <Icon><SearchOutlinedIcon></SearchOutlinedIcon></Icon>
                    <Icon><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon></Icon>
                </Info>
            </Circle>
        </Container>
    )
}
