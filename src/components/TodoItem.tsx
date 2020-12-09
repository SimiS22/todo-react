import React, { useContext } from 'react'
import { ToDoContext } from '../contexts/ToDoContext'
import checked from '../svgs/checked.svg'
import unchecked from '../svgs/unchecked.svg'
import deleteIcon from '../svgs/delete.svg'
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

const TodoItem: React.FC = () => {
    const todos = useContext(ToDoContext)

    return (
        <ListWrapper>
            {todos.todosArray.map((item) => {
                return (
                    <li>
                        <TodoItemWrapper>
                            {item.completed ? <img src={checked} alt='' /> : <img src={unchecked} alt='' />}
                            <div>{item.value}</div>
                            <img src={deleteIcon} alt='Delete' />
                        </TodoItemWrapper>
                    </li>
                )
            })}
        </ListWrapper>
    )
}
export default TodoItem