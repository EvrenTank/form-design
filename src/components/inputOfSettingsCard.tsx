import styles from '../styles/InputOfSettingsCard.module.scss';
// Bu inputta container div, label ve tooltip yok. Sadece input olacak.
// Inputun tasarımını Input.tsx için hazırladıgım tasarımın aynısı yapacagım.
const InputofSettingsCard = ({ placeholder, isDisabled }: any) => {
  return (
    <input
      className={styles.textInput}
      type='text'
      placeholder={placeholder}
      disabled={isDisabled}
    />
  );
};
export default InputofSettingsCard;
