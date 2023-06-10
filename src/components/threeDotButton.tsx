import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import styles from '../styles/ThreeDotsButton.module.scss';
const ThreeDotButton = ({ handleOptions }: any) => {
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled(toggled => !toggled);
  };
  return (
    <IconButton
      className={
        !toggled ? styles.threeDotsButton : styles.threeDotsButton_Toggled
      }
      onClick={() => {
        handleToggle();
        handleOptions();
      }}
    >
      <MoreHorizIcon className={styles.icon} />{' '}
    </IconButton>
  );
};
export default ThreeDotButton;
