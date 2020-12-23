import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ToDoContext } from '../contexts/ToDoContext'

const InputTextboxWrapper = styled.input`
    height: 50px;
    width:40%;
    display: flex;
    border-radius: 50px;
    box-shadow: 0px 0px 20px 0px #e2e2e2;
    position :relative;
    outline: none;
    border: none;

`
const InputTextbox: React.FC = () => {
    const todos = useContext(ToDoContext)
    const [data, setData] = useState('')

    const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value);
        todos.setInputValue?.(data);
    }
    return (
        <InputTextboxWrapper type='text' id='input' value={data} placeholder='Enter your text here' autoFocus={true} onChange={handleOnchange} />
    )
}
export default InputTextbox