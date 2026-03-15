type MarqueeItem = {
  label: string;
  logo: string;
};

const trustItems: MarqueeItem[] = [
  {
    label: "DigiLocker",
    logo: "https://unpkg.com/lucide-static/icons/shield-check.svg",
  },
  {
    label: "NPTEL",
    logo: "https://unpkg.com/lucide-static/icons/graduation-cap.svg",
  },
  {
    label: "Aadhaar",
    logo: "https://unpkg.com/lucide-static/icons/fingerprint.svg",
  },
  {
    label: "QR Code",
    logo: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/qr-code.svg",
  },
  {
    label: "PAN",
    logo: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/person-vcard.svg",
  },
  {
    label: "eSign",
    logo: "https://unpkg.com/lucide-static/icons/file-signature.svg",
  },
  {
    label: "UPI",
    logo: "https://unpkg.com/lucide-static/icons/indian-rupee.svg",
  },
  {
    label: "CKYC",
    logo: "https://unpkg.com/lucide-static/icons/database.svg",
  },
];

const techItems: MarqueeItem[] = [
  {
    label: "Python",
    logo: "https://cdn.simpleicons.org/python/000000",
  },
  {
    label: "PyTorch",
    logo: "https://cdn.simpleicons.org/pytorch/000000",
  },
  {
    label: "OpenCV",
    logo: "https://cdn.simpleicons.org/opencv/000000",
  },
  {
    label: "PDF",
    logo: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/filetype-pdf.svg",
  },
  {
    label: "NumPy",
    logo: "https://cdn.simpleicons.org/numpy/000000",
  },
  {
    label: "Pandas",
    logo: "https://cdn.simpleicons.org/pandas/000000",
  },
  {
    label: "TensorFlow",
    logo: "https://cdn.simpleicons.org/tensorflow/000000",
  },
  {
    label: "scikit-learn",
    logo: "https://cdn.simpleicons.org/scikitlearn/000000",
  },
  {
    label: "FastAPI",
    logo: "https://cdn.simpleicons.org/fastapi/000000",
  },
  {
    label: "Docker",
    logo: "https://cdn.simpleicons.org/docker/000000",
  },
];

const MarqueeRow = ({
  items,
  animation,
}: {
  items: MarqueeItem[];
  animation: string;
}) => {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max items-center gap-14 md:gap-20"
        style={{ animation }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="inline-flex items-center gap-3"
          >
            <img
              src={item.logo}
              alt={`${item.label} logo`}
              className="h-10 w-10 opacity-75 [filter:grayscale(100%)_brightness(38%)] md:h-12 md:w-12"
            />
            <span className="text-lg font-semibold tracking-[-0.2px] text-slate-600 md:text-xl">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LogoCarouselContent = () => {
  return (
    <div className="space-y-12 md:space-y-14">
      <style>
        {`@keyframes home-marquee-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes home-marquee-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }`}
      </style>

      <div className="space-y-6">
        <h3 className="text-center text-2xl font-semibold tracking-[-0.3px] text-slate-700 md:text-3xl">
          Trusted document verification ecosystems
        </h3>
        <MarqueeRow items={trustItems} animation="home-marquee-left 34s linear infinite" />
      </div>

      <div className="space-y-6">
        <h3 className="text-center text-2xl font-semibold tracking-[-0.3px] text-slate-700 md:text-3xl">
          Powered by AI document forensics
        </h3>
        <MarqueeRow items={techItems} animation="home-marquee-right 34s linear infinite" />
      </div>
    </div>
  );
};
