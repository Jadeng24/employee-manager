import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          { 
            this.props.employees.map((employee) => {
              return (
                <li className="listText"  onclick={ () => {this.props.selectEmployee(employee) }}></li>

              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;