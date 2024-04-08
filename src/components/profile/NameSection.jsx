
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector } from '../../features/app/hooks';


export default function NameSection() {

    const{firstname,lastname, email,  } = useAppSelector(state=>state.user.user)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
       
        <TableBody>
          
            <TableRow
              key={1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {'Name'}
              </TableCell>
              <TableCell align="left">{firstname.charAt(0).toUpperCase()+firstname.slice(1)+'  '+ lastname.charAt(0).toUpperCase()+lastname.slice(1)}</TableCell>
              
            </TableRow>
            <TableRow
              key={2}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {'Email'}
              </TableCell>
              <TableCell align="left">{email}</TableCell>
              
            </TableRow>
            <TableRow
              key={2}
              sx={{ border: 0 } }
            >
              <TableCell component="th" scope="row">
                {'Mobile'}
              </TableCell>
              <TableCell align="left">{'+1 (999) - 999 - 9999'}</TableCell>
              
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}