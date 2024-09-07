import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from '../navigation/NavBar';

function Home() {
    return (
        <>
        <NavBar />
        <Paper>
            <Typography variant="h4">
                <b>Welcome to Security Scan Results App!</b>
            </Typography>
            <Box>
                <Typography variant="body1">Feel free to go ahead with these actions.</Typography> 
                <Button variant='contained' component={Link} to="/submissions">
                    Let's Submit a Result
                </Button>
                <Button variant='contained' component={Link} to="/results">
                    Let's list Results
                </Button>
            </Box>
        </Paper>
        </>
    )
}

export default Home;