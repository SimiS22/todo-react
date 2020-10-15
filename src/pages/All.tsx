import React from 'react'
import styled from 'styled-components'

const AllWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    margin: 40px 0px 40px 0px;
    box-shadow: 0px 0px 20px 0px #e2e2e2;
`

const All: React.FC = () => {
    return (
        <AllWrapper>All</AllWrapper>
    )
}
export default All