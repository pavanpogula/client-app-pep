import  { useState } from "react";

import { SignupForm } from "./signupForm";
import  SigninForm  from "./signinForm";
import TypingText from "./TypingText";
import { Box, Skeleton, Stack } from "@mui/material";
import {  useAppSelector } from "../../features/app/hooks";
import { Container, GhostButton, LeftOverlayPanel, Overlay, OverlayContainer, RightOverlayPanel } from "./styles";
import LandingHeader from "./header";
import BgImage from '../icons/bgImageWebiste.jpeg'
function Pure() {
    const [signin, setSignIn] = useState<boolean>(true);

    const handleToggle = (isSignIn: boolean) => {
        setSignIn(isSignIn);
    };
    const {loading} = useAppSelector(state=>state.user.loggedStatus)
    
   

    return (
        !loading?
        <>
     
        <LandingHeader />
        <Container>
              <SigninForm signin={signin}/>
<SignupForm signin={signin}/>
         

            <OverlayContainer signin={signin}>
                <Overlay signin={signin}>
                    <LeftOverlayPanel >
                      { !signin &&<><TypingText signin={!signin}/>
                    
                        <Box sx={{mt:10}}>
                        <GhostButton signin={!signin} onClick={() => handleToggle(true)}>
                            Sign In
                        </GhostButton>
                        </Box>
                        </>
                        }
                    </LeftOverlayPanel>

                    <RightOverlayPanel >
                {  signin&&<><TypingText signin={!signin}/>
                     
                        <Box sx={{mt:15}}>
                        <GhostButton signin={!signin} onClick={() => handleToggle(false)}>
                            Sign Up
                        </GhostButton>
                        </Box></>}
                    </RightOverlayPanel>
                </Overlay>
            </OverlayContainer>
        </Container>

        </>
        :
        (<Stack direction={'column'} display={'flex'}flexWrap={'wrap'} spacing={4}>
        <Box> <Skeleton animation="wave" height={150} style={{ width:'99%',marginTop:0,marginLeft: 'auto', marginRight: 'auto' }} ></Skeleton></Box>
        <Stack display={'flex'} flexDirection={'row'} spacing={3} flexWrap={'wrap'}>
      
        <Skeleton animation="wave" height={1000} style={{ width:'10%',marginTop:0,marginLeft:'20px',bottom:'250px' }} ></Skeleton>
       
        <Skeleton animation="wave" height={1000} style={{ width:'80%',marginTop:0,marginLeft:'40px',bottom:'250px' }} ></Skeleton>
        </Stack>
        </Stack>)
    );
}

export default Pure;
