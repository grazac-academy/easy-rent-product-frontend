import Header from './components/Header';
import Footer from './components/Footer';

import { Routes, Route, useLocation } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Auth from './layout/Auth/Auth';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import ResetPassword from 'pages/ResetPassword/ResetPassword';
import Property from 'pages/PropertyDetails/Property';
import Post from './layout/PostaHouse/auth';
import NewPassword from 'pages/NewPassword/NewPassword';
import Apartmentlist from 'pages/Apartmentlist/Apartmentlist';
import DashboardLayout from './layout/Dashboard/DashboardLayout';
import DashboardHome from 'pages/Dashboard/DashboardHome/DashboardHome';
import DashboardProperties from 'pages/Dashboard/DashboardProperties/DashboardProperties';
import DashboardProfile from 'pages/Dashboard/DashboardProfile/DashboardProfile';
import Bookmarks from 'pages/Bookmarks/Bookmarks';
import House from './pages/House/House';

function App() {
  const location = useLocation();

  if (
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/resetpassword' ||
    location.pathname === '/newpassword'
  ) {
    return (
      <Auth>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />
        </Routes>
      </Auth>
    );
  } else if (location.pathname.includes('/dashboard')) {
    return (
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="properties" element={<DashboardProperties />} />
          <Route path="profile" element={<DashboardProfile />} />
        </Route>
      </Routes>
    );
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/apartmentlist" element={<Apartmentlist />} />
        <Route path="/House" element={<House />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
