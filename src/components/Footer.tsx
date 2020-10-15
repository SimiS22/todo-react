import React from 'react'
import StatusButton from './StatusButton'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 80px;
    margin-top: 40px;
    position: sticky;
    bottom: 0;
`
const StatusesWrapper = styled.div`
    display: flex;
    width: 60%;
    height: 60px;
    border-radius: 60px;
    box-shadow: 0px 0px 20px 0px #e2e2e2;
    justify-content: space-around;
    align-items:center;
`

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <StatusesWrapper>
                <Link to='/'><StatusButton status='All' /></Link>
                <Link to='/active'><StatusButton status='Active' /></Link>
                <Link to='/completed'><StatusButton status='Completed' /></Link>
            </StatusesWrapper>
        </FooterWrapper>
    )
}
export default Footer