import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: teal;
height: 30px;
text-align: center;
line-height: 30px;
color: #fff;
font-weight: 500;
`

export const Announcement = () => {
    return (
        <Container>
            super deal! free shipping on orders over 0$
        </Container>
    )
}
