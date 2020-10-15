import React from 'react'
import { PlusCircleOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const AddButtonWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height:50px;
    width:50px;
    margin-left: 40px;
    box-shadow: 0px 0px 20px 0px #e2e2e2;
    border-radius:60px;
`

const AddButton: React.FC = () => {
    return (
        <AddButtonWrapper>
            <PlusCircleOutlined style={{ fontSize: '28px', color: 'green' }} />
        </AddButtonWrapper>
    )
}
export default AddButton