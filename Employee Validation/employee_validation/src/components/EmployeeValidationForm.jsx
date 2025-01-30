import React from "react";

function EmployeeValidationForm() {
  return (
    <div className="layout-column align-items-center mt-20 ">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className="w-100"
          type="text"
          name="name"
          value="User"
          placeholder="Name"
          data-testid="input-name-test"
        />
        {/* <p className="error mt-2">
          Name must be at least 4 characters long and only contain letters and spaces
        </p> */}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className="w-100"
          type="text"
          name="email"
          value="user@email.com"
          placeholder="Email"
        />
        {/* <p className="error mt-2">Email must be a valid email address</p> */}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={123}
          placeholder="Employee ID"
        />
        {/* <p className="error mt-2">Employee ID must be exactly 6 digits</p> */}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value="2023-12-04"
          placeholder="Joining Date"
        />
        <p className="error mt-2">Joining Date cannot be in the future</p>
      </div>
      <button data-testid="submit-btn" type="submit">
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
