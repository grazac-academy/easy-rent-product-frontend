import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Auth from './layout/Auth/Auth';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ResetPassword from './pages/ResetPassword/ResetPassword';

function App() {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/resetpassword")
    return (
      <Auth>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </Auth>
    );

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
