type SecurityScanResult = {
    _id: string | null;
    status: string;
    repoName: string;
    queuedAt: Date;
    findingCount: number;
};

export type {SecurityScanResult};