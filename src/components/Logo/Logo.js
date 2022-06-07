import classes from './Logo.module.css';
import { Link } from 'react-router-dom';
import HeaderLogo from 'assets/headerLogo.svg';
const Logo = () => {
    return ( 
        <Link to="/" className={classes.logoContainer}>
          <div className={classes.image}>
            <img src={HeaderLogo} alt="logo" />
          </div>
        </Link>
     );
}
 
export default Logo;