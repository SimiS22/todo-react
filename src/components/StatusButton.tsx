import React from 'react'
import styled from 'styled-components'

interface PropsType {
    status: string,
}
const StatusButtonWrapper = styled.div`
    display: flex;
    height: 80%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

const StatusButton: React.FC<PropsType> = (props) => {
    return (
        <StatusButtonWrapper>
            {props.status}
        </StatusButtonWrapper>
    )
}
export default StatusButton