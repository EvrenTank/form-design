import LockIcon from '@mui/icons-material/Lock';
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Tooltip,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { CustomTooltip2, Title2 } from '../components/customizedTooltip';
import InputofSettingsCard from '../components/inputOfSettingsCard';
import styles from '../styles/Variables.module.scss';

const SettingsStack = ({ scrollToElementRef, onChangeEvent, isEmail }: any) => {
  const value = isEmail ? 'email' : 'link';
  const [isDisabled, setIsDisabled] = useState(false);
  const handleDisabled = () => {
    setIsDisabled(isDisabled => !isDisabled);
  };
  return (
    <Stack
      ref={scrollToElementRef}
      sx={{
        width: '100%',
        height: '60%',
        marginLeft: '0%',
        marginRight: '0%',

        '& .css-ahj2mt-MuiTypography-root': {
          fontSize: '1.6vh',
          fontFamily: styles.fontFamily
        }
      }}
    >
      <RadioGroup
        aria-labelledby='demo-controlled-radio-buttons-group'
        name='controlled-radio-buttons-group'
        value={value}
        sx={{
          height: '30%',
          border: '1.5px solid rgba(20, 42, 59, 0.23)',
          borderRadius: '10px',
          marginBottom: '10px',
          backgroundColor: 'rgba(20, 42, 59, 0.04)',
          display: 'flex',
          justifyContent: 'center',
          paddingLeft: '2.3vh',
          boxSizing: 'border-box',
          '& .css-10ofsv1-MuiSvgIcon-root': {
            backgroundColor: 'white',
            borderRadius: '50%'
          },
          '& .css-n5p0mp-MuiSvgIcon-root': {
            backgroundColor: 'white',
            borderRadius: '50%'
          },
          '& .css-ahj2mt-MuiTypography-root': {
            marginTop: '5px'
          },
          '& .css-1c0ykcx-MuiFormControlLabel-root': {
            width: '100%'
          },
          '& .css-r4i6z-MuiFormControlLabel-root': {
            height: '40%'
          }
        }}
        onChange={onChangeEvent}
      >
        <FormControlLabel
          value='email'
          sx={{
            height: '25px',
            color: isEmail ? '#0097e8' : ''
          }}
          control={
            <Radio
              className='radioButtonEmail'
              size='small'
              sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: '#0097e8'
                }
              }}
            />
          }
          label='Send an e-mail interview'
        />
        <FormControlLabel
          label='Get the interview link'
          value='link'
          sx={{
            height: '25px',
            color: !isEmail ? '#0097e8' : ''
          }}
          control={
            <Radio
              size='small'
              sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: '#0097e8'
                },
                '& .css-n5p0mp-MuiSvgIcon-root': {}
              }}
            />
          }
        />
      </RadioGroup>
      <Box
        sx={{
          height: '20%',
          position: 'relative',
          border: '1.5px solid rgba(20, 42, 59, 0.23)',
          backgroundColor: 'rgba(20, 42, 59, 0.04)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '2.3vh',
          paddingRight: '2.3vh',
          justifyContent: 'space-between',
          marginBottom: '10px'
        }}
      >
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
              Select the validity duration of the interview.
            </Typography>
          }
        >
          <select
            disabled={isDisabled}
            style={{
              border: 'none',
              outline: 'none',
              fontSize: '1.6vh',
              backgroundColor: 'transparent',
              fontFamily: styles.fontFamily
            }}
          >
            <option value='1'>1 week</option>
            <option value='2'>2 weeks</option>
            <option value='3'>3 weeks</option>
          </select>
        </Tooltip>
        <CustomTooltip2 title={<Title2 onClickEvent={handleDisabled}></Title2>}>
          <LockIcon
            sx={{
              height: '50%',
              color: 'orange',
              borderRadius: '50%'
            }}
          ></LockIcon>
        </CustomTooltip2>
      </Box>
      <Box
        sx={{
          height: '20%',
          position: 'relative',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: ''
        }}
      >
        <InputofSettingsCard
          placeholder='Create a password'
          isDisabled={isDisabled}
        ></InputofSettingsCard>
        <CustomTooltip2 title={<Title2 onClickEvent={handleDisabled}></Title2>}>
          <LockIcon
            sx={{
              height: '50%',
              color: 'orange',
              borderRadius: '50%',
              position: 'absolute',
              right: '2.3vh'
            }}
          ></LockIcon>
        </CustomTooltip2>
      </Box>
    </Stack>
  );
};
export default SettingsStack;
