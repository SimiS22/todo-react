import React, { createContext, useState } from 'react'


interface TodoContextType {
    todosArray: { value: string, completed: boolean, id: number }[],
    active: boolean,
    completed: boolean,
    isActive?: (id: number) => void;
    isCompleted?: (id: number) => void;

}

let todosData = [{ value: 'txt', completed: false, id: 1 }, { value: 'txt1', completed: true, id: 2 }]
export const ToDoContext = createContext<TodoContextType>({
    todosArray: [],
    active: true,
    completed: false
})

export const ToDoContextProvider: React.FC = ({ children }) => {

    return (
        <ToDoContext.Provider value={{ todosArray: todosData, active: true, completed: false }}>
            {children}
        </ToDoContext.Provider>
    )
}