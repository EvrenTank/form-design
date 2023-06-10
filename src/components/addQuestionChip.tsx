import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import styles from '../styles/Variables.module.scss';

const AddQuestionChip = ({
  onClickEvent,
  id,
  scrollToElementRef,
  isReachedMax
}: any) => {
  return (
    <>
      {isReachedMax ? (
        <Tooltip
          arrow
          placement='right'
          title={
            <Typography
              sx={{
                fontFamily: styles.fontFamily,
                fontSize: '12px'
              }}
            >
              You should log in to add more questions.
            </Typography>
          }
        >
          <Chip
            icon={<AddCircleOutlineIcon />}
            variant='filled'
            onClick={onClickEvent}
            label='Add new question'
            ref={scrollToElementRef}
            id={id}
            sx={{
              backgroundColor: 'rgba(20, 42, 59, 0.9)',
              height: '6%',
              color: 'white',
              borderRadius: '50px',
              fontFamily: styles.fontFamily,
              width: '40%',
              marginLeft: '60%',
              letterSpacing: '0.8px',
              fontSize: '1vh',
              '&:hover': {
                backgroundColor: '#142A3B'
              },
              '& .css-1clelxe-MuiButtonBase-root-MuiChip-root': {
                '& :hover': {
                  backgroundColor: 'white'
                }
              },
              '& .css-8je8zh-MuiTouchRipple-root': {
                color: 'gray'
              },
              '& .css-i4bv87-MuiSvgIcon-root': {
                color: 'white',
                height: '70%',
                aspectRatio: '1'
              },
              '& .css-1vnxkr-MuiButtonBase-root-MuiChip-root': {
                color: 'red',
                backgroundColor: 'black'
              }
            }}
          ></Chip>
        </Tooltip>
      ) : (
        <Chip
          icon={<AddCircleOutlineIcon />}
          variant='filled'
          onClick={onClickEvent}
          label='Add new question'
          ref={scrollToElementRef}
          id={id}
          sx={{
            backgroundColor: 'rgba(20, 42, 59, 0.9)',
            height: '6%',
            color: 'white',
            borderRadius: '50px',
            fontFamily: styles.fontFamily,
            width: '40%',
            marginLeft: '60%',
            letterSpacing: '0.8px',
            fontSize: '1.0vh',
            '&:hover': {
              backgroundColor: '#142A3B'
            },
            '& .css-1clelxe-MuiButtonBase-root-MuiChip-root': {
              '& :hover': {
                backgroundColor: 'white'
              }
            },
            '& .css-8je8zh-MuiTouchRipple-root': {
              color: 'gray'
            },
            '& .css-i4bv87-MuiSvgIcon-root': {
              color: 'white',
              height: '70%',
              aspectRatio: '1'
            },
            '& .css-1vnxkr-MuiButtonBase-root-MuiChip-root': {
              color: 'red',
              backgroundColor: 'black'
            }
          }}
        ></Chip>
      )}
    </>
  );
};

export default AddQuestionChip;
