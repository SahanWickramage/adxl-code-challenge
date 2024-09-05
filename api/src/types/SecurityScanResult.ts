import { ObjectId } from "./ObjectId";

type SecurityScanResult = {
    _id: ObjectId;
    status: string;
    repoName: string;
    queuedAt: Date;
};

export type {SecurityScanResult};