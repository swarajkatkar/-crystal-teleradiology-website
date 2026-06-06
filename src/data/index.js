// ─── Navigation links ────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",       to: "/"          },
  { label: "About",      to: "/about"     },
  { label: "Services",   to: "/services"  },
  { label: "Technology", to: "/technology" },
  { label: "Process",    to: "/process"   },
  { label: "Team",       to: "/team"      },
  { label: "Clients",    to: "/clients"   },
  { label: "Contact",    to: "/contact"   },
];

// ─── Trust / stat indicators (Home + Clients) ─────────────────────────────────
export const STATS = [
  { icon: "🏥", value: "14+",      label: "Centers Served" },
  { icon: "📍", value: "MH & MP",  label: "Maharashtra & Madhya Pradesh" },
  { icon: "🕐", value: "24/7",     label: "Reporting Availability" },
  { icon: "🤝", value: "ImageBytes", label: "Technology Partner" },
];

// ─── Services data (Home preview + Services page) ─────────────────────────────
export const SERVICES = [
  {
    id: "ct",
    icon: "🧠",
    title: "CT Scan Reporting",
    description:
      "Expert CT reporting with one of India's fastest turnaround times, covering the full range of CT modalities.",
    items: [
      { label: "Brain CT",        desc: "Stroke, hemorrhage, trauma, and space-occupying lesions." },
      { label: "Whole-Body CT",   desc: "Comprehensive trauma and oncology staging scans." },
      { label: "CT Angiography",  desc: "Vascular imaging of coronary, peripheral, and cerebral vessels." },
      { label: "Fast Turnaround", desc: "Reports delivered in ~10 minutes, even at 3 AM." },
    ],
    linkTo: "/services",
  },
  {
    id: "mri",
    icon: "🔬",
    title: "MRI Scan Reporting",
    description:
      "High-precision MRI interpretation across all body regions by specialist MD/DNB radiologists.",
    items: [
      { label: "Brain MRI",        desc: "Demyelination, tumors, vascular malformations, and epilepsy." },
      { label: "Advanced Imaging", desc: "DWI, perfusion, spectroscopy, and functional MRI sequences." },
      { label: "Oncology Reports", desc: "Staging, treatment response, and follow-up tumor assessments." },
      { label: "MSK & Body",       desc: "Joints, spine, abdomen, pelvis, and soft tissue lesions." },
    ],
    linkTo: "/services",
  },
  {
    id: "xray",
    icon: "📡",
    title: "X-Ray Reporting",
    description:
      "Rapid, structured X-ray reports for all general and specialised procedures with digital delivery.",
    items: [
      { label: "General X-Rays", desc: "Chest, spine, extremities, and abdomen views." },
      { label: "HSG",            desc: "Hystero-salpingography for infertility workup." },
      { label: "IVP",            desc: "Intravenous pyelography for urinary tract evaluation." },
      { label: "Barium Studies", desc: "Upper GI, barium swallow, and enema procedures." },
    ],
    linkTo: "/services",
  },
  {
    id: "tele",
    icon: "🌐",
    title: "Teleradiology Services",
    description:
      "End-to-end remote radiology solutions extending specialist expertise to your facility around the clock.",
    items: [
      { label: "24/7 Reporting",   desc: "Night coverage, weekends, and holidays — no gaps." },
      { label: "Remote Access",    desc: "Secure cloud PACS accessible from any device." },
      { label: "Backup Support",   desc: "Emergency overflow reporting for high-volume centers." },
      { label: "Digital Delivery", desc: "Reports via email, portal, WhatsApp, or HL7 integration." },
    ],
    linkTo: "/services",
  },
];

