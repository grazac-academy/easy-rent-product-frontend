import { useState } from "react";
import styles from './FormGroup.module.css';

const FormGroup = ( props ) => {

  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  
  return (
    <div className="form-group">
      <label className={styles.formLabel}>{label}</label>
      <input 
        className={styles.formInput}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "password" && setFocused(true)
        }
        focused={focused.toString()} />
      <span className={styles.error}>{errorMessage}</span>
      
    </div>
  );
};

export default FormGroup;