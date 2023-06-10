import styles from '../styles/Input.module.scss';
import CustomTooltip, { title1 } from './customizedTooltip';

const Input = ({ label, placeholder, setTooltip }: any) => {
  return (
    <div className={styles.inputDiv}>
      <label className={styles.inputLabel}>{label} </label>
      {/*<br />*/}
      {!setTooltip ? (
        <input
          className={styles.textInput}
          type='text'
          placeholder={placeholder}
        />
      ) : (
        <CustomTooltip title={title1}>
          <input
            className={styles.textInput}
            type='text'
            placeholder={placeholder}
          />
        </CustomTooltip>
      )}
    </div>
  );
};

export default Input;
