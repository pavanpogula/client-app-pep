import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'


import { AboutTypo, PieGraphBox } from '../mainDashboard/styles'


function MainDashboard() {

    return (
        <Container sx={{ marginTop: '80px', marginLeft: '20px', marginBottom: '20px'  }} maxWidth='xl'>

            <Stack spacing={2} direction={'column'} sx={{ marginBottom: '20px' }} >



                <PieGraphBox width={'100%'} height={'100%'} pr={1}>
                    <Stack sx={{ width: '100%' }} ml={2} >
                        <Typography sx={{ textDecoration: 'underline', fontWeight: 600 }} variant='h4'>Who Are We</Typography>
                    </Stack>
                    <Stack>
                        <ul>
                            <li>
                            <AboutTypo>
                                    Corporate buyers of power are increasingly committing to using zero emissions electricity, measured on an hourly basis, to power their operations. Both Google and Microsoft have committed to achieve this by 2030. The US Federal Government has committed to 50% of power purchases being zero emission by 2030. Hourly, zero emission is rapidly becoming a new corporate  ‘gold standard’

                                    </AboutTypo>
                            </li>
                            <li>
                            <AboutTypo>

                                    New green industries - from green hydrogen to green polysilicate - require auditable 24/7 input green power as a pre-requisite to the business model.

                                    </AboutTypo>
                            </li>
                            <li>
                            <AboutTypo>
                                    Collectively, this indicates a large and growing demand for 24/7, zero emissions electricity. Digital solutions are needed to enable auditable hourly tracing of a companyʼs renewable power purchases and resulting carbon reductions.

                                    </AboutTypo>
                            </li>
                        </ul>
                    </Stack>
                </PieGraphBox>
                <PieGraphBox width={'100%'} height={'100%'} pr={1}>
                    <Stack sx={{ width: '100%' }} ml={2} >
                        <Typography sx={{ textDecoration: 'underline', fontWeight: 600 }} variant='h4'>About Quinbrook</Typography>
                    </Stack>
                    <Stack>
                        <ul>
                            <li>
                                <AboutTypo>
                                Quinbrook Infrastructure Partners is a specialist investment manager focused exclusively on lower carbon and renewable energy infrastructure investment and operational asset management in the U.S., U.K. and Australia. 
                                </AboutTypo>
                            </li>
                            <li>
                            <AboutTypo>

                                Quinbrook is led and managed by a senior team of power industry professionals who have collectively invested over US 8 billion of equity in energy infrastructure assets since the early 1990s, representing a total enterprise value of US 28.7 billion or 19.5 GW of power supply capacity. Quinbrookʼs investment and asset management team has offices in Houston, London, Jersey, and the Gold Coast of Australia. 
                                </AboutTypo>
                            </li>
                            <li>
                            <AboutTypo>
                                Quinbrookʼs global investment and portfolio company teams are actively developing and constructing a portfolio exceeding 8GW of onshore wind, solar PV , reserve peaking power, battery storage projects, grid support infrastructure, Virtual Power Plants and Community Energy Networks across the U.S., U.K. and Australia. 
                                </AboutTypo>
                            </li>
                        </ul>
                    </Stack>
                </PieGraphBox>
                <PieGraphBox width={'100%'} height={'100%'} pr={1}>
                    <Stack sx={{ width: '100%' }} ml={2} >
                        <Typography sx={{ textDecoration: 'underline', fontWeight: 600 }} variant='h4'>What problem are we solving?</Typography>
                    </Stack>
                    <Stack>
                        <ul>
                            <li>
                                <AboutTypo style={{fontWeight:600}}>
                                Provenance of every kWh of consumption on an hourly basis</AboutTypo>
                            </li>
                            <li>
                            <AboutTypo>

                            Major energy users are increasingly committing to decarbonization goals that include commitments at an hourly level. They need green energy on a 24/7 basis, every hour, everywhere.    </AboutTypo>
                            </li>
                            <li>
                            <AboutTypo>
                            The industry needed a tool to demonstrate<b> 24/7 green power supply</b> to a site, at the <b>hourly or sub-hourly level,</b> sourced from specific green projects with full auditability. 

That is why we have developed Quintrace.  </AboutTypo>
                            </li>
                        </ul>
                    </Stack>
                </PieGraphBox>
            </Stack>

        </Container>
    )
}

export default MainDashboard