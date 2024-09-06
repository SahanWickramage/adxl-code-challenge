type SecurityScanResult = {
    _id: string;
    status: string;
    repoName: string;
    queuedAt: Date;
    findingCount: number;
};

export type {SecurityScanResult};