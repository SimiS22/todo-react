import React, { useContext } from 'react'
import { ToDoContext } from '../contexts/ToDoContext'
import checked from '../svgs/checked.svg'
import unchecked from '../svgs/unchecked.svg'
import deleteIcon from '../svgs/delete.svg'

const TodoItem: React.FC = () => {
    const todos = useContext(ToDoContext)

    return (
        <ul>
            {todos.todosArray.map((item) => {
                return (
                    <li>
                        <div>
                            <div>{item.completed ? checked : unchecked}</div>
                            <div>{item.value}</div>
                            <div>{deleteIcon}</div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
export default TodoItem