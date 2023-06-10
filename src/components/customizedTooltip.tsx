import RocketIcon from '@mui/icons-material/Rocket';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import styles from '../styles/Variables.module.scss';

// title propunu  customizedTooltipin export edildiği  yerde vermemizi istiyor. O yüzden title ve customizedTooltipi ayrı olarak oluşturup
// Form1 içinde birleştiriyorum.
export const title1 = (
  <>
    <Typography
      variant='h6'
      sx={{
        fontSize: '0.73rem',
        fontFamily: styles.fontFamily
      }}
    >
      {' '}
      E-posta adresinizi buraya girerseniz mülakatlarınız gönderildiğinde ve
      cavaplar gelmeye başladığında size haber verebiliriz.
      <br />
      Bunun gerçekten siz olduğunu bilmemiz için e-postanızı doğrulamanız
      gerekecek. Her defasında doğrulamak istemiyor musunuz?
    </Typography>
    <br />
    <br />
    <br />
    <Button
      variant='outlined'
      sx={{
        backgroundColor: 'white',
        width: '160px',
        height: '40px',
        fontSize: '1.2em',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '10px',
        color: '#0097e8',
        fontFamily: styles.fontFamily,
        '&:hover': {
          backgroundColor: 'white',
          border: 'none'
        }
      }}
    >
      free account
    </Button>
  </>
);

export const Title2 = ({ onClickEvent }: any) => {
  return (
    <>
      <RocketIcon
        sx={{
          width: '90px',
          height: '90px',
          color: 'white'
        }}
      />
      <Typography
        variant='h6'
        sx={{
          lineHeight: '1.4rem',
          fontFamily: styles.fontFamily
        }}
      >
        {' '}
        Deneyiminizi daha iyi bir seviyeye çıkarmak ister misiniz?
      </Typography>
      <br />
      <Typography
        variant='h6'
        sx={{
          fontSize: '0.8rem',
          fontFamily: styles.fontFamily
        }}
      >
        {' '}
        Daha fazla soru eklemek ve mülakatlar için parolalar ve bitiş tarihleri
        belirlemek ister misiniz?
      </Typography>
      <br />
      <Button
        variant='outlined'
        sx={{
          backgroundColor: 'white',
          width: '160px',
          height: '40px',
          fontSize: '1.2em',
          fontWeight: 'bold',
          border: 'none',
          color: 'purple',
          lineHeight: '1rem',
          textTransform: 'capitalize',
          fontFamily: styles.fontFamily,
          '&:hover': {
            backgroundColor: 'white',
            border: 'none'
          }
        }}
        onClick={onClickEvent}
      >
        Hesabınızı Yükseltin
      </Button>
    </>
  );
};

export const title3 = () => {
  return (
    <Typography
      variant='h6'
      sx={{
        fontSize: '1.2rem',
        fontFamily: styles.fontFamily
      }}
    >
      Delete question
    </Typography>
  );
};

const CustomTooltip = styled(({ className, ...props }: any) => (
  <Tooltip arrow placement='right' {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    width: '230px',
    padding: '20px',
    borderRadius: '15px',
    textAlign: 'center'
  }
});

export const CustomTooltip2 = styled(({ className, ...props }: any) => (
  <Tooltip arrow placement='right' {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    width: '230px',
    paddingTop: '25px',
    paddingBottom: '20px',
    borderRadius: '15px',
    textAlign: 'center'
  }
});

export default CustomTooltip;
