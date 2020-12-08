import React, { useContext } from 'react'
import styled from 'styled-components'
import TodoItem from '../components/TodoItem'
import { ToDoContext } from '../contexts/ToDoContext'

const AllWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    margin: 40px 0px 40px 0px;
    box-shadow: 0px 0px 20px 0px #e2e2e2;
`

const All: React.FC = () => {
    const todos = useContext(ToDoContext)
    return (
        <AllWrapper>
            <TodoItem />
        </AllWrapper>
    )
}
export default All