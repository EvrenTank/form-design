import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import HamburgerAnimation from '../components/animation';
import Button from '../components/buttonOfForm';
import ThreeDotButton from '../components/threeDotButton';
import styles from '../styles/InformationForm.module.scss';
import SettingsStack from './settingsStack';
import LinkStack from './informationFormLinkStack';
import EmailStack from './informationFormEmailStack';
const InformationForm = ({ isClicked, setIsClicked }: any) => {
  // It defines radio button options isEmail===true: send an e-mail transfer
  // isEmail === false : get the transfer link
  const [isEmail, setEmail] = useState(true);
  const handleRadioChange = () => {
    setEmail(isEmail => !isEmail);
    // Radio change edildigi zaman bazen ekranda SettingsCard en altta kalmıyor. Onu duzeltmek
    // icin buraya da scroll olayını ekledim. Ama eklemeden sanki daha iyiydi.
    //handleClick();
  };

  const [optionsVisibility, setOptionsVisibility] = useState(false);
  const handleOptions = () => {
    setOptionsVisibility(optionsVisibility => !optionsVisibility);
  };
  const scrollToElementRef2 = useRef<null | HTMLDivElement>(null);
  const handleClick = () => {
    if (scrollToElementRef2.current)
      scrollToElementRef2.current!.scrollIntoView({
        behavior: 'smooth'
      });
  };
  useEffect(() => {
    handleClick();
  }, [optionsVisibility]);

  return (
    <Card
      className={styles.mainCard}
      component={motion.div}
      initial={{ opacity: 0, zIndex: 10, display: 'none' }}
      animate={{
        opacity: isClicked ? 1 : 0,
        zIndex: isClicked ? 20 : 10,
        display: isClicked ? 'block' : 'none'
      }}
      transition={{
        duration: isClicked ? 2 : 0,
        display: {
          duration: 0
        }
      }}
    >
      <Box className={styles.box1}>
        <Box className={styles.subBox1ofBox1}>
          <Typography variant='h2' className={styles.typography1}>
            Welcome
          </Typography>
        </Box>
        <Box
          className={styles.subBox2ofBox1}
          onClick={() => {
            setIsClicked((isClicked: any) => !isClicked);
          }}
        >
          <Box className={styles.subBox1ofsubBox2ofBox1}>
            <HamburgerAnimation mySegments={[1, 2]}></HamburgerAnimation>
          </Box>
        </Box>
        <Typography className={styles.typography2} variant='h2'>
          {' '}
          Welcome! Please enter your details.
        </Typography>
      </Box>
      <Box className={styles.box2}>
        {isEmail ? <EmailStack /> : <LinkStack />}
        {optionsVisibility && (
          <SettingsStack
            isEmail={isEmail}
            onChangeEvent={handleRadioChange}
            scrollToElementRef={scrollToElementRef2}
          />
        )}
      </Box>
      <Box className={styles.box3}>
        <Box className={styles.subBox1ofBox3}>
          <ThreeDotButton handleOptions={handleOptions}></ThreeDotButton>
        </Box>
        <Box className={styles.subBox2ofBox3}>
          <Button text='Send' icon='Send'></Button>
        </Box>
      </Box>
    </Card>
  );
};

export default InformationForm;
