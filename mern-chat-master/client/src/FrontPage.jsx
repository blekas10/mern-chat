import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";

const FrontPage = ({ setIsLoginOrRegister }) => {
    return (
      <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-8">Welcome to notMernChat</h1>
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => setIsLoginOrRegister('login')}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          <button
            onClick={() => setIsLoginOrRegister('register')}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </div>
      </div>
    );
  };
  
  export default FrontPage;