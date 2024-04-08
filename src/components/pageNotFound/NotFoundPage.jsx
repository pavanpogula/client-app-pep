import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';



import ImageData from '../icons/illustration_404.svg';
import { RouterLink } from '../routes';
import { APP_URL } from '../../utils/constants';

// ----------------------------------------------------------------------

export default function NotFoundView() {
 
const appendUrl =   process.env['REACT_APP_URL']?  process.env['REACT_APP_URL']:APP_URL
  return (
    <>
 

      <Container>
        <Box
          sx={{
            py: 12,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            minHeight: '80vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
            sure to check your spelling.
          </Typography>

          <Box
            component="img"
            src={ImageData}
            sx={{
              mx: 'auto',
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />

          <Button href={appendUrl+"/"} size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </Box>
      </Container>
    </>
  );
}
