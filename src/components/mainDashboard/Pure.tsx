import { Box, Container,  Stack,} from '@mui/material'
import React from 'react'
import AppWidgetSummary from './appWidgetSummary'
import solarSvg from "../icons/solar_icon.svg"
import turbineSvg from "../icons/turbine_icon.svg"
import tidalSvg from "../icons/tidal_icon.svg"

import MultiAxesChart from './multiAxesChart'
import { PieGraphBox } from './styles'
import PieChartSection from './PieChartSection'
import MyChart from './AplineGraph'

function MainDashboard() {

    return (
        <Container sx={{ marginTop: '80px', marginLeft: '20px' }} maxWidth='xl'>
            
            <Stack spacing={2} direction={'column'} sx={{marginBottom:'20px'}} >
                <Stack flexWrap={'wrap'} direction={'row'} spacing={4}>
                    <Box sx={{ margin: '8px!important' }} display={'flex'}>
                        <AppWidgetSummary
                            title="Solar Energy"
                            consumption={'5000 kWh/day'}
                            generation={'4000 kWh/day'}

                            color="success"
                            icon={<img style={{ objectFit: 'contain' }} alt="icon" src={solarSvg} />}

                        />
                    </Box>

                    <Box sx={{ margin: '8px!important' }} display={'flex'}>
                        <AppWidgetSummary
                            title="Wind Energy"
                            consumption={'5000 kWh/day'}
                            generation={'4000 kWh/day'}
                            color="success"
                            icon={<img style={{ objectFit: 'contain' }} alt="icon" src={turbineSvg} />}

                        />
                    </Box>

                    <Box sx={{ margin: '8px!important' }} display={'flex'}>
                        <AppWidgetSummary
                            title="Tidal Energy"
                            consumption={'5000 kWh/day'}
                            generation={'4000 kWh/day'}
                            color="success"
                            icon={<img style={{ objectFit: 'contain' }} alt="icon" src={tidalSvg} />}

                        />
                    </Box>


                </Stack>
                <Stack  width={'100%'} direction={'column'} spacing={2}>

                    <PieGraphBox width={'100%'} height={'500px'} >
                        <MultiAxesChart />
                    </PieGraphBox>

                    <Stack display={'flex'} flexWrap={'wrap'} spacing={2} >
                 
                        <PieChartSection/>
                    </Stack>
                    <PieGraphBox width={'100%'} height={'500px'} >
                        <MyChart/>
                    </PieGraphBox>
                </Stack>
            </Stack>

        </Container>
    )
}

export default MainDashboard