import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(null);
  const [loginMessage, setLoginMessage] = useState(null);

  const handleGetName = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/app/getUserFullName",
        {
          username,
        }
      );
      setName(response.data.name);
    } catch (error) {
      console.error(error);
      setName({ error: "User not found" });
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/app/login", {
        username,
        password,
      });
      setLoginMessage(`Login successful! Token: ${response.data.token}`);
    } catch (error) {
      setLoginMessage("Login failed: Unauthorized");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Micro Api Caller</h1>

      <div>
        <h2>Get Users Full Name</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleGetName}>Get Name</button>
        {name && (
          <div>
            <h3>Result:</h3>
            <pre>{JSON.stringify(name, null, 2)}</pre>
          </div>
        )}
      </div>

      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {loginMessage && <p>{loginMessage}</p>}
      </div>
    </div>
  );
}

export default App;
