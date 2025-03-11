import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import CreateListing from "./pages/CreateListing";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4 flex justify-between">
          <h1 className="text-xl font-bold">Marketplace</h1>
          <div>
            <Link to="/" className="mx-2 text-blue-500">Home</Link>
            <Link to="/create" className="mx-2 text-blue-500">New Listing</Link>
            <Link to="/profile" className="mx-2 text-blue-500">Profile</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateListing />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
