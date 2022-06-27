import Success from 'assets/success.png';
import Btn from 'components/Btn/Btn';
import classes from './uploadSuccess.module.css';
import { Link } from 'react-router-dom';



const UploadSuccess = () => {
    return (
        <div className={classes.mainSuccess} >
            <div className={classes.innerSuccess} >
                <div className={classes.Successimg} >
                    <img src={Success} alt='success' />
                </div>
                <Link to='/dashboard' className={classes.btn}>
                    <Btn >Go to Dashboard</Btn>
                </Link>
            </div>
        </div>
    )
}

export default UploadSuccess;