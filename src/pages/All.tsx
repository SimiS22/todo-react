import React, { useContext } from 'react'
import styled from 'styled-components'
import TodoList from '../components/TodoList'
import { ToDoContext } from '../contexts/ToDoContext'

const AllWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    height:85%;
    box-shadow: 0px 0px 20px 0px #e2e2e2;
`

const All: React.FC = () => {
    const todos = useContext(ToDoContext)
    return (
        <AllWrapper>
            <TodoList />
        </AllWrapper>
    )
}
export default All