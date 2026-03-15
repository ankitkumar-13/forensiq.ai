import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Expand,
  FileText,
  Home,
  RotateCw,
  Search,
  Upload,
  ZoomIn,
} from "lucide-react";
import { motion } from "framer-motion";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";
import pdfWorkerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { type ChangeEvent, useEffect, useMemo, useState } from "react";
import type { FindingTone, ModuleKey, SignatureScanState } from "@/models/forensics";

const supportedTypes = ["PDF", "DOC", "DOCX", "PNG", "JPG", "JPEG"];
const prototypePdfPath = "/invoice-signed_compress.pdf";
const prototypePdfName = "invoice-signed_compress.pdf";

const findings: Array<{ title: string; detail: string; status: string; tone: FindingTone }> = [
  {
    title: "Edited transaction row",
    detail: "Transaction line values differ from previous signed revision.",
    status: "Risk",
    tone: "risk",
  },
  {
    title: "Account number verified",
    detail: "Matched against extracted metadata and expected format.",
    status: "Verified",
    tone: "ok",
  },
  {
    title: "Address block normalized",
    detail: "Minor formatting update detected, content remains consistent.",
    status: "Corrected",
    tone: "warn",
  },
  {
    title: "Balance summary mismatch",
    detail: "Balance value changed between versions on page 1.",
    status: "Risk",
    tone: "risk",
  },
];

const metadataRows = [
  { originalText: "Signature of issuing", newText: "Annotation", status: "bad" },
  { originalText: "Google invoices from Ma...", newText: "Annotation", status: "good" },
  { originalText: "Hubspot Docs", newText: "Annotation", status: "good" },
  { originalText: "Hubspot Docs", newText: "Annotation", status: "good" },
];

type OverlayBlock = {
  label: string;
  top: string;
  left: string;
  width: string;
  height: string;
};

const defaultVerifiedBlocks: OverlayBlock[] = [
  { label: "Verified: Account Number", top: "14%", left: "18%", width: "30%", height: "7%" },
  { label: "Verified: Name", top: "24%", left: "14%", width: "26%", height: "7%" },
  { label: "Verified: Address", top: "63%", left: "18%", width: "42%", height: "8%" },
];

const defaultRiskBlocks: OverlayBlock[] = [
  { label: "Risk: Amount mismatch", top: "44%", left: "40%", width: "35%", height: "8%" },
  { label: "Risk: Edited transaction", top: "74%", left: "24%", width: "40%", height: "7%" },
];

const prototypePdfOverlay = {
  verified: [
    { label: "Verified: Account Number", top: "14.5%", left: "18%", width: "30%", height: "7%" },
    { label: "Verified: Name", top: "26.5%", left: "18%", width: "24%", height: "7%" },
    { label: "Verified: Address", top: "70.5%", left: "17.5%", width: "44%", height: "8%" },
  ] as OverlayBlock[],
  risk: [
    { label: "Risk: Amount mismatch", top: "46.5%", left: "39.5%", width: "33%", height: "8.5%" },
    { label: "Risk: Edited transaction", top: "82.2%", left: "24%", width: "40%", height: "7.2%" },
  ] as OverlayBlock[],
};

const dashboardMenu: Array<{ key: ModuleKey; label: string; description: string }> = [
  { key: "overview", label: "Overview", description: "Case health and risk summary" },
  { key: "uploadQueue", label: "Upload Queue", description: "Incoming and pending documents" },
  { key: "signatureLab", label: "Signature Lab", description: "Document viewer and evidence" },
  { key: "metadataDiff", label: "Metadata Diff", description: "Original vs modified values" },
  { key: "riskTimeline", label: "Risk Timeline", description: "Chronological risk events" },
  { key: "findings", label: "Findings", description: "Fraud signals and corrections" },
  { key: "caseNotes", label: "Case Notes", description: "Analyst comments and decisions" },
  { key: "auditTrail", label: "Audit Trail", description: "Actions and reviewer logs" },
  { key: "exportReport", label: "Export Report", description: "Share PDF and evidence package" },
];

const detectedIssues = [
  { key: "amount mismatch", title: "Amount mismatch", severity: "High" },
  { key: "signature", title: "Signature mismatch", severity: "Medium" },
  { key: "address", title: "Address inconsistency", severity: "Medium" },
  { key: "metadata", title: "Modified metadata", severity: "High" },
];

const integrityChecks = [
  { label: "Metadata Consistency", status: "pass" },
  { label: "Compression Pattern Check", status: "pass" },
  { label: "Font Inconsistency", status: "warn" },
  { label: "OCR Text Match", status: "pass" },
  { label: "Image Editing Detected", status: "warn" },
];

const tamperingSignals = [
  { label: "Text Replacement", status: "detected" },
  { label: "Image Overlay", status: "clean" },
  { label: "Layer Manipulation", status: "clean" },
  { label: "Cropped Regions", status: "detected" },
  { label: "Font Substitution", status: "detected" },
];

const documentTimeline = [
  "Feb 21 2024  Created",
  "Feb 22 2024  Edited",
  "Feb 23 2024  Metadata changed",
  "Feb 24 2024  Uploaded",
];

const auditLogs = [
  "User uploaded document",
  "AI analysis completed",
  "Metadata flagged",
  "Signature checked",
];

const queueRows = [
  { file: "Ankush_R.pdf", status: "Analyzed", risk: "82%", owner: "John O'Connor", updated: "2 min ago" },
  { file: "salary_proof_v4.pdf", status: "Queued", risk: "Pending", owner: "Mia Chen", updated: "8 min ago" },
  { file: "passport_scan.png", status: "Needs review", risk: "56%", owner: "Arjun Das", updated: "21 min ago" },
  { file: "invoice_batch_12.pdf", status: "Analyzed", risk: "34%", owner: "Nora White", updated: "37 min ago" },
];

