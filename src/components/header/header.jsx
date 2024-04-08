import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from '../customHooks/useScreenChange';

import { bgBlur } from '../../theme/css';

import AccountPopover from './accountPopover';
import { HEADER, NAV } from '../dashboard/common/layout';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const renderContent = (
    <>
      {!lgUp && (
          <IconButton
          
          aria-label="open drawer"
          onClick={()=>onOpenNav()}
          edge="start"
          sx={{
            color:'black',
            marginRight: 5,
           
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Box sx={{ flexGrow: 1 }} />
    
      <Stack direction="row" alignItems="center" spacing={1}>
      
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: 48, // Assuming HEADER.H_MOBILE is the same as 48
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`, // Assuming NAV.WIDTH is 240 and adding 1px for the border
          height: HEADER.H_DESKTOP, // Assuming HEADER.H_DESKTOP is the same as 64
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
     <Typography sx={{fontSize:'1.5rem',lineHeight:'1.332',marginLeft:'40px',fontWeight:'600',fontFamily:'sans-serif',color:'black'}}>{`Hey there, Pavan! Welcome back!`}</Typography>
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
