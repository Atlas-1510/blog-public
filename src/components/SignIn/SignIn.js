import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useLocalStorage from "../../hooks/useLocalStorage";

function SignIn() {
  const isMounted = useRef(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setValue } = useLocalStorage("jwt", null);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setUsername(e.target[0].value);
    setPassword(e.target[1].value);
  };

  useEffect(() => {
    async function getUser() {
      try {
        const result = await axios.post("http://localhost:1015/login", {
          username: username,
          password: password,
        });
        console.log(result.data);
        setValue(result.data);
        window.location.href = "http://localhost:3000/articles";
      } catch (err) {
        console.log(err);
      }
    }
    if (isMounted.current) {
      getUser();
    } else {
      isMounted.current = true;
    }
  }, [username, password, setValue]);

  return (
    <div className=" flex flex-col items-center flex-grow">
      <nav className="w-full flex justify-end p-4">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </nav>
      <div className="w-full flex-grow grid place-items-center ">
        <form
          onSubmit={(e) => formSubmitHandler(e)}
          className="flex flex-col w-10/12 md:w-1/3 bg-white p-4 border-0 rounded-lg shadow-lg"
        >
          <h1 className="text-2xl font-bold text-primary text-center">
            Sign in
          </h1>
          <div className="mt-2 flex flex-col">
            <label htmlFor="username" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="username"
              autoComplete="off"
              id="username"
              placeholder="Jane Doe"
              className="username-input"
            />
          </div>
          <div className="mt-2 flex flex-col">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="username-input"
            />
          </div>
          <input
            type="Submit"
            className="nav-link bg-highlight text-white mx-0 mt-10 hover:bg-indigo-700 hover:text-white"
          />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
