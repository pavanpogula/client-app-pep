

import Box from '@mui/material/Box';

import DashboardIcon from "../icons/dashboard.svg"
import ProfileIcon from "../icons/profile_icon.svg"
import AboutIcon from "../icons/about_icon.svg"
import { APP_URL } from '../../utils/constants';
const appendUrl = process.env['REACT_APP_URL']?process.env['REACT_APP_URL']:APP_URL
type NavItem = {
  title: string;
  path: string;
  icon: JSX.Element;
};

const navConfig: NavItem[] = [
  {
    title: 'dashboard',
    path: `${appendUrl}/dashboard`,
    icon: <Box>
     <img alt='' src={DashboardIcon}/>
  </Box>
  },
  {
    title: 'user',
    path: `${appendUrl}/user`,
    icon: <Box>
    <img alt='' src={ProfileIcon}/>
  </Box>
  },
  {
    title: 'about',
    path: `${appendUrl}/about`,
    icon:<Box>
    <img  alt='' src={AboutIcon}/>
  </Box>
  },
  
];

export default navConfig;
