type SecurityScanResultRecord = {
    status: string;
    repoName: string;
    // findings: SecurityScanFindingRecord;
    queuedAt: Date;
};

type SecurityScanFindingRecord = {
    type: string;
    ruleId: string;
    path: string;
    severity: string;
};

export type { SecurityScanResultRecord, SecurityScanFindingRecord };  