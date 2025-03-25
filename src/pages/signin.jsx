import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Signin = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-500"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account? <Link to="/signup" className="text-green-600">Sign Up</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Signin;
