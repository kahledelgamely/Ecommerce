import React, { useState } from 'react'
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from "../data.js"
import { mobile } from "../responsive.js"


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}
`

const Arrow = styled.div`
background-color: #fff;
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity:0.6;
z-index: 3;
`


const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.currentSlide * -100}vw);

`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
  `

const ImgContainer = styled.div`
height: 100%;
flex: 1;
text-align: right;
`
const Image = styled.img`
height: 80%;
`


const InfoContainer = styled.div`
padding: 50px;
flex:1;
`

const Title = styled.h1``
const Desc = styled.p`

margin: 50px 0;

`

const Button = styled.button``




export const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)


    function handleClick(dir) {
        if (dir === "left") {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        } else {
            setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon></ArrowLeftOutlinedIcon>
            </Arrow>
            <Wrapper currentSlide={currentSlide}>
                {sliderItems.map(d => (
                    <Slide bg={d.bg}>

                        <ImgContainer>
                            <Image src={d.img} alt="" />
                        </ImgContainer>

                        <InfoContainer>

                            <Title>{d.title}</Title>
                            <Desc>{d.desc}</Desc>
                            <Button>SHOW MORE</Button>

                        </InfoContainer>

                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon></ArrowRightOutlinedIcon>
            </Arrow>

        </Container>
    )
}
