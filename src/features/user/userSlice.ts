
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { UserInitialState, User, signup, userExist } from '../types/userTypes'
import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASE_URL
const config = {
 
  withCredentials:true
}

//initial state of the user
const initialState: UserInitialState = {
  loggedStatus:{
     uid:'xe40x',
    loading:false
  },
  loading: false,
  user: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      counntry: ''
    }
  },
  signup:{
    "message":''
  },
  userExist:{
    "message":'200'
  },
  error: ''
}





// Generates pending, fulfilled and rejected action types
export const signinUser = createAsyncThunk('user/login', async ({email,password}:{email:string,password:string}) => {
  return axios
    .post(BASE_URL+'/user/login',{email,password},config)
    .then(response => response.data)
})

export const signupUser = createAsyncThunk('user/signup', async ({email,password,firstname,lastname}:{email:string,password:string,firstname:string,lastname:string}) => {
  return axios
    .post(BASE_URL+'/signup',{email,password,firstname,lastname},config)
    .then(response => response.data)
})

export const checkUserExists = createAsyncThunk('user/checkUser', async ({email}:{email:string}) => {
  return axios
    .get(BASE_URL+'/checkUser',{
      params:{
        email
      }
    })
    .then(response => response.data)
})

export const getAuth = createAsyncThunk('user/auth', async () => {
  return axios
    .post(BASE_URL+'/auth',{},config)
    .then(response => response.data['id'])
})



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signinUser.pending, state => {
      state.loading = true
      state.loggedStatus.loading=true
    })
    builder.addCase(
      signinUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false
        state.user = action.payload
        state.loggedStatus={uid:action.payload.id,loading:false}
        state.error = ''
      }
    )
    builder.addCase(signinUser.rejected, (state, action) => {{
      state.loading = false
      state.user = initialState.user
      state.loggedStatus={uid:null,loading:false}
      state.error = action.error.message || 'Something went wrong'
    }})
    builder.addCase(signupUser.pending, state => {
      state.loading = true
    })
    builder.addCase(
      signupUser.fulfilled,
      (state, action: PayloadAction<signup>) => {
        state.loading = false
        state.signup = action.payload
        state.error = ''
      }
    )
    builder.addCase(signupUser.rejected, (state, action) => {{
      state.loading = false
      state.signup = initialState.signup
      state.error = action.error.message || 'Something went wrong'
    }})
    builder.addCase(checkUserExists.pending, state => {
      state.loading = true
    })
    builder.addCase(
      checkUserExists.fulfilled,
      (state, action: PayloadAction<userExist>) => {
        state.loading = false
        state.userExist = action.payload
        state.error = ''
      }
    )
    builder.addCase(checkUserExists.rejected, (state, action) => {{
      state.loading = false
      state.userExist = initialState.userExist
      state.error = action.error.message || 'Something went wrong'
    }})
    builder.addCase(getAuth.pending, state => {
      state.loading = true
      state.loggedStatus.loading=true
    })
    builder.addCase(
      getAuth.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.loading = false
        state.loggedStatus={uid:action.payload,loading:false}
        state.error = ''
      }
    )
    builder.addCase(getAuth.rejected, (state, action) => {{
      state.loading = false
      state.loggedStatus={uid:null,loading:false}
      state.error = action.error.message || 'Something went wrong'
    }})
  }
})

export default userSlice.reducer