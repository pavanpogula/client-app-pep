import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AppBar, Typography } from '@mui/material';
export const Container = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  position: 'relative',
  overflow: 'hidden',
  width: '80vw',
  maxWidth: '80vw',
  minWidth:'800px',
  height:'400px',
  minHeight: '400px',
  margin:'auto',
  marginTop:'20vh'
});

export const SignUpContainer = styled(Box)(({ signin }: { signin: boolean }) => ({
  position: 'absolute',
  top: 0,
  height: '100%',
  transition: 'all 0.6s ease-in-out',
  left: 0,
  width: '50%',
  opacity: 0,
  zIndex: 1,
  ...(signin !== true && {
    transform: 'translateX(68%)',
    opacity: 1,
    zIndex: 5,
    width:'60%',
  }),
}));

export const SignInContainer = styled(Box)(({ signin }: { signin: boolean }) => ({
  position: 'absolute',
  top: 0,
  height: '100%',
  transition: 'all 0.6s ease-in-out',
  left: 0,
  width: '50%',
  zIndex: 2,
  ...(signin !== true && {
    transform: 'translateX(68%)',
    width:'60%',
  }),
}));

export const Form = styled('form')({
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '0 50px',
  height: '100%',
  textAlign: 'center',
});

export const Title = styled('h1')({
  fontWeight: 'bold',
  margin: 0,
});

export const Input = styled(TextField)({

  border: 'none',
 
  margin: '8px 0',
  width: '100%',
});

export const Button = styled('button')({
  borderRadius: '20px',
  border: '1px solid #ff4b2b',
  backgroundColor: '#ff4b2b',
  color: '#ffffff',
  fontSize: '12px',
  fontWeight: 'bold',
  padding: '12px 45px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  transition: 'transform 80ms ease-in',
  '&:active': {
    transform: 'scale(0.95)',
  },
  '&:focus': {
    outline: 'none',
  },
});

export const GhostButton = styled(Button)(({ signin }: { signin: boolean }) => ({
  backgroundColor: 'transparent',
  borderColor: '#ffffff',
  cursor:'pointer',
  transform: signin?'translateX(40%)':'translateX(40%)'
}));

export const Anchor = styled('a')({
  color: '#333',
  fontSize: '14px',
  textDecoration: 'none',
  margin: '15px 0',
});

export const OverlayContainer = styled('div')(({ signin }: { signin: boolean }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  width: '50%',
  height: '100%',
  overflow: 'hidden',
  transition: 'transform 0.6s ease-in-out',
  zIndex: 100,
  ...(signin !== true && {
    transform: 'translateX(-100%)',
    left: '40%',
    width: '40%',
  }),
}));

export const Overlay = styled('div')(({ signin }: { signin: boolean }) => ({
  background: 'linear-gradient(to right, #00228a9e, #41bcffc4)',
  color: '#ffffff',
  position: 'relative',
  left: '-100%',
  height: '100%',
  width: '200%',
  transform: 'translateX(0)',
  transition: 'transform 0.6s ease-in-out',
  ...(signin !== true && {
    transform: 'translateX(50%)',
  }),
}));

export const OverlayPanel = styled('div')({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '0 40px',
  textAlign: 'center',
  top: 0,
  height: '100%',
  width: '50%',
  transform: 'translateX(0)',
  transition: 'transform 0.6s ease-in-out',
});

export const LeftOverlayPanel = styled(OverlayPanel)({
  transform: 'translateX(-20%)',
});

export const RightOverlayPanel = styled(OverlayPanel)({
  right: 0,
  transform: 'translateX(0)',
});

export const Paragraph = styled('p')({
  fontSize: '12px',
  fontWeight: 100,
  lineHeight: '20px',
  letterSpacing: '0.5px',
  margin: '20px 0 30px',
});



export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  // backgroundColor: '#00000063',
  backgroundColor: 'white',
  border: '4px solid black',
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  position: "relative",
}));



export const HeaderTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  color: 'black',
  fontWeight: 600,
}));