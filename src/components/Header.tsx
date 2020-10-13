import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    font-size:22px;
    width:100%;
    height:70px;
    margin:0;
    padding:0;
    box-shadow: 0px 0px 20px 0px #e2e2e2;
    position: sticky;
    top: 0;
`

const Header: React.FC = () => {
    return (
        <HeaderWrapper>ToDo</HeaderWrapper>
    )
}
export default Header