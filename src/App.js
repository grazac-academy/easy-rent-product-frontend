import Header from './components/Header';
import Footer from './components/Footer';

import { Routes, Route, useLocation } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Auth from './layout/Auth/Auth';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import ResetPassword from 'pages/ResetPassword/ResetPassword';
import Property from 'pages/propertyDetails/property';
import Post from './layout/PostaHouse/auth';


function App() {
  const location = useLocation();

  if (
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/resetpassword'
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
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/auth" element={<Post />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
