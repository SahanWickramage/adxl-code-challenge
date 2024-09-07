import { FormEvent, useState } from 'react';
import { Paper, Box, Button, TableContainer, TextField, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { SecurityScanResult } from '../../types/SecurityScanResult';
import { SecurityScanFinding } from '../../types/SecurityScanFinding';
import { parseDate, formatDate } from '../../util/DateUtil';
import { ScanResultSubmitRequest } from '../../types/ScanResultSubmitRequest';
import { submit } from '../../services/SecurityScanResultService';
import NavBar from '../../navigation/NavBar';

type FormData = {
  securityScanResult: SecurityScanResult;
  securityScanFindingList: SecurityScanFinding[];
  toBeAddedFinding: SecurityScanFinding;
};

const columnNames: string[] = ['Type', 'Rule ID', 'Path', 'Description'];

function SubmitScanResult() {
    const [formData, setFormData] = useState<FormData>({
        securityScanResult: {_id: '', status: '', repoName: '', queuedAt: new Date(1970), findingCount: 0},
        securityScanFindingList: [],
        toBeAddedFinding: {type: '', ruleId: '', path: '', description: ''}
    });
    
    
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const request: ScanResultSubmitRequest = {
            result: formData.securityScanResult,
            findings: formData.securityScanFindingList
        }
        console.log('submit request', request);

        submit(request);
    }

    const handleResultChange = (field: keyof SecurityScanResult) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleResultChange', field, event.target.value);
        setFormData({
            ...formData,
            securityScanResult: {
                ...formData.securityScanResult,
                [field]: field === 'queuedAt' ? parseDate(event.target.value,
                    formData.securityScanResult.queuedAt) : event.target.value
            }
        });
      };

      const handleFindingChange = (field: keyof SecurityScanFinding) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            toBeAddedFinding: {
                ...formData.toBeAddedFinding,
                [field]: event.target.value
            }
        });
      };

    function removeFinding(index: number): void {
        var updatedFindings = [...formData.securityScanFindingList];
        updatedFindings.splice(index, 1);

        const newFindingCount = formData.securityScanResult.findingCount - 1;

        setFormData({ ...formData,
            securityScanFindingList: updatedFindings, 
            securityScanResult: {
                ...formData.securityScanResult,
                findingCount: newFindingCount}
        });
    }

    function addFinding(): void {
        const toBeAddedFinding: SecurityScanFinding = {
            type: formData.toBeAddedFinding.type,
            ruleId: formData.toBeAddedFinding.ruleId,
            path: formData.toBeAddedFinding.path,
            description: formData.toBeAddedFinding.description,
        };

        const updatedSecurityFindings = [...formData.securityScanFindingList, toBeAddedFinding];
        const newFindingCount = formData.securityScanResult.findingCount + 1;
        setFormData({ ...formData,
            securityScanFindingList: updatedSecurityFindings,
            securityScanResult: {
                ...formData.securityScanResult,
                findingCount: newFindingCount},
            toBeAddedFinding: {type: '', ruleId: '', path: '', description: ''}
        });
    }

    return (
        <>
        <NavBar />
        <Paper>
            <Typography variant="h4"><b>Submit Security Scan Result</b></Typography>
            <Box component="form" onSubmit={handleSubmit}>

                <Box key="scan-result-box" display="flex" alignItems="center" marginY={1}>
                    <TextField name="scan-result-status"
                        label="Status"
                        value={formData.securityScanResult.status}
                        onChange={handleResultChange('status')}
                        margin="normal"
                    />
                    <TextField name="scan-result-repo-name"
                        label="Repositoty Name"
                        value={formData.securityScanResult.repoName}
                        onChange={handleResultChange('repoName')}
                        margin="normal"
                    />
                    <TextField name="scan-result-queued-at"
                        label="Queued At (yyyy-mm-dd)"
                        value={formatDate(formData.securityScanResult.queuedAt)}
                        onChange={handleResultChange('queuedAt')}
                        margin="normal"
                    />
                </Box>

                <Box key="scan-finding-box" display="flex" alignItems="center" marginY={1}>
                    <TextField name="scan-finding-type"
                        label="Type"
                        value={formData.toBeAddedFinding.type}
                        onChange={handleFindingChange('type')}
                        margin="normal"
                    />
                    <TextField name="scan-finding-rule-id"
                        label="Rule Id"
                        value={formData.toBeAddedFinding.ruleId}
                        onChange={handleFindingChange('ruleId')}
                        margin="normal"
                    />
                    <TextField name="scan-finding-path"
                        label="Path"
                        value={formData.toBeAddedFinding.path}
                        onChange={handleFindingChange('path')}
                        margin="normal"
                    />
                        <TextField name="scan-finding-description"
                        label="Status"
                        value={formData.toBeAddedFinding.description}
                        onChange={handleFindingChange('description')}
                        margin="normal"
                    />
                </Box>

                <Button variant="contained"
                    color="primary"
                    onClick={addFinding}
                >Add Finding
                </Button>

                <Box key="scan-finding-table" display="flex" alignItems="center" marginY={1}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Operation</TableCell>
                                    {columnNames.map(column => (
                                        <TableCell key={`scan-finding-table-header-${column}`}>{column}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {formData.securityScanFindingList.map((record, index) => (
                                    <TableRow key={`scan-finding-table-record-${index}`}>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="warning"
                                                size="small"
                                                onClick={() => removeFinding(index)}
                                            >
                                            Remove Finding
                                            </Button>
                                        </TableCell>
                                        <TableCell>{record.type}</TableCell>
                                        <TableCell>{record.ruleId}</TableCell>
                                        <TableCell>{record.path}</TableCell>
                                        <TableCell>{record.description}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Button type="submit"
                    variant="contained"
                    color="primary"
                >
                    Submit Security Scan Result
                </Button>
            </Box>
        </Paper>
        </>
    );
}

export default SubmitScanResult;