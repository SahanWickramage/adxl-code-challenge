import { SecurityScanFinding } from "../../types/SecurityScanFinding";
import { Paper, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function SecurityScanFindingLabel(record: SecurityScanFinding) {
    return (
        <Paper>
            <Box padding={2} sx={{backgroundColor: 'gray', margin: 2}}>
                <p>Type: {record.type}</p>
                <p>Rule Id: {record.ruleId}</p>
                <p>Path: {record.path}</p>
                <p>Description: {record.description}</p>
                <Button 
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/results"
                >Go Back To Results</Button>
            </Box>
        </Paper>
    )
}

export default SecurityScanFindingLabel;