import classes from './auth.module.css';
// import { Link } from "react-router-dom";
import Logo from 'assets/Logo.svg';
import Auth_Bg from 'assets/Auth_img.png';

const Auth = ({ children }) => {
  return (
    <main className={classes.main}>
      <div className={classes.whitePart}>
        {/* <Link to="/" className={classes.logoContainer}> */}

        <div className={classes.image}>
          <img src={Logo} alt="Logo" />
        </div>
        {/* </Link> */}
        <div>{children}</div>
      </div>
      <div className={classes.AuthBg}>
        <img src={Auth_Bg} alt="EasyRent" />
      </div>
    </main>
  );
};

export default Auth;
