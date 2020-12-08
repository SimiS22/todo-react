import React, { createContext, useState } from 'react'


interface TodoContextType {
    todosArray: { value: string, completed: boolean, id: number }[],
    value: string,
    active: boolean,
    completed: boolean,
    isActive?: (id: number) => void;
    isCompleted?: (id: number) => void;
}

export const ToDoContext = createContext<TodoContextType>({
    todosArray: [{ value: 'txt', completed: false, id: 1 }],
    value: '',
    active: true,
    completed: false
})

export const ToDoContextProvider: React.FC = ({ children }) => {

    return (
        <ToDoContext.Provider value={{ todosArray: [], value: '', active: true, completed: false }}>
            {children}
        </ToDoContext.Provider>
    )
}