const reviewerLoad = [
  { analyst: "John O'Connor", assigned: 6, sla: "On track" },
  { analyst: "Mia Chen", assigned: 4, sla: "On track" },
  { analyst: "Arjun Das", assigned: 7, sla: "Watch" },
];

const auditEvents = [
  { time: "10:12", action: "Upload completed", user: "John O'Connor", channel: "Portal" },
  { time: "10:14", action: "AI pipeline started", user: "System", channel: "Inference" },
  { time: "10:15", action: "Metadata anomaly flagged", user: "System", channel: "Validation" },
  { time: "10:19", action: "Manual review opened", user: "Mia Chen", channel: "Workbench" },
  { time: "10:24", action: "Evidence exported", user: "John O'Connor", channel: "Reporting" },
];

const riskTrend = [19, 27, 31, 22, 35, 44, 39, 47, 52, 43, 49, 58];

const storedSignatureLibrary = [
  { id: "sig-01", src: new URL("../../assets/images/signatures/1-002_01.jpg", import.meta.url).href },
  { id: "sig-02", src: new URL("../../assets/images/signatures/1-002_02.jpg", import.meta.url).href },
  { id: "sig-03", src: new URL("../../assets/images/signatures/1-002_03.jpg", import.meta.url).href },
  { id: "sig-04", src: new URL("../../assets/images/signatures/1-002_04.jpg", import.meta.url).href },
  { id: "sig-05", src: new URL("../../assets/images/signatures/1-002_05.jpg", import.meta.url).href },
  { id: "sig-06", src: new URL("../../assets/images/signatures/1-002_06.jpg", import.meta.url).href },
];

const loadImageFromSource = async (src: string): Promise<HTMLImageElement> => {
  return await new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Failed to load image source."));
    image.src = src;
  });
};

const extractSignatureSnippets = async (src: string): Promise<string[]> => {
  const image = await loadImageFromSource(src);
  const zoneStart = Math.floor(image.height * 0.58);
  const zoneHeight = Math.max(Math.floor(image.height * 0.34), 1);
  const segmentWidth = Math.floor(image.width / 3);
  const snippets: string[] = [];

  for (let i = 0; i < 3; i += 1) {
    const sx = Math.max(i * segmentWidth - Math.floor(segmentWidth * 0.08), 0);
    const sw = Math.min(Math.floor(segmentWidth * 1.16), image.width - sx);

    const canvas = document.createElement("canvas");
    canvas.width = sw;
    canvas.height = zoneHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      continue;
    }

    ctx.drawImage(image, sx, zoneStart, sw, zoneHeight, 0, 0, sw, zoneHeight);

    const { data } = ctx.getImageData(0, 0, sw, zoneHeight);
    let darkPixels = 0;

    for (let px = 0; px < data.length; px += 4) {
      const r = data[px];
      const g = data[px + 1];
      const b = data[px + 2];
      const a = data[px + 3];
      const avg = (r + g + b) / 3;

      if (a > 10 && avg < 110) {
        darkPixels += 1;
      }
    }

    const density = darkPixels / (sw * zoneHeight);
    if (density > 0.008) {
      snippets.push(canvas.toDataURL("image/png"));
    }
  }

  return snippets;
};

const cardClass =
  "rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_6px_rgba(0,0,0,0.04)]";
const sectionTitleClass =
  "text-[14px] font-semibold uppercase tracking-[0.04em] text-[#374151]";

