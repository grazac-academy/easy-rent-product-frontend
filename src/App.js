import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "pages/Home/Home";
import Auth from "./layout/Auth/Auth";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";
import ResetPassword from "pages/ResetPassword/ResetPassword";
import Property from "pages/propertyDetails/property";
import Address from "./pages/PostaHouse/Address/Address";
import Description from "./pages/PostaHouse/Description/Description";
import Features from "./pages/PostaHouse/Features/Features";
import Price from "./pages/PostaHouse/Price/Price";
import Photo from "./pages/PostaHouse/Photo/Photo";
import post from "./layout/PostaHouse/auth"

function App() {
  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/resetpassword"
  )
    return (
      <Auth>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </Auth>
    );
  else if (location.pathname==="/auth") {
    return (
      <>
        <auth>
          <Header />
          <Routes>
            <Route path="/Address" element={<Address />} />
            <Route path="/Description" element={<Description />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/Price" element={<Price />} />
            <Route path="/Photo" element={<Photo />} />
          </Routes>
        </auth>
      </>
    );
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/auth" element={<post/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
