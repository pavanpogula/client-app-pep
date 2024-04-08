
import { Box, Toolbar} from '@mui/material';


import { AppBarStyled, HeaderTitle } from './styles';




const LandingHeader = () =>
(
    <AppBarStyled>
        <Toolbar>
            
            <Box margin={'auto'}>
                <HeaderTitle align='center' variant="h4">
                <span style={{ color: '#434449' }}>Quin</span><span style={{ color: '#0E5FA4' }}>trace</span>
                </HeaderTitle>
            </Box>
        </Toolbar>
    </AppBarStyled>
);

export default LandingHeader;