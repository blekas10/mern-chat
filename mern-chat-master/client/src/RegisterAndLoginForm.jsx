import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";
import myImage from "./assets/Coat_of_arms_of_Palanga_Lithuania.png";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("login");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === "register" ? "register" : "login";
    const { data } = await axios.post(url, { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  }
  return (
    <div className="bg-purple-50 min-h-screen flex">
      <div className="w-full flex items-center justify-center">
        <div className="bg-white shadow-md rounded-md p-6">
          <form className="mx-auto" onSubmit={handleSubmit}>
            <div className="flex justify-center items-center my-5">
              <h1 className="text-2xl text-purple-600">notMernChat</h1>
            </div>
            <input
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              type="text"
              placeholder="username"
              className="block w-full rounded-md p-2 mb-2 border border-purple-300"
            />
            <input
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              type="password"
              placeholder="password"
              className="block w-full rounded-md p-2 mb-2 border border-purple-300"
            />
            <button className="bg-purple-500 text-white block w-full rounded-md p-2">
              {isLoginOrRegister === "register" ? "Register" : "Login"}
            </button>
            <div className="text-center mt-2 text-purple-600">
              {isLoginOrRegister === "register" && (
                <div>
                  Jau turite paskyra?
                  <button
                    className="ml-1 text-purple-500"
                    onClick={() => setIsLoginOrRegister("login")}
                  >
                    Prisijunk
                  </button>
                </div>
              )}
              {isLoginOrRegister === "login" && (
                <div>
                  Neturi paskyros?
                  <button
                    className="ml-1 text-purple-500"
                    onClick={() => setIsLoginOrRegister("register")}
                  >
                    Susikurkite
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      
      
    </div>
  );
}