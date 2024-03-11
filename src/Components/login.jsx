// src/App.js
import React, { useState } from 'react';


const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <form className="bg-white p-8 shadow-black rounded shadow-2xl">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username:
          </label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex space-x-3 justify-between items-center '>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          type="submit"
          onClick={handleSubmit}
        >
          SignUp
        </button>
        </div>
      </form>
    </div>
  );
};




export default Login;
