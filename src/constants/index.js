const navLinks = [
  { id: "products", title: "Processors" },
  { id: "technology", title: "Technology" },
  { id: "research", title: "Research" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];

const productLines = [
  {
    name: "VX-1 Neural Core",
    segment: "AI Edge",
    detail: "6 nm • 45 TOPS • Ultra-low power",
    price: "Contact Sales",
  },
  {
    name: "Aether X9",
    segment: "Cloud Compute",
    detail: "4 nm • 170 TOPS • Server-grade",
    price: "Contact Sales",
  },
  {
    name: "Helix M3",
    segment: "Wearables",
    detail: "8 nm • 12 TOPS • Compact package",
    price: "Contact Sales",
  },
  {
    name: "Nova Q7",
    segment: "Autonomous Systems",
    detail: "5 nm • 120 TOPS • Automotive certified",
    price: "Contact Sales",
  },
];

const developerKits = [
  {
    name: "VX DevKit",
    use: "AI models on edge devices",
    detail: "Starter kit • USB-C",
    price: "Coming Soon",
  },
  {
    name: "Aether Compute Board",
    use: "Cloud inference + simulation",
    detail: "PCIe board",
    price: "Pre-Order",
  },
  {
    name: "Helix Nano Board",
    use: "Wearable R&D + prototyping",
    detail: "Compact kit",
    price: "In Development",
  },
  {
    name: "Nova Auto Kit",
    use: "Robotics + vehicles",
    detail: "Industrial",
    price: "Request Access",
  },
];

const profileLists = [
  { imgPath: "/images/lab1.png" },
  { imgPath: "/images/lab2.png" },
  { imgPath: "/images/lab3.png" },
  { imgPath: "/images/lab4.png" },
];

const featureLists = [
  "Ultra-dense neural compute",
  "Thermal efficiency under sustained loads",
  "Secure silicon with on-chip encryption",
  "Optimized for AI inference at scale",
];

const goodLists = [
  "Designed for next-generation AI workloads",
  "Engineered for low-latency processing",
  "Energy-optimized nanometer architecture",
  "Built for real-time decision systems",
];

const storeInfo = {
  heading: "Global Headquarters",
  address: "Voltcore R&D Campus, 92 Quantum Drive, Palo Alto, CA 94304",
  contact: {
    phone: "+1 (555) 204-3182",
    email: "contact@voltcore.tech",
  },
};

const openingHours = [
  { day: "Mon–Fri", time: "09:00 – 18:00 PST" },
  { day: "Sat", time: "10:00 – 16:00 PST" },
  { day: "Sun", time: "Closed" },
];

const socials = [
  { name: "LinkedIn", icon: "/images/linkedin.png", url: "#" },
  { name: "Twitter", icon: "/images/x.png", url: "#" },
  { name: "YouTube", icon: "/images/youtube.png", url: "#" },
];

const heroProductHighlights = [
  {
    id: 1,
    name: "VX-1 Neural Core",
    image: "/images/chip1.png",
    title: "AI Acceleration Reimagined",
    description:
      "Purpose-built silicon for neural inference on the edge. Power efficiency without compromise.",
  },
  {
    id: 2,
    name: "Aether X9",
    image: "/images/chip2.png",
    title: "Compute for the Future",
    description:
      "Next-gen cloud-grade processor delivering massive throughput under extreme workloads.",
  },
  {
    id: 3,
    name: "Helix M3",
    image: "/images/chip3.png",
    title: "Performance in Miniature",
    description:
      "Wearable-class silicon designed for always-on intelligence in compact form factors.",
  },
  {
    id: 4,
    name: "Nova Q7",
    image: "/images/chip4.png",
    title: "Autonomy at Silicon Level",
    description:
      "Robotics and automotive compute platform engineered for reliability at speed.",
  },
];

export {
  navLinks,
  productLines,
  developerKits,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  heroProductHighlights,
};
