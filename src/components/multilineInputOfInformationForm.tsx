import { useRef } from 'react';
import styles from '../styles/MultilineInputOfInformationForm.module.scss';

const MultilineInput = ({ label, placeholder }: any) => {
  const multilineInputRef = useRef<HTMLTextAreaElement | null>(null);
  const multilineInputDivRef = useRef<HTMLDivElement | null>(null);

  const resizeTextArea = () => {
    if (
      multilineInputRef.current &&
      multilineInputRef.current!.offsetHeight <
        multilineInputRef.current!.scrollHeight
    ) {
      multilineInputRef.current!.style.height = 'auto';
      multilineInputRef.current!.style.height =
        multilineInputRef.current!.scrollHeight + 'px';
      const scrollHeightofInput = multilineInputRef.current!.scrollHeight;
      console.log('scrollHeightofInput=' + scrollHeightofInput);
      console.log(
        'offsetHeightofInput=' + multilineInputRef.current!.offsetHeight
      );
    }
    console.log(
      'scrollHeightofInput=' + multilineInputRef.current!.scrollHeight
    );
    console.log(
      'offsetHeightofInput=' + multilineInputRef.current!.offsetHeight
    );
    if (
      multilineInputDivRef.current &&
      multilineInputDivRef.current!.offsetHeight <
        multilineInputDivRef.current!.scrollHeight
    ) {
      multilineInputDivRef.current!.style.height = 'auto';
      multilineInputDivRef.current!.style.height =
        multilineInputDivRef.current!.scrollHeight + 'px';
      const scrollHeightofDiv = multilineInputDivRef.current!.scrollHeight;
      console.log('scrollHeightofDiv=' + scrollHeightofDiv);
    }
    if (multilineInputRef.current!.value == '') {
      multilineInputDivRef.current!.style.height = '35%';
      multilineInputRef.current!.style.height = '65%';
    }
  };

  return (
    <div className={styles.inputDiv} ref={multilineInputDivRef}>
      <label className={styles.inputLabel}> {label} </label>

      <textarea
        className={styles.textArea}
        placeholder={placeholder}
        ref={multilineInputRef}
        onInput={resizeTextArea}
      ></textarea>
    </div>
  );
};

export default MultilineInput;
