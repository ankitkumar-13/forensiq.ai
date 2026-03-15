export type SignatureScanState = "idle" | "scanning" | "done";

export type ModuleKey =
  | "overview"
  | "uploadQueue"
  | "signatureLab"
  | "metadataDiff"
  | "riskTimeline"
  | "findings"
  | "caseNotes"
  | "auditTrail"
  | "exportReport";

export type FindingTone = "risk" | "ok" | "warn";
