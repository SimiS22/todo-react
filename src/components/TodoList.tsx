import React, { useContext, useState } from 'react'
import { ToDoContext } from '../contexts/ToDoContext'
import styled from 'styled-components'

const ListWrapper = styled.ul`
    width: 100%;
    list-style: none;
`

const TodoItemWrapper = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    flex-grow: 1;
    justify-content:space-between;
    align-items: center;
`

const TodoList: React.FC = () => {
    const todos = useContext(ToDoContext)
    return (
        <ListWrapper>
            {todos.todosArray.map((item, index) => {
                const handleOnChangeCheckbox = () => {
                    todos.updateTodosArray(item.id, 'checkbox')
                }
                const handleOnClickDelete = () => {
                    todos.updateTodosArray(item.id, 'delete')
                }
                return (
                    <li key={index}>
                        <TodoItemWrapper>
                            <input type='checkbox' name='checked' id={item.id.toLocaleString()} onChange={handleOnChangeCheckbox} />
                            <div>{item.value}</div>
                            <button id={item.id.toLocaleString()} onClick={handleOnClickDelete}>Delete</button>
                        </TodoItemWrapper>
                    </li>
                )
            })}
        </ListWrapper>
    )
}
export default TodoList