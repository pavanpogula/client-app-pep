import { useState } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { logoutUser } from '../../features/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import avtarIcon from "../icons/avatar.jpg"

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    link:'/dashboard'
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    link:'/user'
  },
  
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const appendUrl = process.env['REACT_APP_URL']
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const {firstname, lastname, email } = useAppSelector(state=>state.user.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = ()=>{
    dispatch(logoutUser())
    window.location.reload();
    navigate(appendUrl+'/login')
    
  }

  const menuHandler = (data:string)=>{
   
    navigate(appendUrl+data)
    handleClose()
  }
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={avtarIcon}
          alt={'profile avtar'}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {`${firstname} ${lastname} `}
        </Avatar>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
          {`${firstname.charAt(0).toUpperCase()+firstname.slice(1)}`}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={()=>menuHandler(option.link)}>
            {option.label}
            
          </MenuItem>
        ))}

        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={handleLogout}
          sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
        >
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}