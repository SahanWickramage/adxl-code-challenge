import SecurityScanResultItem from "./SecurityScanResultItem";
import { SecurityScanResultRecord, SecurityScanFindingRecord } from "../../types/data";
import { useState } from "react";
import SecurityScanFindingList from "../scan-finding-list/SecurityScanFindingList";

const securityScanResults: SecurityScanResultRecord[] = [
    { status: "good", repoName: "repo1", queuedAt: new Date(2023, 4, 15, 10, 30, 0) },
    { status: "bad", repoName: "repo2", queuedAt: new Date(2022, 14, 15, 10, 40, 0) }
];

const securityScanFinding: SecurityScanFindingRecord = {
    type: "vulnerability",
    ruleId: "XXXXX",
    path: "/this/path",
    severity: "critical"};

function SecurityScanResultList() {
    const [isOpen, setOpen] = useState<boolean>(false);

    function open() {
        setOpen(true);
    }

    function close() {
        setOpen(false);
    }

    
    return (
        <>
            <h2>This is security scan result list</h2>
            <div>
                {securityScanResults.map((record) => <SecurityScanResultItem
                key={record.repoName + record.queuedAt}
                status={record.status}
                repoName={record.repoName}
                queuedAt={record.queuedAt} />)}
            </div>
            <div>
                <button onClick={open}>Open</button>
            </div>
            {isOpen && (
                <>
                    <p>This is a popup</p>
                    <SecurityScanFindingList
                        key={1}
                        type={securityScanFinding.type}
                        ruleId={securityScanFinding.ruleId}
                        path={securityScanFinding.path}
                        severity={securityScanFinding.severity} />
                    <button onClick={close}>Close</button>
                </>
            )}
        </>
    )
}

export default SecurityScanResultList;