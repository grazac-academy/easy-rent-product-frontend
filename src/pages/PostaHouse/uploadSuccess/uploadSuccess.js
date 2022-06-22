import Success from 'assets/success.png';
import Btn from 'components/Btn/Btn';
import classes from './uploadSuccess.module.css';


const UploadSuccess = () => {
    return (
    <div className={classes.mainSuccess} >
        <div className={classes.innerSuccess} >
            <div className={classes.Successimg} >
                <img src={Success} alt='success' />
            </div>
            <Btn>Go to Dashboard</Btn>
        </div>
    </div>
    )
}

export default UploadSuccess;