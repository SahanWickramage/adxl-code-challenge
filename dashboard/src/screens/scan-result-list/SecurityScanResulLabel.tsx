import { SecurityScanResult } from "../../types/SecurityScanResult";
import { Paper, Box, Button } from '@mui/material';

function SecurityScanResultLabel(record: SecurityScanResult) {
    function openSecurityScanFindings(_id: string | null): import("react").MouseEventHandler<HTMLButtonElement> | undefined {
        // throw new Error("Function not implemented.");
    }

    

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
                    onClick={openSecurityScanFindings(record._id)}
                >View Findings</Button>
            </Box>
        </Paper>
    )
}

export default SecurityScanResultLabel;