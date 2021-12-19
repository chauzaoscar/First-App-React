import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);

        console.log(e.target.value);
    }

    const handleSummit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategory(categories => [inputValue,...categories]);
            setInputValue('');
    }
        
    }
    return (
        <>
            <form onSubmit={handleSummit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />

            </form>
            <h2>{inputValue}</h2>
            
            <h2>AddCategory</h2>    
        </>
    )
}
AddCategory.propTypes = {
    setCategory : PropTypes.func.isRequired
}

export default AddCategory
