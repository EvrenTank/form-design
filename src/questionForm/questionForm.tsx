import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import AddQuestionChip from '../components/addQuestionChip';
import HamburgerAnimation from '../components/animation';
import Button from '../components/buttonOfForm';
import MultilineInputofForm2 from '../components/multilineInputOfQuestionForm';
import styles from '../styles/QuestionForm.module.scss';
const QuestionForm = ({ isClicked, setIsClicked }: any) => {
  // It defines radio button options isEmail===true: send an e-mail transfer
  // isEmail === false : get the transfer link

  const scrollToElementRef = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    if (scrollToElementRef.current)
      scrollToElementRef.current!.scrollIntoView({
        behavior: 'smooth'
      });
  };
  const [questions, setQuestions] = useState([
    { id: 1, label: `Question 1` },
    { id: 2, label: 'Question 2' }
  ]);
  const [questionNumber, setQuestionNumber] = useState(2);
  const [soruSayisi, setSoruSayisi] = useState(2); // Bu state sadece soru sayisini tutmak ve min ve max denetlemek icin kullanilacak.
  // questionNumber'ı kullanmak keylerde ve labellarda çakışmaya neden oldugu icin bu state eklendi.

  const [isReachedMin, setReachedMin] = useState(false);
  const [isReachedMax, setReachedMax] = useState(false);

  useEffect(() => {
    handleClick();
  }, [questions]);
  const add_newQuestion = () => {
    if (soruSayisi < 3) {
      setQuestionNumber(questionNumber => questionNumber + 1);
      setSoruSayisi(soruSayisi => soruSayisi + 1);
      const new_question = {
        id: questionNumber + 1,
        label: `Question ${questionNumber + 1}`
      };
      setQuestions(prev => [...prev, new_question]);
      updateObjectInArray();
      //console.log('Question number='+questionNumber);
      setReachedMin(false);
    } else {
      //console.log('Daha fazla soru eklenemez');
      setReachedMax(true);
    }
  };
  const delete_Question = (id: any) => {
    if (soruSayisi > 1) {
      setSoruSayisi(soruSayisi => soruSayisi - 1);
      const new_questions = questions.filter(question => question.id != id);
      setQuestions(new_questions);
      updateObjectInArray();
      //console.log('soruSayisi='+soruSayisi);
      setReachedMax(false);
    } else {
      //console.log('En az bir soru girmelisiniz');
      setReachedMin(true);
    }
  };
  const updateObjectInArray = () => {
    setQuestions(current =>
      current.map((obj, index) => {
        return { ...obj, label: `Question ${index + 1}` };
      })
    );
  };
  return (
    <Card
      className={styles.mainCard}
      component={motion.div}
      initial={{ opacity: 1, zIndex: 20, display: 'block' }}
      animate={{
        opacity: isClicked ? 0 : 1,
        zIndex: isClicked ? 10 : 20,
        display: isClicked ? 'none' : 'block'
      }}
      transition={{
        duration: isClicked ? 0 : 2,
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
            <HamburgerAnimation mySegments={[139, 140]}></HamburgerAnimation>
          </Box>
        </Box>
        <Typography className={styles.typography} variant='h2'>
          {' '}
          Welcome! Please enter your details.
        </Typography>
      </Box>
      <Box className={styles.box2}>
        {questions.map(question => (
          <MultilineInputofForm2
            key={question.id}
            label={question.label}
            placeholder='Write your question'
            isReachedMin={isReachedMin}
            onClickEvent={() => {
              delete_Question(question.id);
            }}
          ></MultilineInputofForm2>
        ))}
        <AddQuestionChip
          isReachedMax={isReachedMax}
          scrollToElementRef={scrollToElementRef}
          onClickEvent={() => {
            add_newQuestion();
          }}
        ></AddQuestionChip>
      </Box>
      <Box className={styles.box3}>
        <Box className={styles.subBox2ofBox3}>
          <Button
            text='Done'
            icon='Done'
            onClickEvent={() => {
              setIsClicked((isClicked: any) => !isClicked);
            }}
          ></Button>
        </Box>
      </Box>
    </Card>
  );
};
export default QuestionForm;
