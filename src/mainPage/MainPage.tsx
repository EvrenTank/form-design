import { useState } from 'react';
import InformationForm from '../informationForm/informationForm';
import QuestionForm from '../questionForm/questionForm';
import styles from '../styles/MainPage.module.scss';

const MainPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPageFormDiv}>
        <InformationForm isClicked={isClicked} setIsClicked={setIsClicked} />
        <QuestionForm isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
    </div>
  );
};
export default MainPage;
