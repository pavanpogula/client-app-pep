import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { Box, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { validate_email, validate_name, validate_password } from '../../utils/utils';
import * as Components from './styles';
import InputFormControl from './inputFormControl';

interface ErrorsState {
  email: boolean;
  confirmEmail: boolean;
  password: boolean;
  firstname: boolean;
  lastname: boolean;
  confirmPassword: boolean;
}

export const SignupForm = (props: { signin: boolean }) => {


  //email state
  const [email, setEmail] = React.useState<string>('');
  const [confirmEmail, setConfirmEmail] = React.useState<string>('');

  //name state
  const [firstname, setFirstname] = React.useState<string>('');
  const [lastname, setLastname] = React.useState<string>('');

  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');
  //show password state
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<ErrorsState>({
    "email": false,
    "confirmEmail": false,
    "password": false,
    "firstname": false,
    "lastname": false,
    "confirmPassword": false,

  })

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let isValid = false;
    switch (name) {
      case 'firstname':
      case 'lastname':
        isValid = validate_name(value);
        break;
      case 'email':
        isValid = validate_email(value);
        break;
      case 'confirmEmail':
        isValid = value === email;
        break;
      case 'password':
        isValid = validate_password(value);
        break;
      case 'confirmPassword':
        isValid = value === password
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: !isValid });
  };


  const onBlurPasswordHandler = () => {
    const isValidPassword = validate_password(password);
    setErrors({
      ...errors,
      password: !isValidPassword
    })
  }
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'confirmEmail':
        setConfirmEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value)
        break;
      case 'firstname':
        setFirstname(value);
        break;
      case 'lastname':
        setLastname(value);
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: false });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ((email !== '' && !errors.email) && (password !== '' && !errors.password)) {
      console.log('login')
    } else {
      alert("cannot signin")
    }
  }
  return (
    <>
      <Components.SignUpContainer signIn={props.signin}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Create Account</Components.Title>
          <Box>


            <InputFormControl
              errorText='enter valid first name'
              inputHandler={inputHandler}
              isError={errors.firstname}
              label='First Name'
              name='firstname'
              onBlurHandler={onBlurHandler}
              value={firstname}
              key={1}

            />
            <InputFormControl
              errorText='enter valid last name'
              inputHandler={inputHandler}
              isError={errors.lastname}
              label='Last Name'
              name='lastname'
              onBlurHandler={onBlurHandler}
              value={lastname}
              key={2}

            />

          </Box>
          <Box>
            <InputFormControl
              errorText='enter valid mail address'
              inputHandler={inputHandler}
              isError={errors.email}
              label='Email'
              name='email'
              onBlurHandler={onBlurHandler}
              value={email}
              key={2}
              endAdornment={<InputAdornment position="end">

                <MailIcon sx={{ mr: 1 }} />

              </InputAdornment>
              }

            />
            <InputFormControl
              label="Confirm Email"
              name="confirmEmail"
              value={confirmEmail}
              errorText="Emails do not match"
              isError={errors.confirmEmail}
              onBlurHandler={onBlurHandler}
              inputHandler={inputHandler}
              endAdornment={
                <InputAdornment position="end">
                  <MailIcon />
                </InputAdornment>
              }
            />
          </Box>
          <Box>



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
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" color={errors.confirmPassword ? 'error' : 'primary'}>
              <InputLabel htmlFor="standard-adornment-confirm-password">Confirm Password</InputLabel>
              <Input
                onBlur={onBlurHandler}
                name='confirmPassword'
                id="standard-adornment-confirm-password"
                value={confirmPassword}
                onChange={inputHandler}
                type={showPassword ? 'text' : 'password'}
                color={errors.confirmEmail ? 'error' : 'primary'}
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
              {errors.confirmPassword && <Typography sx={{ lineHeight: 1, textAlign: 'left', fontSize: '12px', color: 'red' }}>password must match</Typography>}

            </FormControl>
          </Box>
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
    </>
  )
}
