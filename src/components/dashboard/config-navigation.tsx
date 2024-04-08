
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { SvgIcon } from '@mui/material';
import DashboardIcon from "../icons/dashboard.svg"
import ProfileIcon from "../icons/profile_icon.svg"
import AboutIcon from "../icons/about_icon.svg"

type NavItem = {
  title: string;
  path: string;
  icon: JSX.Element;
};

const navConfig: NavItem[] = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: <Box>
     <img src={DashboardIcon}/>
  </Box>
  },
  {
    title: 'user',
    path: '/user',
    icon: <Box>
    <img src={ProfileIcon}/>
  </Box>
  },
  {
    title: 'about',
    path: '/about',
    icon:<Box>
    <img src={AboutIcon}/>
  </Box>
  },
  
];

export default navConfig;
