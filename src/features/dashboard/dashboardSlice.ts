
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'
import { DashboardStateType,  } from '../types/dashboardTypes'
import { BASE_URL as URL} from '../../utils/constants'
const BASE_URL = process.env['REACT_APP_BASE_URL']?process.env['REACT_APP_BASE_URL']:URL


//initial state of the user
const initialState: DashboardStateType = {
  
    pieData : {
        data:{"carbon_generation":[],"energy_production":[],"energy_consumption":[]},
        loading:false,
        error:''
    },
    barData:{
      data:{"energy_consumed":[],"energy_produced":[],"carbon_generated":[]},
      loading:false,
      error:''
  }

}






export const fetchdashboardPieDataArray = createAsyncThunk('charts/pieArray', async ({year,state}:{year:number,state:string}) => {
  return axios
    .get(BASE_URL+`/dashboard/pieData/${state}/${year}`, { withCredentials: true })
    .then(response => response.data)
})

export const fetchdashboardMultiAxisData = createAsyncThunk('charts/multiAxes', async ({year}:{year:number}) => {
 
  return axios
  .get(BASE_URL+`/dashboard/multiAxesData/${year}`, { withCredentials: true })
    .then(response => response.data)
})




const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchdashboardPieDataArray.pending, state => {
      state.pieData.loading = true
  
    })
    builder.addCase(
      fetchdashboardPieDataArray.fulfilled,
      (state, action: PayloadAction<{"carbon_generation":[],"energy_production":[],"energy_consumption":[]}>) => {
        state.pieData.loading = false
        state.pieData.data = {...action.payload}
        state.pieData.error = ''
      }
    )
    builder.addCase(fetchdashboardPieDataArray.rejected, (state, action) => {{
        state.pieData.loading = false
        state.pieData.data ={"carbon_generation":[],"energy_production":[],"energy_consumption":[]}
        state.pieData.error = action.error.message || 'Something went wrong'
    }})
    builder.addCase(fetchdashboardMultiAxisData.pending, state => {
      state.barData.loading = true
  
    })
    builder.addCase(
      fetchdashboardMultiAxisData.fulfilled,
      (state, action: PayloadAction<{"energy_consumed":[],"energy_produced":[],"carbon_generated":[]}>) => {
        state.barData.loading = false
        state.barData.data = {...action.payload}
        state.barData.error = ''
      }
    )
    builder.addCase(fetchdashboardMultiAxisData.rejected, (state, action) => {{
        state.barData.loading = false
        state.barData.data ={"energy_consumed":[],"energy_produced":[],"carbon_generated":[]}
        state.barData.error = action.error.code || 'Something went wrong'
        
    }})
    
  }
})

export default dashboardSlice.reducer