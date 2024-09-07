import { Paper, Box, Typography} from '@mui/material';
import SecurityScanResultLabel from "./SecurityScanResulLabel";
import { SecurityScanResult } from "../../types/SecurityScanResult";

const securityScanResult: SecurityScanResult[] = [
    { _id: "12345", status: "Completed", repoName: "user-service", queuedAt: new Date(), findingCount: 3 },
    { _id: "67890", status: "In-progress", repoName: "file-service", queuedAt: new Date(1970), findingCount: 5 }
]

function SecurityScanResultList() {
    return (
        <Paper>
            <Typography variant="h4"><b>Security Scan Result List</b></Typography>
            <Box>
                {securityScanResult.map((result, index) => (
                    <SecurityScanResultLabel
                        key={`scan-result-${index}`}
                        _id={result._id}
                        status={result.status}
                        repoName={result.repoName}
                        queuedAt={result.queuedAt}
                        findingCount={result.findingCount}
                    />
                ))}
            </Box>
        </Paper>
    )
}

export default SecurityScanResultList;