// ─── Why-choose-us features (Home) ───────────────────────────────────────────
export const WHY_FEATURES = [
  { icon: "⚡", title: "Ultra-Fast Turnaround",      description: "CT reports in ~10 min, MRI in ~30 min — even at 3 AM." },
  { icon: "🎓", title: "Expert MD/DNB Radiologists", description: "Every report signed by qualified, experienced specialists." },
  { icon: "🕐", title: "Round-the-Clock Availability", description: "24/7/365 coverage — no service gaps, ever." },
  { icon: "💰", title: "Cost-Effective",             description: "Reduce overhead by 40–60% versus in-house radiology staff." },
  { icon: "💻", title: "Technology-Driven",          description: "Cloud PACS, zero-footprint viewer, and mobile-ready platform." },
  { icon: "🔒", title: "Secure & Compliant",         description: "End-to-end encrypted transfers and HIPAA-aligned workflows." },
];

// ─── Workflow steps (Home + Process page) ────────────────────────────────────
export const WORKFLOW_STEPS = [
  {
    number: 1,
    title: "Image Upload",
    description:
      "The diagnostic center captures DICOM images and pushes them securely to our cloud PACS via the Imagebytes web portal — no software installation required.",
  },
  {
    number: 2,
    title: "Secure Transfer",
    description:
      "Images are transmitted using end-to-end encryption over a HIPAA-aligned secure channel. Studies are auto-assigned to available radiologists based on modality and priority.",
  },
  {
    number: 3,
    title: "Expert Analysis",
    description:
      "A qualified MD/DNB radiologist reviews the study using our zero-footprint DICOM viewer — complete with MPR, measurement tools, and prior-comparison overlays.",
  },
  {
    number: 4,
    title: "Report Generation",
    description:
      "The radiologist dictates or types a structured report using our integrated reporting system, following standardized formats across all modalities.",
  },
  {
    number: 5,
    title: "Digital Delivery",
    description:
      "The finalized, signed report is delivered via email, web portal, WhatsApp, or HL7/FHIR integration — typically within 10–30 minutes.",
  },
];

// ─── Technology features (Home + Technology page) ────────────────────────────
export const TECH_FEATURES = [
  { icon: "🖥️", title: "PACS Web Portal",       desc: "Browser-based image access from any device, anywhere." },
  { icon: "☁️", title: "Cloud Storage",           desc: "Secure, redundant cloud archiving with instant retrieval." },
  { icon: "👁️", title: "Zero-Footprint Viewer",  desc: "No software installation needed — works in any browser." },
  { icon: "📱", title: "Mobile Access",           desc: "Full report and image access on iOS and Android devices." },
];

// ─── Doctor profiles (Home + Team page) ──────────────────────────────────────
export const DOCTORS = [
  {
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&h=450&q=80",
    name: "Dr. Ashok Sharma",
    qualification: "MD, DNB",
    specialization: "CT / MRI Specialist",
    experience: "7+ Years",
    background: "Former Lecturer, BJMC Pune",
    expertise: ["Brain CT & MRI", "CT Angiography", "Whole-Body CT", "Neuro MRI"],
  },
  {
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&h=450&q=80",
    name: "Dr. Amol Musale",
    qualification: "MD Radiodiagnosis",
    specialization: "CT / MRI Reporting",
    experience: "5+ Years",
    background: "BJMC Pune Background",
    expertise: ["CT Scan Reporting", "MRI Interpretation", "Chest Imaging", "Abdominal Radiology"],
  },
  {
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&h=450&q=80",
    name: "Dr. Rohan Sawant",
    qualification: "MD Radiodiagnosis",
    specialization: "Fetal Imaging",
    experience: "6+ Years",
    background: "Fellowship in Fetal Medicine · Apollo Hospitals",
    expertise: ["Fetal Ultrasound", "Obstetric Imaging", "Anomaly Scans", "3D/4D Imaging"],
  },
];

// ─── Client facilities (Home + Clients page) ─────────────────────────────────
export const CLIENTS = [
  { abbr: "JD", name: "Jagdamba Diagnostic",       location: "Nanded, Maharashtra",    desc: "Full CT & MRI reporting coverage, 24/7." },
  { abbr: "CN", name: "CNS Hospital",              location: "Solapur, Maharashtra",   desc: "Neurology-focused CT and MRI reporting." },
  { abbr: "LM", name: "Lakshmi Memorial Hospital", location: "Indore, Madhya Pradesh", desc: "Multi-modality reporting across all shifts." },
  { abbr: "FD", name: "Fabtech Diagnostics",       location: "Maharashtra",            desc: "High-volume diagnostic center support." },
];

