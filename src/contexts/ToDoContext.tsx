import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../useLocalStorage'

interface ToDo {
    value: string,
    completed: boolean,
    id: number
}

interface TodoContextType {
    todosArray: ToDo[],
    currentValue: string,
    setInputValue?: (inputData: string) => void;
    setTodoArray?: (inputElement: ToDo) => void;
    updateTodosArray: (id: number, status: string) => void
}

let todosData = [{ value: 'txt', completed: false, id: 0 }, { value: 'txt1', completed: true, id: 1 }]
export const ToDoContext = createContext<TodoContextType>({
    todosArray: [],
    currentValue: '',
    updateTodosArray: () => undefined
})
export const ToDoContextProvider: React.FC = ({ children }) => {
    const [currentData, setCurrentData] = useState('')
    const setInputValue = (inputData: string) => {
        setCurrentData(inputData)
    }
    const [todos, setTodos] = useState(todosData)
    const setTodoArray = (input: ToDo) => {
        setTodos([...todos, input]);
    }
    const updateTodosArray = (id: number, status: string) => {
        let filteredTodos: ToDo[] = [];
        if (status === 'delete') {
            filteredTodos = todos.filter((element: ToDo) => element.id !== id)
        }
        else {
            filteredTodos = todos.map((element: ToDo) => {
                if (element.id === id) {
                    element.completed = element.completed === true ? false : true;
                }
                return element;
            })
        }
        setTodos(filteredTodos);
    }
    return (
        <ToDoContext.Provider value={{ todosArray: todos, currentValue: currentData, setInputValue, setTodoArray, updateTodosArray }}>
            {children}
        </ToDoContext.Provider>
    )
}