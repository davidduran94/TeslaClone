import React from 'react'
import styled from 'styled-components'
function Section({ title, description, leftBtnText, rightBtnText, image }) { 
    return (
        <Wrap bgImage={image}>
            <ItemText>
                <h1>
                    { title }
                </h1>
                <p>{ description }</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        { leftBtnText }
                    </LeftButton>
                    { rightBtnText &&
                        <RightButton>
                            { rightBtnText }
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrowContainer>
                <DownArrow src='/assets/images/down-arrow.svg' />
                </DownArrowContainer>
            </Buttons>
        </Wrap>
    )
 }

export default Section

const DownArrow = styled.img`
    margin-top: 0px;
    height: 40px;   
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``

const ButtonGroup = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center;
    width: 100vw;
    margin-bottom: 30px;
    @media (max-width: 768px ){ 
        flex-direction: column;
     }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center; 
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 20px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat;
    background-image: ${props => `url(/assets/images/${props.bgImage})`};      
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center; 
`

const DownArrowContainer = styled(ButtonGroup)``