// ─── External image URLs ──────────────────────────────────────────────────────
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  tech: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
};

// ─── About page data ──────────────────────────────────────────────────────────
export const CORE_VALUES = [
  { icon: "🎯", title: "Clinical Accuracy",    description: "Every report undergoes rigorous quality checks by MD/DNB specialists trained at premier institutions." },
  { icon: "⚡", title: "Timely Reporting",     description: "CT reports in ~10 min, MRI in ~30 min. Speed without compromising quality." },
  { icon: "🌐", title: "Accessibility",        description: "Bridging urban-rural gaps by extending expert radiology to underserved and remote healthcare centers." },
  { icon: "❤️", title: "Patient-Centric",      description: "Every decision is guided by what is best for the patient — accuracy, safety, and clarity." },
  { icon: "💻", title: "Technology-Driven",    description: "Cloud PACS, zero-footprint viewer, and secure digital workflows power our operations." },
  { icon: "🤝", title: "Trust & Reliability",  description: "14+ centers rely on us daily. We treat every report as a critical clinical responsibility." },
];

export const INSTITUTIONS = [
  { abbr: "BJMC", name: "B.J. Medical College, Pune" },
  { abbr: "KEM",  name: "KEM Hospital, Mumbai" },
  { abbr: "JJ",   name: "J.J. Hospital, Mumbai" },
  { abbr: "HCG",  name: "HCG Cancer Hospital, Bangalore" },
];

// ─── Contact page data ────────────────────────────────────────────────────────
export const CONTACT_INFO = [
  { icon: "📞", label: "Phone",   value: "+91 00000 00000",               href: "tel:+910000000000" },
  { icon: "✉️", label: "Email",   value: "info@crystalteleradiology.com", href: "mailto:info@crystalteleradiology.com" },
  { icon: "📍", label: "Address", value: "Pune, Maharashtra, India",       href: null },
  { icon: "🕐", label: "Hours",   value: "24 × 7 × 365",                  href: null },
];

export const MODALITIES = [
  "CT Scan Reporting",
  "MRI Scan Reporting",
  "X-Ray Reporting",
  "Full Teleradiology",
  "Other",
];

// ─── Technology page data ─────────────────────────────────────────────────────
export const CORE_SYSTEMS = [
  { icon: "🖥️", title: "PACS Web Portal",      desc: "Browser-based image access from any device — no installation required." },
  { icon: "🔗", title: "RIS/HIMS Integration", desc: "Seamlessly connects with your existing Radiology or Hospital Information Systems." },
  { icon: "☁️", title: "Cloud Storage",         desc: "Unlimited, encrypted DICOM archiving with instant on-demand retrieval." },
];

export const PLATFORM_FEATURES = [
  { icon: "🔒", title: "HIPAA-Compliant",  desc: "End-to-end encryption and audit trails on every study." },
  { icon: "♾️", title: "Unlimited Storage", desc: "No storage caps — archive every study indefinitely." },
  { icon: "🌍", title: "No Installation",   desc: "Zero-footprint viewer works in any modern browser." },
  { icon: "📱", title: "Cross-Platform",    desc: "iOS, Android, Windows, and macOS — any device, anywhere." },
];

export const ADVANCED_TOOLS = [
  { icon: "🧩", title: "MPR Views",          desc: "Multi-planar reconstruction for axial, coronal, and sagittal analysis." },
  { icon: "📐", title: "Measurement Tools",  desc: "Accurate calibrated distance, area, and density measurements." },
  { icon: "🖼️", title: "Image Overlays",     desc: "Comparison and fusion overlays for longitudinal study tracking." },
];
