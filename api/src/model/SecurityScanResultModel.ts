import { Schema, model } from "mongoose";
import { SecurityScanResult } from "../types/SecurityScanResult";
import mongoose from 'mongoose';

const securityScanResultSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    status: String,
    repoName: String,
    queuedAt: Date
});

const securityScanResultModel = model<SecurityScanResult>('security-scan-result', securityScanResultSchema);

export default securityScanResultModel;