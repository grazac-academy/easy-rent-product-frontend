import Header from 'components/Header/Header';
import Footer from './components/Footer'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Auth from './layout/Auth/Auth';
import Login from 'pages/Auth/Login/Login';
import SignUp from 'pages/Auth/SignUp/SignUp';
import ResetPassword from 'pages/Auth/ResetPassword/ResetPassword';
import Property from 'pages/PropertyDetails/Property';
import Post from './layout/PostaHouse/auth';
import NewPassword from 'pages/Auth/NewPassword/NewPassword';
import UpdatePassword from 'pages/Auth/UpdatePassword/UpdatePassword';
import Apartmentlist from 'pages/Apartmentlist/Apartmentlist';
import DashboardLayout from './layout/Dashboard/DashboardLayout';
import DashboardOverview from 'pages/Dashboard/DashboardOerview/DashboardOverview';
import DashboardProperties from 'pages/Dashboard/DashboardProperties/DashboardProperties';
import DashboardProfile from 'pages/Dashboard/DashboardProfile/DashboardProfile';
import Bookmarks from 'pages/Bookmarks/Bookmarks';
import House from './pages/House/House';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init()
  const location = useLocation();

  if (
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/resetpassword' ||
    location.pathname === '/newpassword' ||
    location.pathname === '/updatepassword'
  ) {
    return (
      <Auth>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/updatepassword" element={<UpdatePassword />} />
        </Routes>
      </Auth>
    );
  } else if (location.pathname.includes('/dashboard')) {
    return (
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="properties" element={<DashboardProperties />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="posthouse" element={<DashboardProfile />} />
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
        <Route path="/house" element={<House />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
