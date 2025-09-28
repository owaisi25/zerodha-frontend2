import React from "react";

function Signup() {
  return (
    <div className="container mt-5">
      <h1>Signup</h1>
      <form className="mt-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" id="name" className="form-control" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" id="email" className="form-control" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Enter your password" />
        </div>

        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
