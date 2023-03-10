import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/cyber-estate" element={<Explore />} />
          <Route path="/cyber-estate/offers" element={<Offers />} />
          <Route path="/cyber-estate/profile" element={<SignIn />} />
          <Route path="/cyber-estate/sign-in" element={<SignIn />} />
          <Route path="/cyber-estate/sign-up" element={<SignUp />} />
          <Route
            path="/cyber-estate/forgot-password"
            element={<ForgotPassword />}
          />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}
export default App;
