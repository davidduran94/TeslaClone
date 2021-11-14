import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src='/assets/images/logo.svg' />
            </a>
            <Menu>
                <p><a href='#'>Model S</a></p>
                <p><a href='#'>Model 3</a></p>
                <p><a href='#'>Model X</a></p>
                <p><a href='#'>Model Y</a></p>
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={ () => setBurgerStatus(true) } />

                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={ () => setBurgerStatus(false) } />
                    </CloseWrapper>
                   
                    <li><a href='#'>Existing Iventory</a></li>
                    <li><a href='#'>Existing Iventory</a></li>
                    <li><a href='#'>Existing Iventory</a></li>
                    <li><a href='#'>Existing Iventory</a></li>
                </BurgerNav>
            </RightMenu>
        </Container>
    )
}

export default Header

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.2s;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);

        a{
            font-weight: 600;
        }
    }
    
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const RightMenu = styled.div`
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px; 
    }  
`;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right:0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    @media(max-width: 768px) {
        display:none;
    }

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }


`