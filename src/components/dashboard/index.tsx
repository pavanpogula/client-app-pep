import React, { useState, ReactNode } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Nav from './Navbar';

import Header from '../header/header';

interface DashboardLayoutProps {
  children?: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [openNav, setOpenNav] = useState(true);
const navHandler = ()=>{
    setOpenNav(!openNav)
}
  return (
    <>
      <Header onOpenNav={navHandler} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />
            {children}
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
