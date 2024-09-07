import { SecurityScanResult } from "../../types/SecurityScanResult";
import { Paper, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function SecurityScanResultLabel(record: SecurityScanResult) {
    return (
        <Paper elevation={3}>
            <Box padding={2} sx={{backgroundColor: 'gray', margin: 2}}>
                <p>Status: {record.status}</p>
                <p>Repository Name: {record.repoName}</p>
                <p>Queued At: {record.queuedAt.toISOString()}</p>
                <p>Scam Findings Count: {record.findingCount}</p>
                <Button 
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/findings/${record._id}`}
                >View Findings</Button>
            </Box>
        </Paper>
    )
}

export default SecurityScanResultLabel;