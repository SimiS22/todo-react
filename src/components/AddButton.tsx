import React, { useContext } from 'react'
import { CheckCircleOutlined } from '@ant-design/icons'
// import styled from 'styled-components'
import { ToDoContext } from '../contexts/ToDoContext'
// import TodoItem from './TodoItem'

// const AddButtonWrapper = styled.div`
//     display: flex;
//     justify-content:center;
//     align-items: center;
//     height:50px;
//     width:50px;
//     margin-left: 40px;
//     box-shadow: 0px 0px 20px 0px #e2e2e2;
//     border-radius:60px;
// `

const AddButton: React.FC = () => {
    const todos = useContext(ToDoContext)
    const handleOnClick = () => {
        if (todos.currentValue !== '' || undefined) {
            todos.setTodoArray?.({ value: todos.currentValue, completed: false, id: todos.todosArray.length })
        }
    }
    console.log(todos.todosArray)
    return (
        <button onClick={handleOnClick}>
            <CheckCircleOutlined style={{ fontSize: '28px', color: 'green' }} />
        </button>
    )
}
export default AddButton