export const TryItNow = () => {
  const [activeModule, setActiveModule] = useState<ModuleKey>("overview");
  const [fileName, setFileName] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [pdfPageImageUrl, setPdfPageImageUrl] = useState("");
  const [pdfTotalPages, setPdfTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfRenderFailed, setPdfRenderFailed] = useState(false);
  const [signatureScanState, setSignatureScanState] = useState<SignatureScanState>("idle");
  const [signatureSnippets, setSignatureSnippets] = useState<string[]>([]);
  const [analysisReady, setAnalysisReady] = useState(false);
  const [selectedIssueKey, setSelectedIssueKey] = useState("");
  const [analystNotes, setAnalystNotes] = useState("");

  const normalizedFileName = useMemo(() => {
    return uploadedFile?.name.trim().toLowerCase() ?? "";
  }, [uploadedFile]);

  const activeVerifiedBlocks = useMemo(() => {
    const isPrototypePdf = normalizedFileName === prototypePdfName;
    if (isPrototypePdf && currentPage === 1) {
      return prototypePdfOverlay.verified;
    }
    return defaultVerifiedBlocks;
  }, [normalizedFileName, currentPage]);

  const activeRiskBlocks = useMemo(() => {
    const isPrototypePdf = normalizedFileName === prototypePdfName;
    if (isPrototypePdf && currentPage === 1) {
      return prototypePdfOverlay.risk;
    }
    return defaultRiskBlocks;
  }, [normalizedFileName, currentPage]);

  const displayedName = useMemo(() => {
    if (analysisReady && fileName.trim().length > 0) {
      return fileName;
    }
    return "No document uploaded";
  }, [analysisReady, fileName]);

  const fileExtension = useMemo(() => {
    if (!uploadedFile?.name) {
      return "";
    }
    const parts = uploadedFile.name.split(".");
    return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : "";
  }, [uploadedFile]);

  const fileSizeLabel = useMemo(() => {
    if (!uploadedFile) {
      return "";
    }
    const bytes = uploadedFile.size;
    if (bytes < 1024) {
      return `${bytes} B`;
    }
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }, [uploadedFile]);

  const isPdfFile = useMemo(() => {
    return uploadedFile?.type === "application/pdf" || fileExtension === "PDF";
  }, [uploadedFile, fileExtension]);

  const totalPages = useMemo(() => {
    if (!uploadedFile) {
      return 0;
    }
    return isPdfFile ? pdfTotalPages : 1;
  }, [uploadedFile, isPdfFile, pdfTotalPages]);

  const findingsSummary = useMemo(() => {
    return findings.reduce(
      (acc, item) => {
        if (item.tone === "risk") {
          acc.risk += 1;
        } else if (item.tone === "ok") {
          acc.verified += 1;
        } else {
          acc.corrected += 1;
        }
        return acc;
      },
      { risk: 0, verified: 0, corrected: 0 },
    );
  }, []);

  const riskScore = useMemo(() => {
    if (!analysisReady) {
      return 0;
    }
    const value = findingsSummary.risk * 24 + findingsSummary.corrected * 12 + 22;
    return Math.min(99, Math.max(1, value));
  }, [analysisReady, findingsSummary]);

  const onIssueSelect = (issueKey: string) => {
    setSelectedIssueKey(issueKey);
    const viewer = document.getElementById("forensiq-doc-viewer");
    if (viewer) {
      viewer.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const isIssueFocused = (label: string) => {
    if (!selectedIssueKey) {
      return false;
    }
    return label.toLowerCase().includes(selectedIssueKey.toLowerCase());
  };

  useEffect(() => {
    if (!uploadedFile) {
      setPreviewUrl("");
      return;
    }

    const objectUrl = URL.createObjectURL(uploadedFile);
    setPreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [uploadedFile]);

  useEffect(() => {
    let active = true;

    const loadPrototypePdf = async () => {
      if (uploadedFile) {
        return;
      }

      try {
        const response = await fetch(prototypePdfPath);
        if (!response.ok) {
          return;
        }

        const buffer = await response.arrayBuffer();
        if (!active) {
          return;
        }

        const file = new File([buffer], prototypePdfName, { type: "application/pdf" });
        setUploadedFile(file);
        setFileName(file.name);
        setCurrentPage(1);
        setPdfTotalPages(1);
        setAnalysisReady(true);
      } catch {
        // Silent fallback keeps manual upload flow intact.
      }
    };

    loadPrototypePdf();

    return () => {
      active = false;
    };
  }, [uploadedFile]);

  useEffect(() => {
    let cancelled = false;

    const renderPdfPreview = async () => {
      if (!uploadedFile) {
        setPdfPageImageUrl("");
        setPdfTotalPages(1);
        setCurrentPage(1);
        setPdfRenderFailed(false);
        return;
      }

      const isPdf = uploadedFile.type === "application/pdf" || fileExtension === "PDF";
      if (!isPdf) {
        setPdfPageImageUrl("");
        setPdfTotalPages(1);
        setCurrentPage(1);
        setPdfRenderFailed(false);
        return;
      }

      try {
        setPdfRenderFailed(false);
        GlobalWorkerOptions.workerSrc = pdfWorkerSrc;
        const bytes = await uploadedFile.arrayBuffer();
        const pdf = await getDocument({ data: bytes }).promise;
        if (!cancelled) {
          setPdfTotalPages(pdf.numPages || 1);
        }

        const safePage = Math.min(Math.max(currentPage, 1), pdf.numPages || 1);
        if (!cancelled && safePage !== currentPage) {
          setCurrentPage(safePage);
        }

        const page = await pdf.getPage(safePage);
        const viewport = page.getViewport({ scale: 1.35 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (!context) {
          setPdfPageImageUrl("");
          return;
        }

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;

        if (!cancelled) {
          setPdfPageImageUrl(canvas.toDataURL("image/png"));
        }
      } catch {
        if (!cancelled) {
          setPdfPageImageUrl("");
          setPdfRenderFailed(true);
        }
      }
    };

    renderPdfPreview();

    return () => {
      cancelled = true;
    };
  }, [uploadedFile, fileExtension, currentPage]);

  useEffect(() => {
    let active = true;

    const runSignatureScan = async () => {
      if (!analysisReady) {
        setSignatureSnippets([]);
        setSignatureScanState("idle");
        return;
      }

      const source = isPdfFile ? pdfPageImageUrl : uploadedFile?.type.startsWith("image/") ? previewUrl : "";

      if (!source) {
        setSignatureSnippets([]);
        setSignatureScanState("done");
        return;
      }

      setSignatureScanState("scanning");

      try {
        const snippets = await extractSignatureSnippets(source);
        if (active) {
          setSignatureSnippets(snippets);
          setSignatureScanState("done");
        }
      } catch {
        if (active) {
          setSignatureSnippets([]);
          setSignatureScanState("done");
        }
      }
    };

    runSignatureScan();

    return () => {
      active = false;
    };
  }, [analysisReady, isPdfFile, pdfPageImageUrl, previewUrl, uploadedFile]);

  const onFilePicked = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setUploadedFile(file);
    setFileName(file.name);
    setCurrentPage(1);
    setPdfTotalPages(1);
    setSignatureSnippets([]);
    setSignatureScanState("idle");
    setAnalysisReady(false);
  };

  const renderDocumentPreview = () => {
    if (!analysisReady) {
      return (
        <div className="mx-auto flex min-h-[420px] max-w-[860px] flex-col items-center justify-center rounded-lg border border-dashed border-[#CBD5E1] bg-white px-8 text-center">
          <p className="text-[16px] font-semibold text-[#1F2937]">No document preview yet</p>
          <p className="mt-1 text-[12px] text-[#64748B]">Upload a file and run analysis to populate this workspace.</p>
        </div>
      );
    }

    return (
      <div className="mx-auto max-w-[860px] rounded-lg bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        {uploadedFile && previewUrl ? (
          uploadedFile.type.startsWith("image/") ? (
            <div className="relative min-h-[520px] w-full overflow-hidden rounded">
              <img src={previewUrl} alt={uploadedFile.name} className="h-[520px] w-full rounded object-contain" />
              <div className="pointer-events-none absolute inset-0">
                {activeVerifiedBlocks.map((block) => (
                  <div
                    key={block.label}
                    className={`absolute rounded border-2 bg-[#DCFCE7]/50 ${
                      isIssueFocused(block.label)
                        ? "border-emerald-600 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]"
                        : "border-emerald-500/90"
                    }`}
                    style={{ top: block.top, left: block.left, width: block.width, height: block.height }}
                  >
                    <span className="absolute -top-6 left-0 rounded bg-emerald-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      {block.label}
                    </span>
                  </div>
                ))}
                {activeRiskBlocks.map((block) => (
                  <div
                    key={block.label}
                    className={`absolute rounded border-2 bg-[#FEE2E2]/60 ${
                      isIssueFocused(block.label)
                        ? "border-red-600 shadow-[0_0_0_3px_rgba(239,68,68,0.25)]"
                        : "border-red-500/90"
                    }`}
                    style={{ top: block.top, left: block.left, width: block.width, height: block.height }}
                  >
                    <span className="absolute -top-6 left-0 rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      {block.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : uploadedFile.type === "application/pdf" || fileExtension === "PDF" ? (
            pdfPageImageUrl ? (
              <div className="relative min-h-[520px] w-full overflow-auto rounded">
                <div className="relative mx-auto min-h-[520px] w-full max-w-[780px]">
                  <img src={pdfPageImageUrl} alt={`${uploadedFile.name} page ${currentPage}`} className="w-full rounded border border-[#E5E7EB]" />
                  <div className="pointer-events-none absolute inset-0">
                    {activeVerifiedBlocks.map((block) => (
                      <div
                        key={block.label}
                        className={`absolute rounded border-2 bg-[#DCFCE7]/50 ${
                          isIssueFocused(block.label)
                            ? "border-emerald-600 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]"
                            : "border-emerald-500/90"
                        }`}
                        style={{ top: block.top, left: block.left, width: block.width, height: block.height }}
                      >
                        <span className="absolute -top-6 left-0 rounded bg-emerald-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                          {block.label}
                        </span>
                      </div>
                    ))}
                    {activeRiskBlocks.map((block) => (
                      <div
                        key={block.label}
                        className={`absolute rounded border-2 bg-[#FEE2E2]/60 ${
                          isIssueFocused(block.label)
                            ? "border-red-600 shadow-[0_0_0_3px_rgba(239,68,68,0.25)]"
                            : "border-red-500/90"
                        }`}
                        style={{ top: block.top, left: block.left, width: block.width, height: block.height }}
                      >
                        <span className="absolute -top-6 left-0 rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                          {block.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : pdfRenderFailed ? (
              <iframe src={previewUrl} title={uploadedFile.name} className="h-[520px] w-full rounded" />
            ) : (
              <div className="flex min-h-[520px] w-full items-center justify-center rounded border border-dashed border-[#CBD5E1] bg-[#F8FAFC]">
                <p className="text-[13px] text-[#64748B]">Preparing PDF preview...</p>
              </div>
            )
          ) : (
            <div className="flex min-h-[520px] w-full flex-col items-center justify-center rounded border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-6 text-center">
              <FileText className="h-10 w-10 text-[#64748B]" />
              <p className="mt-4 text-[16px] font-semibold text-[#1F2937]">{uploadedFile.name}</p>
              <p className="mt-1 text-[12px] text-[#64748B]">{fileExtension || "FILE"} • {fileSizeLabel}</p>
            </div>
          )
        ) : (
          <div className="flex min-h-[520px] w-full items-center justify-center rounded border border-dashed border-[#CBD5E1] bg-[#F8FAFC]">
            <p className="text-[13px] text-[#64748B]">No uploaded document found.</p>
          </div>
        )}
      </div>
    );
  };

  const renderWorkspace = () => {
    if (activeModule === "overview") {
      return (
        <div className="space-y-6">
          <h2 className="text-[20px] font-semibold text-[#111827]">Case Overview</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className={cardClass}>
              <p className={sectionTitleClass}>Open Cases</p>
              <p className="mt-2 text-[26px] font-semibold text-[#111827]">148</p>
              <p className="mt-1 text-[12px] text-[#16A34A]">+12.4% this week</p>
            </div>
            <div className={cardClass}>
              <p className={sectionTitleClass}>High Risk Queue</p>
              <p className="mt-2 text-[26px] font-semibold text-[#111827]">23</p>
              <p className="mt-1 text-[12px] text-[#D97706]">SLA avg 19 min</p>
            </div>
            <div className={cardClass}>
              <p className={sectionTitleClass}>Auto Approval</p>
              <p className="mt-2 text-[26px] font-semibold text-[#111827]">64%</p>
              <p className="mt-1 text-[12px] text-[#6B7280]">Model threshold 0.74</p>
            </div>
            <div className={cardClass}>
              <p className={sectionTitleClass}>False Positives</p>
              <p className="mt-2 text-[26px] font-semibold text-[#111827]">4.1%</p>
              <p className="mt-1 text-[12px] text-[#16A34A]">-0.8% vs last sprint</p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className={cardClass}>
              <p className={sectionTitleClass}>AI Risk Score</p>
              <div className="mt-3 h-2 rounded-full bg-[#E5E7EB]">
                <div className="h-2 rounded-full bg-gradient-to-r from-[#DC2626] to-[#D97706]" style={{ width: `${analysisReady ? riskScore : 0}%` }} />
              </div>
              <p className="mt-2 text-[20px] font-semibold text-[#111827]">{analysisReady ? `${riskScore}%` : "0%"}</p>
              <p className="mt-1 text-[13px] text-[#6B7280]">Current case fraud likelihood.</p>
            </div>
            <div className={cardClass}>
              <p className={sectionTitleClass}>Document Summary</p>
              <div className="mt-3 space-y-2 text-[13px]">
                <div className="flex justify-between"><span className="text-[#6B7280]">File</span><span className="font-semibold text-[#111827]">{displayedName}</span></div>
                <div className="flex justify-between"><span className="text-[#6B7280]">Type</span><span className="font-semibold text-[#111827]">{fileExtension || "-"}</span></div>
                <div className="flex justify-between"><span className="text-[#6B7280]">Pages</span><span className="font-semibold text-[#111827]">{totalPages || "-"}</span></div>
                <div className="flex justify-between"><span className="text-[#6B7280]">State</span><span className="font-semibold text-[#111827]">{analysisReady ? "Analyzed" : "Waiting"}</span></div>
              </div>
            </div>
          </div>
          <div className={cardClass}>
            <p className={sectionTitleClass}>Recent Findings</p>
            <div className="mt-3 space-y-3">
              {findings.slice(0, 3).map((item) => (
                <div key={item.title} className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-semibold text-[#111827]">{item.title}</p>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${item.tone === "risk" ? "bg-[#FEE2E2] text-[#DC2626]" : item.tone === "ok" ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FEF3C7] text-[#D97706]"}`}>{item.status}</span>
                  </div>
                  <p className="mt-1 text-[13px] text-[#6B7280]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={cardClass}>
            <p className={sectionTitleClass}>Risk Timeline</p>
            <div className="mt-4 space-y-3">
              {documentTimeline.map((entry, idx) => (
                <div key={entry} className="flex items-center gap-3">
                  <div className={`h-2.5 w-2.5 rounded-full ${idx >= 2 ? "bg-[#DC2626]" : "bg-[#2563EB]"}`} />
                  <div className="h-1 flex-1 rounded bg-[#E2E8F0]" />
                  <p className="w-[220px] text-[12px] text-[#475569]">{entry}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={cardClass}>
            <div className="flex items-center justify-between">
              <p className={sectionTitleClass}>Risk Distribution Trend</p>
              <p className="text-[12px] text-[#6B7280]">Last 12 runs</p>
            </div>
            <div className="mt-4 grid grid-cols-12 items-end gap-2">
              {riskTrend.map((value, index) => (
                <div key={`risk-bar-${index}`} className="flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-[#2563EB] to-[#60A5FA]"
                    style={{ height: `${Math.max(16, value)}px` }}
                  />
                  <span className="text-[10px] text-[#94A3B8]">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeModule === "uploadQueue") {
      return (
        <div className="space-y-6">
          <h2 className="text-[20px] font-semibold text-[#111827]">Upload Queue</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className={cardClass}>
              <p className={sectionTitleClass}>Files Today</p>
              <p className="mt-2 text-[24px] font-semibold text-[#111827]">37</p>
            </div>
            <div className={cardClass}>
              <p className={sectionTitleClass}>Avg Processing</p>
              <p className="mt-2 text-[24px] font-semibold text-[#111827]">2m 14s</p>
            </div>
            <div className={cardClass}>
              <p className={sectionTitleClass}>Needs Manual Review</p>
              <p className="mt-2 text-[24px] font-semibold text-[#111827]">9</p>
            </div>
          </div>
          <div className={cardClass}>
            <p className={sectionTitleClass}>Upload Document</p>
            <label className="mt-4 block cursor-pointer rounded-[10px] border-2 border-dashed border-[#D1D5DB] bg-[#FAFAFA] p-8 text-center transition-colors hover:border-[#2563EB] hover:bg-[#EFF6FF]">
              <input type="file" onChange={onFilePicked} accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" className="sr-only" />
              <Upload className="mx-auto h-5 w-5 text-[#2563EB]" />
              <p className="mt-2 text-[13px] font-medium text-[#111827]">Drag and drop or click to upload</p>
              <p className="mt-1 text-[12px] text-[#6B7280]">Supported: {supportedTypes.join(", ")}</p>
            </label>
            <button type="button" onClick={() => setAnalysisReady(true)} disabled={!uploadedFile} className="mt-4 rounded-lg bg-[#2563EB] px-4 py-2 text-[13px] font-medium text-white transition hover:bg-[#1D4ED8] disabled:opacity-40">Run analysis</button>
          </div>
          <div className={cardClass}>
            <p className={sectionTitleClass}>Uploaded Files</p>
            <table className="mt-3 w-full border-collapse text-left text-[13px]">
              <thead>
                <tr className="border-b border-[#E5E7EB] text-[#6B7280]">
                  <th className="py-2 font-medium">File Name</th>
                  <th className="py-2 font-medium">Status</th>
                  <th className="py-2 font-medium">Risk</th>
                  <th className="py-2 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {queueRows.map((row) => (
                  <tr key={row.file} className="border-b border-[#E5E7EB] last:border-b-0">
                    <td className="py-2 text-[#111827]">{row.file}</td>
                    <td className="py-2 text-[#475569]">{row.status}</td>
                    <td className="py-2 text-[#111827]">{row.risk}</td>
                    <td className="py-2">
                      <button type="button" className="rounded-md border border-[#E5E7EB] px-2 py-1 text-[12px] text-[#374151]">Open</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={cardClass}>
            <p className={sectionTitleClass}>Reviewer Load</p>
            <div className="mt-3 space-y-2">
              {reviewerLoad.map((row) => (
                <div key={row.analyst} className="flex items-center justify-between rounded-lg bg-[#FAFAFA] px-3 py-2 text-[13px]">
                  <span className="font-medium text-[#111827]">{row.analyst}</span>
                  <span className="text-[#6B7280]">{row.assigned} assigned</span>
                  <span className={row.sla === "Watch" ? "text-[#D97706]" : "text-[#16A34A]"}>{row.sla}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeModule === "signatureLab") {
      return (
        <div className="space-y-6">
          <h2 className="text-[20px] font-semibold text-[#111827]">Document Analysis</h2>
          <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
            <div className={cardClass}>
              <div className="flex items-center justify-between border-b border-[#EEF2F7] pb-3">
                <div className="flex items-center gap-2 text-[12px] text-[#6B7280]">
                  <button type="button" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={!isPdfFile || currentPage <= 1}><ChevronLeft className="h-4 w-4" /></button>
                  <span>Page {totalPages > 0 ? `${currentPage}/${totalPages}` : "-/-"}</span>
                  <button type="button" onClick={() => setCurrentPage((p) => Math.min(totalPages || 1, p + 1))} disabled={!isPdfFile || totalPages === 0 || currentPage >= totalPages}><ChevronRight className="h-4 w-4" /></button>
                </div>
                <div className="flex items-center gap-3 text-[#6B7280]"><Search className="h-4 w-4" /><ZoomIn className="h-4 w-4" /><RotateCw className="h-4 w-4" /><Expand className="h-4 w-4" /></div>
              </div>
              <div id="forensiq-doc-viewer" className="mt-4 rounded-xl bg-[#F8FAFC] p-4">{renderDocumentPreview()}</div>
            </div>
            <div className="space-y-4">
              <div className={cardClass}>
                <p className={sectionTitleClass}>Document Summary</p>
                <div className="mt-3 space-y-2 text-[13px]">
                  <div className="flex justify-between"><span className="text-[#6B7280]">Name</span><span className="font-semibold text-[#111827]">{displayedName}</span></div>
                  <div className="flex justify-between"><span className="text-[#6B7280]">Type</span><span className="font-semibold text-[#111827]">{fileExtension || "-"}</span></div>
                  <div className="flex justify-between"><span className="text-[#6B7280]">Pages</span><span className="font-semibold text-[#111827]">{totalPages || "-"}</span></div>
                </div>
              </div>
              <div className={cardClass}>
                <p className={sectionTitleClass}>AI Risk Score</p>
                <div className="mt-3 h-2 rounded-full bg-[#E5E7EB]"><div className="h-2 rounded-full bg-gradient-to-r from-[#DC2626] to-[#D97706]" style={{ width: `${analysisReady ? riskScore : 0}%` }} /></div>
                <p className="mt-2 text-[13px] font-semibold text-[#111827]">{analysisReady ? `${riskScore}%` : "0%"}</p>
              </div>
              <div className={cardClass}>
                <p className={sectionTitleClass}>Detected Issues</p>
                <div className="mt-3 space-y-2">
                  {detectedIssues.map((issue) => (
                    <button key={issue.key} type="button" onClick={() => onIssueSelect(issue.key)} className="flex w-full items-center justify-between rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-2 text-left">
                      <span className="text-[13px] font-medium text-[#111827]">{issue.title}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${issue.severity === "High" ? "bg-[#FEE2E2] text-[#DC2626]" : "bg-[#FEF3C7] text-[#D97706]"}`}>{issue.severity}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className={cardClass}>
                <div className="flex items-center justify-between">
                  <p className={sectionTitleClass}>Stored Signatures</p>
                  <span className="text-[11px] text-[#64748B]">{storedSignatureLibrary.length} in library</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {storedSignatureLibrary.map((signature, idx) => (
                    <div key={signature.id} className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] p-2">
                      <img
                        src={signature.src}
                        alt={`Stored signature ${idx + 1}`}
                        className="h-16 w-full rounded object-cover"
                      />
                      <p className="mt-1 text-[11px] font-medium text-[#475569]">Candidate {idx + 1}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] p-2.5">
                  <p className="text-[11px] text-[#64748B]">
                    Live extracted signatures: {signatureScanState === "done" ? signatureSnippets.length : "Scanning"}
                  </p>
                </div>
              </div>
              <div className={cardClass}>
                <p className={sectionTitleClass}>Integrity Checks</p>
                <div className="mt-3 space-y-2">
                  {integrityChecks.map((check) => (
                    <div key={check.label} className="flex items-center justify-between rounded-lg bg-[#FAFAFA] px-3 py-2 text-[13px]"><span className="text-[#111827]">{check.label}</span>{check.status === "pass" ? <CheckCircle2 className="h-4 w-4 text-[#16A34A]" /> : <AlertTriangle className="h-4 w-4 text-[#D97706]" />}</div>
                  ))}
                </div>
              </div>
              <div className={cardClass}>
                <p className={sectionTitleClass}>Tampering Detection</p>
                <div className="mt-3 space-y-2">
                  {tamperingSignals.map((signal) => (
                    <div key={signal.label} className="flex items-center justify-between rounded-lg bg-[#FAFAFA] px-3 py-2 text-[13px]"><span className="text-[#111827]">{signal.label}</span><span className={signal.status === "detected" ? "text-[#DC2626]" : "text-[#16A34A]"}>{signal.status === "detected" ? "Detected" : "Clean"}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeModule === "metadataDiff") {
      return (
        <div className="space-y-6">
          <h2 className="text-[20px] font-semibold text-[#111827]">Metadata Comparison</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className={cardClass}><p className={sectionTitleClass}>Original Metadata</p><div className="mt-3 space-y-2 text-[13px]">{metadataRows.map((row) => <div key={`orig-${row.originalText}`} className="rounded-lg bg-[#FAFAFA] px-3 py-2 text-[#475569]">{row.originalText}</div>)}</div></div>
            <div className={cardClass}><p className={sectionTitleClass}>Modified Metadata</p><div className="mt-3 space-y-2 text-[13px]">{metadataRows.map((row) => <div key={`mod-${row.originalText}`} className="rounded-lg bg-[#FAFAFA] px-3 py-2 text-[#475569]">{row.newText}</div>)}</div></div>
          </div>
          <div className={cardClass}>
            <p className={sectionTitleClass}>Change Confidence</p>
            <div className="mt-3 space-y-3">
              {metadataRows.map((row, idx) => (
                <div key={`confidence-${row.originalText}-${idx}`}>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-[#475569]">{row.originalText}</span>
                    <span className="font-medium text-[#111827]">{88 - idx * 11}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-[#E5E7EB]">
                    <div className="h-2 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444]" style={{ width: `${88 - idx * 11}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeModule === "riskTimeline") {
      return (
        <div className="space-y-6">
          <h2 className="text-[20px] font-semibold text-[#111827]">Risk Timeline</h2>
          <div className={cardClass}><p className={sectionTitleClass}>Timeline Visualization</p><div className="mt-4 space-y-4">{documentTimeline.map((entry, idx) => <div key={entry} className="flex items-center gap-3"><div className={`h-3 w-3 rounded-full ${idx >= 2 ? "bg-[#DC2626]" : "bg-[#2563EB]"}`} /><div className="h-1 flex-1 rounded bg-[#E2E8F0]" /><span className="w-[240px] text-[13px] text-[#475569]">{entry}</span></div>)}</div></div>
          <div className={cardClass}><p className={sectionTitleClass}>Event Log</p><div className="mt-3 space-y-2 text-[13px] text-[#475569]">{auditLogs.map((log) => <div key={log} className="rounded-lg bg-[#FAFAFA] px-3 py-2">{log}</div>)}</div></div>
          <div className={cardClass}>
            <p className={sectionTitleClass}>Hourly Risk Heatmap</p>
            <div className="mt-3 grid grid-cols-12 gap-1">
              {Array.from({ length: 48 }).map((_, idx) => {
                const intensity = (idx * 17) % 100;
                const tone = intensity > 72 ? "#FCA5A5" : intensity > 48 ? "#FCD34D" : "#93C5FD";
                return <div key={`heat-${idx}`} className="h-4 rounded" style={{ backgroundColor: tone }} />;
              })}
            </div>
          </div>
        </div>
      );
    }

    if (activeModule === "findings") {
      return (
        <div className="space-y-6">
          <h2 className="text-[20px] font-semibold text-[#111827]">Fraud Findings</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className={cardClass}><p className={sectionTitleClass}>High Severity</p><p className="mt-2 text-[24px] font-semibold text-[#DC2626]">4</p></div>
            <div className={cardClass}><p className={sectionTitleClass}>Resolved</p><p className="mt-2 text-[24px] font-semibold text-[#16A34A]">7</p></div>
            <div className={cardClass}><p className={sectionTitleClass}>Pending Review</p><p className="mt-2 text-[24px] font-semibold text-[#D97706]">3</p></div>
          </div>
          <div className={cardClass}>
            <table className="w-full border-collapse text-left text-[13px]"><thead><tr className="border-b border-[#E5E7EB] text-[#6B7280]"><th className="py-2 font-medium">Issue</th><th className="py-2 font-medium">Severity</th><th className="py-2 font-medium">Location</th><th className="py-2 font-medium">Status</th></tr></thead><tbody>{findings.map((item, idx) => <tr key={item.title} className="border-b border-[#E5E7EB] last:border-b-0"><td className="py-2 text-[#111827]">{item.title}</td><td className="py-2 text-[#475569]">{item.tone === "risk" ? "High" : item.tone === "warn" ? "Medium" : "Low"}</td><td className="py-2 text-[#475569]">Page {idx + 1}</td><td className="py-2 text-[#111827]">{item.status}</td></tr>)}</tbody></table>
          </div>
          <div className={cardClass}>
            <p className={sectionTitleClass}>Evidence Snapshots</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {["Transaction row", "Signature block", "Metadata panel"].map((label) => (
                <div key={label} className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] p-3">
                  <div className="h-24 rounded bg-gradient-to-br from-[#E2E8F0] to-[#CBD5E1]" />
                  <p className="mt-2 text-[12px] font-medium text-[#111827]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeModule === "caseNotes") {
      return (
        <div className="space-y-6">
          <h2 className="text-[20px] font-semibold text-[#111827]">Analyst Notes</h2>
          <div className={cardClass}><p className={sectionTitleClass}>Case Notes</p><textarea value={analystNotes} onChange={(event) => setAnalystNotes(event.target.value)} placeholder="Write investigation notes..." className="mt-4 h-72 w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-[13px] text-[#111827] outline-none focus:border-[#2563EB]" /></div>
          <div className={cardClass}>
            <p className={sectionTitleClass}>Recent Note Fragments</p>
            <div className="mt-3 space-y-2 text-[13px] text-[#475569]">
              <div className="rounded-lg bg-[#FAFAFA] px-3 py-2">Confirmed mismatch between uploaded statement and signed baseline.</div>
              <div className="rounded-lg bg-[#FAFAFA] px-3 py-2">Recommend secondary KYC verification before approval decision.</div>
              <div className="rounded-lg bg-[#FAFAFA] px-3 py-2">Escalation triggered for manual fraud review tier-2.</div>
            </div>
          </div>
        </div>
      );
    }

    if (activeModule === "auditTrail") {
      return (
        <div className="space-y-6">
          <h2 className="text-[20px] font-semibold text-[#111827]">Activity Log</h2>
          <div className={cardClass}><table className="w-full border-collapse text-left text-[13px]"><thead><tr className="border-b border-[#E5E7EB] text-[#6B7280]"><th className="py-2 font-medium">Time</th><th className="py-2 font-medium">Action</th><th className="py-2 font-medium">User</th><th className="py-2 font-medium">Channel</th></tr></thead><tbody>{auditEvents.map((row) => <tr key={`${row.time}-${row.action}`} className="border-b border-[#E5E7EB] last:border-b-0"><td className="py-2 text-[#475569]">{row.time}</td><td className="py-2 text-[#111827]">{row.action}</td><td className="py-2 text-[#475569]">{row.user}</td><td className="py-2 text-[#475569]">{row.channel}</td></tr>)}</tbody></table></div>
          <div className={cardClass}>
            <p className={sectionTitleClass}>Audit Integrity Summary</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-[#FAFAFA] p-3"><p className="text-[12px] text-[#6B7280]">Signed events</p><p className="mt-1 text-[20px] font-semibold text-[#111827]">412</p></div>
              <div className="rounded-lg bg-[#FAFAFA] p-3"><p className="text-[12px] text-[#6B7280]">Checksum drift</p><p className="mt-1 text-[20px] font-semibold text-[#111827]">0</p></div>
              <div className="rounded-lg bg-[#FAFAFA] p-3"><p className="text-[12px] text-[#6B7280]">Retention</p><p className="mt-1 text-[20px] font-semibold text-[#111827]">180 days</p></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h2 className="text-[20px] font-semibold text-[#111827]">Export Evidence Package</h2>
        <div className={cardClass}><p className={sectionTitleClass}>Export Report</p><div className="mt-4 grid gap-3 sm:grid-cols-3"><button type="button" className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-[13px] font-medium text-[#111827] transition hover:bg-[#F3F4F6]">Download PDF</button><button type="button" className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-[13px] font-medium text-[#111827] transition hover:bg-[#F3F4F6]">Download JSON</button><button type="button" className="rounded-lg bg-[#2563EB] px-4 py-3 text-[13px] font-medium text-white transition hover:bg-[#1D4ED8]">Share Case</button></div></div>
        <div className={cardClass}>
          <p className={sectionTitleClass}>Package Contents</p>
          <div className="mt-3 space-y-2 text-[13px] text-[#475569]">
            <div className="flex items-center justify-between rounded-lg bg-[#FAFAFA] px-3 py-2"><span>Case Summary PDF</span><span>1.2 MB</span></div>
            <div className="flex items-center justify-between rounded-lg bg-[#FAFAFA] px-3 py-2"><span>Evidence JSON</span><span>420 KB</span></div>
            <div className="flex items-center justify-between rounded-lg bg-[#FAFAFA] px-3 py-2"><span>Signature Snippets</span><span>3 assets</span></div>
            <div className="flex items-center justify-between rounded-lg bg-[#FAFAFA] px-3 py-2"><span>Audit Log CSV</span><span>88 KB</span></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-6 font-inter text-[#111827]">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <header className="flex h-14 items-center justify-between border-b border-[#EEF2F7] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] px-4 md:px-6">
          <div className="flex items-center gap-2 text-[13px] text-[#6B7280]"><Home className="h-4 w-4" /><span>Home</span><ChevronRight className="h-3.5 w-3.5" /><span>John&apos;s Application</span></div>
          <div className="text-center text-[22px] font-semibold tracking-[-0.2px] text-[#111827]">forensiq<span className="text-[#2563EB]">.</span>ai</div>
          <div className="flex items-center gap-3"><div className="text-right"><p className="text-[12px] font-medium text-[#1F2937]">John O&apos;Connor</p><p className="text-[12px] text-[#6B7280]">Admin</p></div><ChevronDown className="h-4 w-4 text-[#6B7280]" /></div>
        </header>

        <div className="grid gap-6 p-4 md:p-6 xl:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="self-start rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_2px_6px_rgba(0,0,0,0.04)] xl:sticky xl:top-24">
            <p className="rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.04em] text-[#374151]">Dashboard Modules</p>
            <nav className="mt-3 space-y-2">
              {dashboardMenu.map((item) => {
                const active = activeModule === item.key;
                return (
                  <button key={item.key} type="button" onClick={() => setActiveModule(item.key)} className={`w-full rounded-lg border px-3.5 py-2.5 text-left transition-all duration-200 ${active ? "border-[#DBEAFE] bg-[#EFF6FF]" : "border-transparent bg-white hover:border-[#E5E7EB] hover:bg-[#F3F4F6]"}`}>
                    <p className={`text-[13px] font-semibold ${active ? "text-[#1D4ED8]" : "text-[#111827]"}`}>{item.label}</p>
                    <p className="mt-1 text-[11px] text-[#6B7280]">{item.description}</p>
                  </button>
                );
              })}
            </nav>
          </aside>

          <motion.section key={activeModule} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: "easeOut" }} className="min-w-0">
            {renderWorkspace()}
          </motion.section>
        </div>
      </div>
    </div>
  );
};
