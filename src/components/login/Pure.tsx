import React, { useState } from "react";
import * as Components from './styles';
import { SignupForm } from "./signupForm";
import  SigninForm  from "./signinForm";
import TypingText from "./TypingText";
import { Box } from "@mui/material";
import {  useAppSelector } from "../../features/app/hooks";

function Pure() {
    const [signin, setSignIn] = useState<boolean>(true);

    const handleToggle = (isSignIn: boolean) => {
        setSignIn(isSignIn);
    };
    const {loading} = useAppSelector(state=>state.user.loggedStatus)
    
   

    return (
        !loading?
        <Components.Container>
              <SigninForm signin={signin}/>
<SignupForm signin={signin}/>
         

            <Components.OverlayContainer signin={signin}>
                <Components.Overlay signin={signin}>
                    <Components.LeftOverlayPanel >
                      { !signin &&<><TypingText signin={!signin}/>
                    
                        <Box sx={{mt:10}}>
                        <Components.GhostButton onClick={() => handleToggle(true)}>
                            Sign In
                        </Components.GhostButton>
                        </Box>
                        </>
                        }
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel >
                {  signin&&<><TypingText signin={!signin}/>
                     
                        <Box sx={{mt:10}}>
                        <Components.GhostButton onClick={() => handleToggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                        </Box></>}
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
        :<></>
    );
}

export default Pure;
