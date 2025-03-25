import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup Successful!");
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account? <Link to="/signin" className="text-blue-600">Sign In</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;
