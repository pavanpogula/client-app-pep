import React, { useState } from "react";
import * as Components from './styles';
import { SignupForm } from "./signupForm";
import { SigninForm } from "./signinForm";
import TypingText from "./TypingText";
import { Box } from "@mui/material";

function Pure() {
    const [signIn, setSignIn] = useState<boolean>(true);

    const handleToggle = (isSignIn: boolean) => {
        setSignIn(isSignIn);
    };

    return (
        <Components.Container>
              <SigninForm signin={signIn}/>
<SignupForm signin={signIn}/>
         

            <Components.OverlayContainer signIn={signIn}>
                <Components.Overlay signIn={signIn}>
                    <Components.LeftOverlayPanel >
                      { !signIn &&<><TypingText signin={!signIn}/>
                    
                        <Box sx={{mt:10}}>
                        <Components.GhostButton onClick={() => handleToggle(true)}>
                            Sign In
                        </Components.GhostButton>
                        </Box>
                        </>
                        }
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel >
                {  signIn&&<><TypingText signin={!signIn}/>
                     
                        <Box sx={{mt:10}}>
                        <Components.GhostButton onClick={() => handleToggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                        </Box></>}
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default Pure;
