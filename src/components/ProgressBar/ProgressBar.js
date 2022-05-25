import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import cancel from '../../assets/cancel.svg';
import classes from './ProgressBar.module.css';
import ChangingProgressProvider from './ChangingProgressProvider';

const ProgressBar = ({ currTab, presentTab, nextTab }) => {
  return (
    <div className={classes.progressContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.innerProgress}>
          <div className={classes.progress}>
            <ChangingProgressProvider values={[1, 2, 3, 4, 5]}>
              {(percentage) => (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage} of 5`}
                  minValue={1}
                  maxValue={5}
                  styles={buildStyles({
                    textColor: '#1B1B1B',
                    pathColor: '#7453EE',
                    textSize: '23px',
                    trailColor: 'white',
                    strokeLinecap: 'butt',
                  })}
                />
              )}
            </ChangingProgressProvider>
          </div>
          <div className={classes.address}>
            <h4>
              {presentTab.id + 1} .{presentTab.name}
            </h4>
            <p>
              Next step: {nextTab.id + 1}. {nextTab.name}
            </p>
          </div>
        </div>
        <div className={classes.cancel}>
          <img src={cancel} alt="cancel" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
