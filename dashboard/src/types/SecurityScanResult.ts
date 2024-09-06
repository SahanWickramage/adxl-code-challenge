type SecurityScanResult = {
    _id: string;
    status: string;
    repoName: string;
    queuedAt: Date;
};

export type {SecurityScanResult};