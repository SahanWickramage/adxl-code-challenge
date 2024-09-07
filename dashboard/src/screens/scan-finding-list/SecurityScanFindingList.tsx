import { Paper, Box, Typography} from '@mui/material';
import { useParams } from 'react-router-dom';
import NavBar from '../../navigation/NavBar';
import SecurityScanFindingLabel from "./SecurityScanFindingLabel";
import { SecurityScanFinding } from '../../types/SecurityScanFinding';

type RouteParams = {
    resultId: string;
};

const securityScanFinding: SecurityScanFinding[] = [
    {type: 'security vulnerability', ruleId: 'SV-23', path: './src/Form.tsx', description: 'this is a security vulnerability'}
];

function SecurityScanFindingList() {
    const { resultId } = useParams<RouteParams>();

    return (
        <>
        <NavBar />
        <Paper>
            <Typography variant="h4"><b>Security Scan Findings List for ResultId: {resultId}</b></Typography>
            <Box>
            {securityScanFinding.map((result, index) => (
                <SecurityScanFindingLabel
                    key={`scan-finding-${index}`}
                    type={result.type}
                    ruleId={result.ruleId}
                    path={result.path}
                    description={result.description}
                />
            ))}
            </Box>
        </Paper>
        </>        
    )
}

export default SecurityScanFindingList;