import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, Tooltip, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useRef, useState } from 'react';
import styles from '../styles/MultilineInputOfQuestionForm.module.scss';
import DurationSelector from './durationSelector';

const MultilineInputofForm2 = ({
  label,
  placeholder,
  onClickEvent,
  isReachedMin
}: any) => {
  const [duration, setDuration] = useState('empty');
  const [isTitleOpen, setTitleOpen] = useState(false);
  const handleTitle = () => {
    setTitleOpen(isTitleOpen => !isTitleOpen);
  };

  const multilineInputRef = useRef<HTMLTextAreaElement | null>(null);
  const multilineInputDivRef = useRef<HTMLDivElement | null>(null);
  const accesstimeIconRef = useRef<HTMLButtonElement | null>(null);

  const resizeTextArea = () => {
    const textArea = multilineInputRef.current!;
    const containerDiv = multilineInputDivRef.current!;
    const accesstimeIcon = accesstimeIconRef.current!;
    if (
      multilineInputRef.current &&
      textArea.offsetHeight < textArea.scrollHeight
    ) {
      const height_difference = textArea.scrollHeight - textArea.offsetHeight;

      textArea.style.height = 'auto';
      textArea.style.height = textArea.scrollHeight + 'px';
      containerDiv.style.height =
        containerDiv.offsetHeight + height_difference + 'px';
      const scrollHeightofInput = textArea.scrollHeight;
      console.log('scrollHeightofInput=' + scrollHeightofInput);
    }
    /* if (
      multilineInputDivRef.current &&
      containerDiv.offsetHeight <
        containerDiv.scrollHeight
    ) {
      containerDiv.style.height = 'auto';
      containerDiv.style.height =
      containerDiv.scrollHeight + 'px';
    }*/
    if (textArea.value == '') {
      containerDiv.style.height = '35%';
      textArea.style.height = '65%';
      accesstimeIcon.style.bottom = '35px';
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
      <Tooltip
        arrow
        title={
          !isReachedMin ? (
            <Typography
              sx={{
                fontFamily: styles.fontFamily,
                fontSize: '12px'
              }}
            >
              Delete this question
            </Typography>
          ) : (
            <Typography
              sx={{
                fontFamily: styles.fontFamily,
                fontSize: '12px'
              }}
            >
              You must send at least one question.
            </Typography>
          )
        }
        placement='top'
      >
        <IconButton className={styles.deleteIconButton} onClick={onClickEvent}>
          <DeleteOutlineOutlinedIcon className={styles.deleteIcon} />
        </IconButton>
      </Tooltip>

      <Tooltip
        open={isTitleOpen}
        placement='right'
        arrow
        title={
          <Box
            sx={{
              height: '16vh',
              width: '48vh'
            }}
          >
            <DurationSelector
              setDuration={setDuration}
              handleTitle={handleTitle}
            ></DurationSelector>
          </Box>
        }
      >
        <IconButton
          className={styles.accesstimeIconButton}
          onClick={handleTitle}
          ref={accesstimeIconRef}
        >
          {duration == 'empty' ? (
            <AccessTimeIcon className={styles.accesstimeIcon} />
          ) : (
            // varianti h6 degil button yapacaktim aslinda ama oyle olunca metin tamamen buyuk harf oluyor.
            <Typography className={styles.durationText} variant='h6'>
              {duration}
            </Typography>
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default MultilineInputofForm2;
