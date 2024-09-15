import React, { useEffect, useRef, useState } from "react";
import "./Style.css";

function SignUp() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    password: "",
    confirm: "",
    email: "",
  });

  const myRef = useRef();
  useEffect(() => {
    myRef.current.focus();
  }, [isSignUp]);

  const [submit, setSubmit] = useState(null);
  const [login, setLogin] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(data);
  };
  const handLogin = (event) => {
    event.preventDefault();
    setLogin(data);
  };

  return (
    <div>
      {isSignUp ? (
        <form onSubmit={handleSubmit} id="sign-form">
          <div>
            <label>First Name:</label>
            <input
              type="text"
              value={data.fname}
              ref={myRef}
              onChange={(e) => setData({ ...data, fname: e.target.value })}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={data.lname}
              onChange={(e) => setData({ ...data, lname: e.target.value })}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div>
            <label>Confirm</label>
            <input
              type="text"
              value={data.confirm}
              onChange={(e) => setData({ ...data, confirm: e.target.value })}
            ></input>
          </div>
          <div>
            <label>Email </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            ></input>
          </div>
          <button type="submit">Submit</button>{" "}
        </form>
      ) : (
        <form onSubmit={handLogin} id="sign-form">
          <h2>Login</h2>
          <label>Email </label>
          <input
            ref={myRef}
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Password</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      )}

      <button onClick={() => setIsSignUp((prev) => !prev)} id="switch">
        {" "}
        {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
      </button>

      {submit && (
        <div className="submit-data">
          <h3>SignUp</h3>
          <p>FirstName: {submit.fname}</p>
          <p>Email: {submit.email}</p>
          <p>
            You are signed up to the website at
            {new Date().toLocaleString()}
          </p>
        </div>
      )}
      {login && (
        <div className="submit-data">
          <h3>Login</h3>

          <p>Email: {login.email}</p>
          <p>
            You are logged in to the account at
            {new Date().toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default SignUp;
