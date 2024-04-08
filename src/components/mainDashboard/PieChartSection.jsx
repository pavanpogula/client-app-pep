import React, { useEffect } from 'react'
import { PieGraphBox } from './styles'
import { Box, Stack, Typography } from '@mui/material'
import BasicDatePicker from './BasicDatePicker'
import PieChart from './pieChart'
import BasicSelect from './BasicSelect'
import { useAppDispatch, useAppSelector } from '../../features/app/hooks'
import { fetchdashboardPieDataArray } from '../../features/dashboard/dashboardSlice'

const PieChartSection = () => {

    const [date,setDate]= React.useState(2024)
    const [state,setState] = React.useState('KS')
    const [carbon,setCarbon] = React.useState([])
    const [consumed,setConsumed] = React.useState([])
    const [produced,setProduced] = React.useState([])
    const dispatch = useAppDispatch()
    const { data } = useAppSelector(state => state.dashboard.pieData);
    
    useEffect(()=>{
            dispatch(fetchdashboardPieDataArray({state:state,year:date}))
    },[date,state])

    const setStateHandler = React.useCallback((value) =>{
        setState(value)
    },[state])

    const setDateHanlder = React.useCallback((value) =>{
        setDate(value)
    },[date])


    useEffect(()=>{
        setCarbon( data['carbon_generation'].map(obj => { return { name: obj.name, y: parseFloat(obj.y) }; }));
        setConsumed(data['energy_consumption'].map(obj => { return { name: obj.name, y: parseFloat(obj.y) }; }))
        setProduced(data['energy_production'].map(obj => { return { name: obj.name, y: parseFloat(obj.y) }; }))
        
    },[data])

    return (
        <>
            <PieGraphBox p={1}>

                <Typography sx={{m:1,fontWeight:'600',fontSize:'20px',textAlign:'center'}}> Energy Analysis in different sectors in U.S</Typography>
                <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} spacing={4}> 
               
                <BasicSelect setStateHandler={setStateHandler} />

                <BasicDatePicker setDateHanlder={setDateHanlder}  />
                
                </Box>


                <Stack display={'flex'} flexWrap={'wrap'} direction={'row'} spacing={2}>

                    <PieGraphBox width={'30%'}
                        height={'300px'}
                        minHeight={'300px'}>
                        <PieChart isLoading={consumed==[]} title={'Energy Consumption'} data={consumed} />
                    </PieGraphBox>
                    <PieGraphBox width={'30%'}
                        height={'300px'}
                        minHeight={'300px'}>
                        <PieChart isLoading={produced==[]} title={'Energy Generated'} data={produced}  />
                    </PieGraphBox>
                    <PieGraphBox width={'30%'}
                        height={'300px'}
                        minHeight={'300px'}>
                        <PieChart isLoading={carbon==[]} title={'Carbon Emmission'}  data={carbon}  />
                    </PieGraphBox>
                </Stack>
            </PieGraphBox>
        </>
    )
}

export default PieChartSection