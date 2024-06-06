import { useState } from "react"
import PropTypes from 'prop-types'


export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit} className="flex flex-col m-4">
            <input type="text"
                className="p-1 rounded"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
            <button 
            className="bg-blue-500 p-0.5 m-1 my-2"
            type="submit">Buscar</button>
        </form>
    )
}
AddCategory.propTypes = {
    onNewCategory: PropTypes.func
}
