import { Schema, model } from "mongoose";
import { SecurityScanFinding } from "../types/SecurityScanFinding";
import mongoose from 'mongoose';

const securityScanFindingSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    securityScanResultId: mongoose.Types.ObjectId,
    type: String,
    ruleId: String,
    path: String,
    description: String
});

const securityScanFindingModel = model<SecurityScanFinding>('security-scan-finding', securityScanFindingSchema);

export default securityScanFindingModel;