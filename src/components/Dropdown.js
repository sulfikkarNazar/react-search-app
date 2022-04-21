import React, { useState } from 'react'
import './Dropdown.css';

function Dropdown(
    {
        options,
        employees,
        placeholder,
        value,
        onChange,
        results
    }) {
    const [open, setOpen] = useState(false);
    const [dropdownFilteredData, setDropdownFilteredData] = useState();

    const handleClick = (option) => {
        const searchWord = option.name;
        const newFilter = employees.filter((value) => {
            return value.Dept.toLowerCase().includes(searchWord.toLowerCase());
        });
        setDropdownFilteredData(newFilter);
        return results(dropdownFilteredData);
    };
  return (
    <div className='dropdown col-md-4 mt-3'>
        <div className='control' onClick={() => {
            setOpen(prev => !prev);
        }}>
            <div className='selected-value'>{value ? value.name : placeholder}</div>
            <div className={`arrow ${open ? "open" : null}`}/>
        </div>
        <div className={`options ${open ? "open" : null}`}>
            {
                options.map((option) => {
                    return (
                        <div key={option.id} className={`option ${value === option ? "selected" : null}`} onClick={ () => {
                            onChange(option);
                            setOpen(false);
                            handleClick(option);
                        }}>{option.name}</div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Dropdown