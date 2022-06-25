import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';

const Container = styled.div`
height: 60px;

${mobile({ height: "50px" })}

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({ padding: "10px 0" })}

`

const Language = styled.span`
font-size: 15px;
cursor: pointer;
${mobile({ display: "none" })}

`

const SearchContainer = styled.div`
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Left = styled.div`
flex : 1;
display: flex;
align-items: center;
`

const Center = styled.div`
flex : 1

`

const Logo = styled.h1`
font-weight: bold;
text-align: center;
${mobile({ fontSize: "20px" })}

`

const Right = styled.div`
flex : 1;
display: flex;
justify-content: flex-end;
${mobile({ flex: 3, justifyContent: "flex-start" })}
`

const MenuItem = styled.div`
margin-left: 25px;
cursor: pointer;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`



export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language> EN </Language>
                    <SearchContainer>
                        <Input type="text" />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center><Logo>Khalid</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN UP</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="success">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>

    )
}
