import { ObjectId } from "./ObjectId";

type SecurityScanFinding = {
    _id: ObjectId;
    securityScanResultId: ObjectId;
    type: string;
    ruleId: string;
    path: string;
    description: string;
};

export type {SecurityScanFinding};