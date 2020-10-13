import React from 'react'
import StatusButton from './StatusButton'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    display: flex;
    width: 60%;
    height: 60px;
    margin: 0px 20px 20px 20px;
    border-radius: 60px;
    box-shadow: 0px 0px 20px 0px #e2e2e2;
    justify-content: space-around;
    align-items:center;
    position: fixed;
    bottom:0;
`

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <StatusButton status='All' />
            <StatusButton status='Active' />
            <StatusButton status='Completed' />
        </FooterWrapper>
    )
}
export default Footer