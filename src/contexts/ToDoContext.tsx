import React, { createContext, useState } from 'react'


interface TodoContextType {
    value: string,
    active: boolean,
    completed: boolean,
    isActive?: (id: number) => void;
    isCompleted?: (id: number) => void;
}

export const todoContext = createContext<TodoContextType>({
    value: '',
    active: true,
    completed: false
})

export const todoContextProvider: React.FC = ({ children }) => {
    const [value, setValue] = useState('')


    return (
        <todoContext.Provider value={{ value: '', active: true, completed: false }}>
            {children}
        </todoContext.Provider>
    )
}