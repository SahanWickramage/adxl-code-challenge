import { ObjectId } from "./ObjectId";

type SecurityScanResult = {
    _id: ObjectId  | null;
    status: string;
    repoName: string;
    queuedAt: Date;
    findingCount: number;
};

export type { SecurityScanResult };