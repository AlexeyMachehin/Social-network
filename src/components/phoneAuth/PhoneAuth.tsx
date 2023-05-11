/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from 'react';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { MuiTelInput } from 'mui-tel-input';
import { Button } from '@mui/material';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import OtpInput from 'react18-input-otp';
import classes from './phoneAuth.module.css';
import { setIsLoaderOff, setIsLoaderOn } from '@/store/slices/loaderSlice';

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}
export default function PhoneAuth() {
  const [phone, setPhone] = useState('');
  const [isOTPShow, setIsOTPShow] = useState(false);
  const [opt, setOtp] = useState('');
  const auth = getAuth();
  const dispatch = useAppDispatch();

  const handleChange = (newPhone: any) => {
    setPhone(newPhone);
  };

  function onSignup() {
    dispatch(setIsLoaderOn())
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = '+' + phone;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        dispatch(setIsLoaderOff())
        setIsOTPShow(true);
        // success
      })
      .catch(error => {
        console.log(error);
        dispatch(setIsLoaderOff())
      });
  }

  function onCaptchVerify() {
    
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: () => {
            onSignup();
          },
          'expired-callback': () => {},
        },
        auth,
      );
    }
  }

  function onOTPVerify() {
    dispatch(setIsLoaderOn())
    window.confirmationResult
      .confirm(opt)
      .then(async (res: any) => {
        console.log(res);
        dispatch(setIsLoaderOff())
      })
      .catch((err: any) => {
        console.log(err);
        dispatch(setIsLoaderOff())
      });
  }

  return (
    <div>
      <div id="recaptcha-container"></div>
      {isOTPShow ? (
        <div className={classes.wrapper}>
          <OtpInput
            value={opt}
            onChange={setOtp}
            className="opt-container"
            numInputs={6}
            isInputNum
            separator="-"
            inputStyle={classes.otpInput}
          />
          <Button variant="contained" onClick={onOTPVerify}>
            Verify
          </Button>
        </div>
      ) : (
        <div className={classes.wrapper}>
          <MuiTelInput
            focusOnSelectCountry
            defaultCountry="RU"
            value={phone}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={onSignup}>
            Send code
          </Button>
        </div>
      )}
    </div>
  );
}
// reTHys5luTQttpiStEr3yTsWLl33
