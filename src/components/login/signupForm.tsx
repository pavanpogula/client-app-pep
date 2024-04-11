import React, { useEffect } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { Box, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { encrpt_password, validate_email, validate_name, validate_password } from '../../utils/utils';
import * as Components from './styles';
import InputFormControl from './inputFormControl';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { checkUserExists,  setSignupStatus,  signupUser } from '../../features/user/userSlice';
import { signup, userExist } from '../../features/types/userTypes';



interface ErrorsState {
  email: boolean;
  confirmEmail: boolean;
  password: boolean;
  firstname: boolean;
  lastname: boolean;
  confirmPassword: boolean;
}

export const SignupForm = (props: { signin: boolean }) => {

  const dispatch = useAppDispatch();
  const userExistDB:userExist = useAppSelector(state=>state.user.userExist)
  const signupCode:signup = useAppSelector(state=>state.user.signup)



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


  useEffect(()=>{
    if(signupCode.message==='409'){
      alert("Email already has an account ")
    }else if(signupCode.message==='201'){
      alert("Registered Succesfully")
      dispatch(setSignupStatus())
      window.location.reload()
    }else if(signupCode.message==='500'){
      alert("Server Error , Please Try Again")
    }
  },[signupCode.message])



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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  await dispatch(checkUserExists({email}))
    const err:ErrorsState ={...errors}

    if(!validate_name(firstname))
      err.firstname=true
    if(!validate_name(lastname))
      err.lastname=true
    if(!validate_email(email))
      {err.email=true 
       if( userExistDB['message']==='409')
        err.email=true
      }
    if( !validate_email(confirmEmail)  || email!==confirmEmail )
      err.confirmEmail=true
    if(!validate_password(password))
      err.password=true
    if( !validate_password(confirmPassword)  || password!==confirmPassword )
      err.confirmPassword=true
      
      const hasErrors = (err: ErrorsState): boolean => {
        return Object.values(err).some(error => error === true);
      };


      if(hasErrors(err) || userExistDB['message']==='409'){
        setErrors({...err})
        alert(`Cannot SignUp ${userExistDB['message']==='409'? 'Email Already Exists':''}`)
      }else{
       const hashedPassword = encrpt_password(password)
          dispatch(signupUser({"password":hashedPassword,email,firstname,lastname}))
      }
      
    }





    
  
  return (
    <>
      <Components.SignUpContainer signin={props.signin}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Start Your Journey!</Components.Title>
          <Box>


            <InputFormControl
              errorText='enter valid first name'
              inputHandler={inputHandler}
              isError={errors.firstname}
              label='First Name'
              name='firstname'
              
              value={firstname}
              key={1}

            />
            <InputFormControl
              errorText='enter valid last name'
              inputHandler={inputHandler}
              isError={errors.lastname}
              label='Last Name'
              name='lastname'
              
              value={lastname}
              key={2}

            />

          </Box>
          <Box>
            <InputFormControl
              errorText={userExistDB['message']==='409'?'mail address exits': 'enter valid mail address'}
              inputHandler={inputHandler}
              isError={errors.email}
              label='Email'
              name='email'
              
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
              key={1}

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
              key={2}
        
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
          <Components.Button sx={{mt:2}}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
    </>
  )
}
