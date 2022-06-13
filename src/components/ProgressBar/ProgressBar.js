import React, { useMemo, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import cancel from '../../assets/cancel.svg';
import classes from './ProgressBar.module.css';
import ChangingProgressProvider from './ChangingProgressProvider';

const ProgressBar = ({ currTab, presentTab, nextTab }) => {
  console.log(presentTab);

  const percent = useMemo(() => {
    return (presentTab.id + 1) * 20;
  }, [presentTab]);

 const [closeBar, setcloseBar] = useState(true); 

  return (
    closeBar&&
    <div className={classes.progressContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.innerProgress}>
          <div className={classes.progress}>
            <CircularProgressbar
              value={percent}
              text={`${presentTab.id + 1} of 5`}
              styles={buildStyles({
                textColor: '#1B1B1B',
                pathColor: '#7453EE',
                textSize: '23px',
                trailColor: 'white',
                strokeLinecap: 'butt',
              })}
            />
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
          { <img src={cancel} alt="cancel"  onClick={ () => setcloseBar(!true)} /> }
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
