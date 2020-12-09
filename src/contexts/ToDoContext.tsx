import React, { createContext, useState } from 'react'

interface ToDo {
    value: string,
    completed: boolean,
    id: number
}

interface TodoContextType {
    todosArray: ToDo[],
    currentValue: string,
    active: boolean,
    completed: boolean,
    isActive?: (id: number) => void;
    isCompleted?: (id: number) => void;
    setInputValue?: (inputData: string) => void;
    setTodoArray?: (inputElement: ToDo) => void;
}

let todosData = [{ value: 'txt', completed: false, id: 0 }, { value: 'txt1', completed: true, id: 1 }]
export const ToDoContext = createContext<TodoContextType>({
    todosArray: [],
    currentValue: '',
    active: true,
    completed: false,
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
    return (
        <ToDoContext.Provider value={{ todosArray: todos, currentValue: currentData, active: true, completed: false, setInputValue, setTodoArray }}>
            {children}
        </ToDoContext.Provider>
    )
}