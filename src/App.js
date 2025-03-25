import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signup from "./../pages/Signup";
// import Signin from "./../pages/Signin";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

// import Signup from "./pages/Signup";  // ✅ Corrected path
// import Signin from "./pages/Signin";  // ✅ Corrected path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
