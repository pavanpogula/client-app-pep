import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import imageData from "../../icons/quintrace.jpg"
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from '../../routes/index';

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
 



  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 20,
        height: 50,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
       <img alt='' style={{objectFit:'contain'}} src={imageData}></img>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'flex' }}>
    {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
