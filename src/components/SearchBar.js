import React, { useState, useEffect } from 'react';
import employees from "./ContactList";
import Dropdown from './Dropdown';
import './MyStyles.css';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@material-ui/core/Input';
import filter from '../images/filter-new.svg';
import departments from './Departments.json';


function SearchBar() {
    const [filteredData, setFilteredData] = useState(employees);
    const [isShow, setIsShow] = useState(true);
    const [enteredWord, setWordEntered] = useState("");
    const [value, setDropdownValue] = useState("");

    useEffect(() => {
        if (value !== "") {
          let selectTempData = employees.filter((selectItem) => {
            return (
              selectItem.Dept === value.name &&
              selectItem.Name.toLowerCase().includes(enteredWord.toLowerCase())
            );
          });
          setFilteredData(selectTempData);
        } else {
            handleFilter(enteredWord);
        }
    }, [enteredWord, value]);

    const handleFilter = (searchWord) => {
        setWordEntered(searchWord);
        const newFilter = employees.filter((value) => {
            return value.Name.toLowerCase().includes(searchWord.toLowerCase());
        });

        setFilteredData(newFilter);
    };

    const searchSelectText = (value) => {
        setDropdownValue(value);
      };

    const showHide = () => {
        setIsShow(!isShow);
        if (isShow) {
            setDropdownValue("");
        }
        setWordEntered("");
    }

    const dropdownResults = (value) => {
        return value;
    }

  return (
    <section className="py-4 container col-md-8">
        <div className="row">
            <div className="search-employee col-md-5">
                <div>
                <Input
                    type="text"
                    className="input-employee form-control"
                    placeholder="Search Employee"
                    value={enteredWord}
                    onChange={(e) => handleFilter(e.target.value)}
                    disableUnderline={true}
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
                </div>
                <button className="filter-btn" onClick={showHide}>
                    <img src={filter} />
                </button>
            </div>
        </div>
        {
            isShow ?
            <Dropdown
                options={departments}
                employees={employees}
                placeholder="Select Trade"
                value={value}
                onChange={val => searchSelectText(val)}
                results={dropdownResults}/> : <>
            </>
        }
        <div className="employee-list row justify-content-center">
            {
                filteredData.map((employee, index) => {
                    return (
                        <div key={employee.Id} className="id-card col-11 col-md-6 col-lg-3 mb-4 mt-4">
                            <div className="profile-row">
                                <div className="dp overflow-hidden h-100">
                                    <img className="circular--square" src={employee.Image}></img>
                                </div>
                                <div className="desc">
                                    <strong>{employee.Name}</strong>
                                    <p>{employee.Phone}</p>
                                    <p>{employee.Dept}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </section>
  )
}

export default SearchBar
