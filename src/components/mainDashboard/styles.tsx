import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const PieGraphBox = styled(Box)({
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    color: '#212B36',
    WebkitTransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',


    overflow: 'hidden',
    boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgb(145 158 171 / 32%)',

    position: 'relative',
    zIndex: 0,

    paddingTop: '40px',
    paddingBottom: '40px',
    borderRadius: '16px',
  
});
export const AboutTypo = styled(Typography)({
    fontFamily: 'sans-serif', fontSize: '16px', ml: '20px', mt: '10px' 
  
});