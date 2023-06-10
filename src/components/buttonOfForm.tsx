import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import IconButton from '@mui/material/IconButton';
import styles from '../styles/ButtonOfForm.module.scss';
const Button = ({ text, icon, onClickEvent }: any) => {
  return (
    <IconButton className={styles.iconButton} onClick={onClickEvent}>
      {text}
      {icon == 'Send' && <SendSharpIcon className={styles.icon} />}
      {icon == 'Done' && <DoneAllOutlinedIcon className={styles.icon} />}
    </IconButton>
  );
};
export default Button;
