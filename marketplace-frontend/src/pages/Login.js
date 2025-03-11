import { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="block w-full p-2 my-2 border" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="block w-full p-2 my-2 border" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-green-500 text-white px-4 py-2" type="submit">Login</button>
      </form>
    </div>
  );
}
