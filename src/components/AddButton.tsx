import React, { useContext } from 'react'
import { CheckCircleOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { ToDoContext } from '../contexts/ToDoContext'
import TodoItem from './TodoItem'

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
    const todos = useContext(ToDoContext)
    const handleOnClick = () => {
        todos.todosArray.push({ value: todos.value, completed: false, id: todos.todosArray.length });
        todos.value = '';
        console.log(todos.todosArray)
    }
    return (
        <AddButtonWrapper onClick={handleOnClick}>
            <CheckCircleOutlined style={{ fontSize: '28px', color: 'green' }} />
        </AddButtonWrapper>
    )
}
export default AddButton