import React, { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  // const notify = () => toast("Sucess Login!");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    if (!values.email || !values.password) {
      console.log("Fill The Data");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/Dash");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
        <h1 className="font-bold text-2xl">Welcome Back :)</h1>
        <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12">
          <label className="font-semibold text-xs" htmlFor="usernameField">
            Username or Email
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="email"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
            Password
          </label>

          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="password"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <button
            onClick={handlesubmit}
            className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
