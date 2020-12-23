import { useState, useEffect } from 'react'

export const useLocalStorage = (key: string, defaultValue: any) => {
    const stored = localStorage.getItem(key)
    const initial = stored ? JSON.parse(stored) : defaultValue;
    const [data, setData] = useState(initial);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [key, data])
    return [data, setData]
}