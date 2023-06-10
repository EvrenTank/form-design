import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import LockIcon from '@mui/icons-material/Lock';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { IconButton, Card } from '@mui/material';
import { useState } from 'react';
import styles from '../styles/DurationSelector.module.scss';

const DurationSelector = ({ setDuration, handleTitle }: any) => {
  const timeOptions = ['30s', '60s', '2m', '3m', '5m'];
  const [index, setIndex] = useState(0);
  const rightClick = () => {
    if (index == timeOptions.length - 1) {
      setIndex(0);
    } else {
      setIndex(index => index + 1);
    }
  };
  const leftClick = () => {
    if (index == 0) {
      setIndex(4);
    } else {
      setIndex(index => index - 1);
    }
  };
  const getTime = () => {
    if (index == timeOptions.length - 1) {
      //console.log('Bu seçeneği seçebilmek için premium üye olmalısınız.');
      console.log('Unchoosable');
    } else {
      console.log(timeOptions[index]);
      setDuration(timeOptions[index]);
    }
  };
  const keyClick = (e: any) => {
    if (e.key == 'ArrowRight') {
      rightClick();
    } else if (e.key == 'ArrowLeft') {
      leftClick();
    }
  };
  return (
    <Card className={styles.class1} tabIndex={0} onKeyDown={keyClick}>
      <Card id={styles.first_div}>
        <Card className={styles.side_div}>
          <ChevronLeftIcon onClick={leftClick} />
        </Card>
        <Card id={styles.middle_div}>
          <Card className={styles.scrollCard} sx={{ fontSize: '0.7em' }}>
            {timeOptions[(index + 3) % 5]}
            {(index + 3) % 5 == 4 ? <LockIcon sx={{ width: '0.7em' }} /> : ''}
          </Card>
          <Card className={styles.scrollCard} sx={{ fontSize: '0.7em' }}>
            {timeOptions[(index + 4) % 5]}
            {(index + 4) % 5 == 4 ? <LockIcon sx={{ width: '0.7em' }} /> : ''}
          </Card>
          <Card
            className={styles.scrollCard}
            sx={{ backgroundColor: 'rgb(220,220,220)', fontSize: '1.4em' }}
          >
            {timeOptions[index]}
            {(index + 5) % 5 == 4 ? <LockIcon sx={{ width: '0.7em' }} /> : ''}
            <ArrowDropUpIcon className={styles.arrowDropUpIcon} />
          </Card>
          <Card className={styles.scrollCard} sx={{ fontSize: '0.7em' }}>
            {timeOptions[(index + 1) % 5]}
            {(index + 1) % 5 == 4 ? <LockIcon sx={{ width: '0.7em' }} /> : ''}
          </Card>
          <Card className={styles.scrollCard} sx={{ fontSize: '0.7em' }}>
            {timeOptions[(index + 2) % 5]}
            {(index + 2) % 5 == 4 ? <LockIcon sx={{ width: '0.7em' }} /> : ''}
          </Card>
        </Card>
        <Card className={styles.side_div}>
          <ChevronRightIcon onClick={rightClick} />
        </Card>
      </Card>
      <div id={styles.second_div}>
        <IconButton
          sx={{
            width: '3.2vh',
            height: '3.2vh'
          }}
          onClick={() => {
            getTime();
            handleTitle();
          }}
        >
          <DoneIcon
            sx={{
              color: '#386641',
              borderRadius: '50%',
              height: '3vh',
              width: '3vh'
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            width: '3.2vh',
            height: '3.2vh'
          }}
          onClick={() => {
            handleTitle();
          }}
        >
          <CloseIcon sx={{ color: '#9d0208', height: '3vh', width: '3vh' }} />
        </IconButton>
      </div>
    </Card>
  );
};
export default DurationSelector;
