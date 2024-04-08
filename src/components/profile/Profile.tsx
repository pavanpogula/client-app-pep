import { Container, Stack, Typography } from '@mui/material'



import { PieGraphBox } from '../mainDashboard/styles'
import SizeAvatars from './ProfileImage'

import NameSection from './NameSection'


function Profile() {
    return (
        <Container sx={{ marginTop: '80px', marginLeft: '20px', marginBottom: '20px'  }} maxWidth='xl'>

            <Stack spacing={2} direction={'column'} sx={{ marginBottom: '20px' }} >



                <PieGraphBox width={'100%'} height={'400px'}  flexWrap={'wrap'} display={'flex'} flexDirection={'column'} ml={3}>
                    <Stack display={'flex'} flexDirection={'row'}>
                    <Stack p={3} width={'200px'} height='100px' ><SizeAvatars/></Stack>
                    <Stack p={3} width={'600px'} height='100px' >
                    <Typography fontFamily={'sans-serif'} fontWeight={600} fontSize={'20px'}>
                    Life Motto
                    </Typography>
                    <br/>
                    <Typography>
"Carpe Diem" – Seize the day! I believe in making the most of every opportunity and embracing challenges with courage and optimism.


                        </Typography>

                    </Stack >
                    </Stack>
                    <Stack display={'flex'} flex={'row'} mx={'auto'} width={'300px'} height='200px'>
                    <NameSection/>
                    </Stack>
                </PieGraphBox>
              
            </Stack>

        </Container>
    )
}

export default Profile