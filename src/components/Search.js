import React, { Component } from "react";
import employees from "./ContactList";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  eventHandler = (event) => {
    this.setState({
        message: event.target.value
    });
  };

  buttonAction() {
    console.log(employees);
  }
  render() {
    return (
      <div className="container col-md-5">
          <div className="row">
            <div className="search-employee col-md-7 ">
                <input type="text" className="form-control" placeholder="Search Employee" onChange={this.eventHandler} />
            </div>
            <div className="col-md-3">
                <button className="button-solid" onClick={() => this.buttonAction()}>
                    <i className="fa-solid fa-filter my-icon"></i>
                </button>
            </div>
          </div>
          <div className="employee-list">
              {
                  employees.map((employee, index) => {
                      return (
                        <div key={employee.Id}>
                            <ul>
                            <div className="id-card-wrapper">
                                <div className="id-card">
                                    <div className="profile-row">
                                        <div className="dp">
                                            <img className="circular--square" src={employee.Image}></img>
                                        </div>
                                        <div className="desc">
                                            <strong>{employee.Name}</strong>
                                            <p>{employee.Phone}</p>
                                            <p>{employee.Degree}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </ul>
                        </div>
                      )
                  })
              }
          </div>

      </div>
    );
  }
}

export default Search;
