import { Box, Typography } from '@mui/material';
import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypingTextProps { signin: boolean } // Define props for clarity, even if empty

const TypingText: React.FC<TypingTextProps> = ({ signin }) => {
    const handleInit = (typewriter: any) => {
        typewriter

            .typeString(`<div  class='type-writer-string' style="color:black; font-size:12px; height:28px;"  data-testid="type-writer-component"><span>Enables Digital Tracing and Auditing of Renewable Power Supply and Carbon Intensity</span></div>`)

            .start()

            ;
    };

    return <Box  sx={{
        transform: 'translateX(14%)', maxWidth: '40vw', height: '120px', '@media screen and (max-width: 1024px)': {
            transform: 'translateX(10%)'

        }, '.type-writer-string': {

            width: `${signin ? '384px' : '436px'}`,
            ...(signin && { marginLeft: '50px' }),
            '@media screen and (max-width: 1024px)': {

                width: `${signin ? '300px' : '400px'}`,
                ...(signin && { marginLeft: '50px' }),
            },
        },
    }}>

        <Box sx={{
            width: '484px', '@media screen and (max-width: 1024px)': {
                width: '400px',
                '& p': {
                    fontSize: '70px',
                },

            },
        }}><Typography sx={{ fontFamily: 'sans-serif', fontSize: '80px' }}><span style={{ color: '#434449' }}>quin</span><span style={{ color: '#0E5FA4' }}>trace</span></Typography> </Box>
        <Typewriter options={{ cursor: '' }} onInit={handleInit} />

    </Box>;
};

export default TypingText;
