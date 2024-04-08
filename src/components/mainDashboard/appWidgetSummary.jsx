import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';



// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title,consumption,generation,  icon, color = 'primary',  ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        color: '#212B36',
        WebkitTransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      
     
        overflow: 'hidden',
        boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgb(145 158 171 / 32%)',

        position: 'relative',
        zIndex: 0,
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingTop: '40px',
        paddingBottom: '40px',
        borderRadius: '16px',
        height:'10vh',
        minWidth:'20vw'
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 64, height: 64 ,display:'flex'}}>{icon}</Box>}

      <Stack spacing={0.5} sx={{display:'flex',marginLeft:'10px!important'}}>
        <Typography sx={{width:'120px',fontWeight:'600'}} variant="span">{title}</Typography>
<Box sx={{width:'220px'}}>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' , fontWeight:'600'}}>
          {`Consumption : ${consumption}`}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' ,fontWeight:'600'}}>
          {`Generation : ${generation}`}
        </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
consumption:  PropTypes.string,
generation: PropTypes.string,
  title: PropTypes.string,

};
