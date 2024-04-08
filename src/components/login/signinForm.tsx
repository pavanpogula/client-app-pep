import React from 'react';
import * as Components from './styles';

import MailIcon from '@mui/icons-material/Mail';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { encrpt_password, validate_email, validate_password } from '../../utils/utils';
import InputFormControl from './inputFormControl';
import { useAppDispatch } from '../../features/app/hooks';
import { signinUser } from '../../features/user/userSlice';



 const SigninForm = (props: { signin: boolean }) => {
 
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [errors, setErrors] = React.useState({ "email": false, "password": false })




  const onBlurEmailHandler = () => {

    const isValidEmail = validate_email(email)
   
    setErrors({
      ...errors,
      email: !isValidEmail
    })
  }
  const onBlurPasswordHandler = () => {
    const isValidPassword = validate_password(password);
    setErrors({
      ...errors,
      password: !isValidPassword
    })
  }
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
      setErrors({
        ...errors,
        "email": false
      })
    }
    else if (name === 'password') {
      setPassword(value)
      setErrors({
        ...errors,
        "password": false
      })
    }
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ((email !== '' && !errors.email) && (password !== '' && !errors.password)) {
      const hashedPassword = encrpt_password(password);

   dispatch(signinUser({ "email": email,
      "password": hashedPassword}))
    } else {
      alert("cannot signin")
    }
  }



  return (
    <>
      <Components.SignInContainer signin={props.signin}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title sx={{m:1}}>Sign in</Components.Title>
          <InputFormControl
            errorText='enter valid mail address'
            inputHandler={inputHandler}
            isError={errors.email}
            label='Email'
            name='email'
            onBlurHandler={onBlurEmailHandler}
            value={email}
            key={2}
            endAdornment={<InputAdornment position="end">

              <MailIcon sx={{ mr: 1 }} />

            </InputAdornment>
            }

          />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" color={errors.password ? 'error' : 'primary'}>
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              onBlur={onBlurPasswordHandler}
              name='password'
              id="standard-adornment-password"
              value={password}
              onChange={inputHandler}
              type={showPassword ? 'text' : 'password'}
              color={errors.password ? 'error' : 'primary'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.password && <Typography sx={{ lineHeight: 1, textAlign: 'left', fontSize: '12px', color: 'red' }}>enter valid password</Typography>}

          </FormControl>
          {/* <Components.Anchor href='#'>Forgot your password?</Components.Anchor> */}
          <Components.Button type='submit'  >Sign In</Components.Button>
       
        </Components.Form>
      </Components.SignInContainer>
    </>
  )
}


export default SigninForm
