import Success from 'assets/success.png';
import Btn from 'components/Btn/Btn';
import classes from './uploadSuccess.module.css';
import Header from 'components/Header/Header';

const UploadSuccess = () => {
    <div className={classes.mainSuccess} >
        <Header />
        <div className={classes.innerSuccess} >
            <div className={classes.Successimg} >
                <img src={Success} alt='success' />
            </div>
            <Btn>Go to Dashboard</Btn>
        </div>
    </div>
}

export default UploadSuccess;