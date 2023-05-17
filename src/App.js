import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const getEmploy = async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const res = await response.json();
    setData(res);
  };

  useEffect(() => {
    getEmploy();
  }, []);
  return (
    <>
      <div className="table">
        <div className="table-head">
          <div className="thead-row">First Name</div>
          <div className="thead-row">Last Name</div>
          <div className="thead-row">Age</div>
          <div className="thead-row">Brut Salary</div>
          <div className="thead-row">Net Salary</div>
          <div className="thead-row">Start Date</div>
          <div className="thead-row">End Date</div>
        </div>
        <div className="table-body">
          {data.map((e, i) => {
            return (
              <div className="table-row" key={i}>
                <div className="table-cell">{e.firstName} </div>
                <div className="table-cell">{e.lastName} </div>
                <div className="table-cell">{e.age} </div>
                <div className="table-cell">{e.brutSalary} </div>
                <div className="table-cell">{e.netSalary} </div>
                <div className="table-cell">
                  {new Date(e.startDate).toLocaleDateString('ro-RO')}
                </div>
                <div className="table-cell">{e.endDate} </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr />
      <form className="formDiv">
        <div>
          <label htmlFor="firsName">First name:</label>
          <input type="text" name="firstName" value={''} />

          <label htmlFor="lastName">Last name:</label>
          <input type="text" name="lastName" value={''} />
        </div>
        <label htmlFor="age">Age:</label>
        <input type="text" name="age" value={''} />
        <div>
          <label htmlFor="brutSalary">Brut Salary:</label>
          <input type="text" name="brutSalary" value={''} />

          <label htmlFor="netSalary">Net Salary:</label>
          <input type="text" name="netSalary" value={''} />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input type="text" name="startDate" value={''} />

          <label htmlFor="endDate">End Date:</label>
          <input type="text" name="endDate" value={''} />
        </div>
        <br />
        <button className="addNewBtn">Add new employer</button>
      </form>
    </>
  );
};

export default App;
