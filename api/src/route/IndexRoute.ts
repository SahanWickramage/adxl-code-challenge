import { Router } from "express";
import securityScanResultRouter from "./SecurityScanResultRoute";

const indexRouter = Router();
indexRouter.use("/results", securityScanResultRouter);

export default indexRouter;