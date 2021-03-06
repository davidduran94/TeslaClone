import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return ( 
        <Container>
            <Section 
                title= "Model S"
                description= "Order Online for Touchless Delivery"
                image= "model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            
            <Section 
                title= "Model 3"
                description= "Order Online for Touchless Delivery"
                image= "model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            <Section 
                title= "Accesories"
                image= "accessories.jpg"
                leftBtnText="Custom Order"
            />
             
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`