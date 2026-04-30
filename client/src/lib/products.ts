import valvesImage from "../assets/heroimages/valves.png";
import butterflyImage from "../assets/heroimages/butterfly.png";
import valveRoomImage from "../assets/heroimages/valve room.png";
import valveRoomImage2 from "../assets/heroimages/vlvroom.png";
import valveRoomImage3 from "../assets/heroimages/vlvroom2.png";
import altValveImage from "../assets/heroimages/al vlv.png";
import serviceImage from "../assets/heroimages/service.png";
import serviceImage2 from "../assets/heroimages/serv2.png";

export type ProductItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  material: string;
  classRating: string;
  dimensions: string;
  operatingPressure: string;
  endConnections: string;
  applications: string;
};

export const PRODUCT_ITEMS: ProductItem[] = [
  {
    slug: "gate-valves",
    title: "Gate Valves",
    description:
      "Used for on/off control in pipelines. Available in cast iron, stainless steel, and brass. Suitable for water, oil, gas, and steam applications.",
    image: valvesImage,
    alt: "Industrial gate valve showcase",
    badge: "Flow Control",
    material: "Cast Iron, Carbon Steel, Stainless Steel",
    classRating: "Class 150 / 300 / 600",
    dimensions: "DN15 to DN600",
    operatingPressure: "Up to PN40",
    endConnections: "Flanged, threaded, socket weld",
    applications: "Water lines, utilities, process isolation",
  },
  {
    slug: "globe-valves",
    title: "Globe Valves",
    description:
      "Ideal for throttling and flow regulation. Manufactured in various pressure ratings and end connections for industrial and commercial use.",
    image: valveRoomImage,
    alt: "Globe valve industrial setup",
    badge: "Regulation",
    material: "Carbon Steel, Stainless Steel",
    classRating: "Class 150 / 300",
    dimensions: "DN15 to DN300",
    operatingPressure: "Up to PN25",
    endConnections: "Flanged, screwed, welded",
    applications: "Steam, cooling water, flow balancing",
  },
  {
    slug: "ball-valves",
    title: "Ball Valves",
    description:
      "Quarter-turn operation for quick shutoff. Available in full bore and reduced bore, with threaded, flanged, or welded ends.",
    image: altValveImage,
    alt: "Ball valve component image",
    badge: "Quick Shutoff",
    material: "SS304, SS316, Carbon Steel, Brass",
    classRating: "Class 150 / 300",
    dimensions: "DN15 to DN400",
    operatingPressure: "Up to PN63",
    endConnections: "Threaded, flanged, welded",
    applications: "Fast shutoff, chemical service, pipelines",
  },
  {
    slug: "butterfly-valves",
    title: "Butterfly Valves",
    description:
      "Lightweight and cost-effective flow control solution. Used widely in water treatment, HVAC, and chemical industries.",
    image: butterflyImage,
    alt: "Butterfly valve product image",
    badge: "Compact Design",
    material: "Ductile Iron, Stainless Steel, CF8M",
    classRating: "Class 150 / 300",
    dimensions: "DN50 to DN1200",
    operatingPressure: "Up to PN16 / PN25",
    endConnections: "Wafer, lug, flanged",
    applications: "Water treatment, HVAC, bulk transfer",
  },
  {
    slug: "check-valves",
    title: "Check Valves",
    description:
      "Prevents reverse flow in pipelines. Available in swing, lift, and dual plate types for various fluid applications.",
    image: valveRoomImage2,
    alt: "Industrial valve room view",
    badge: "Reverse Flow Protection",
    material: "Cast Iron, Carbon Steel, Stainless Steel",
    classRating: "Class 150 / 300",
    dimensions: "DN15 to DN500",
    operatingPressure: "Up to PN40",
    endConnections: "Flanged, wafer, swing type",
    applications: "Pump discharge, backflow prevention",
  },
  {
    slug: "pressure-relief-valves",
    title: "Pressure Relief Valves",
    description:
      "Automatically releases excess pressure to protect equipment and systems. Compliant with industrial safety standards.",
    image: serviceImage,
    alt: "Valve service and inspection work",
    badge: "Safety",
    material: "Brass, Bronze, Stainless Steel",
    classRating: "Set pressure configurable",
    dimensions: "DN15 to DN200",
    operatingPressure: "Custom set pressure ranges",
    endConnections: "Threaded, flanged",
    applications: "Overpressure protection, safety systems",
  },
  {
    slug: "needle-valves",
    title: "Needle Valves",
    description:
      "Precise flow control for instrumentation and hydraulic systems. Available in stainless steel and carbon steel.",
    image: serviceImage2,
    alt: "Valve after-service inspection",
    badge: "Precision",
    material: "Stainless Steel, Carbon Steel",
    classRating: "Class 600",
    dimensions: "1/8 in to 2 in",
    operatingPressure: "High pressure instrumentation duty",
    endConnections: "Threaded, compression, welded",
    applications: "Instrumentation, gauge isolation, control panels",
  },
  {
    slug: "diaphragm-valves",
    title: "Diaphragm Valves",
    description:
      "Ideal for handling corrosive, abrasive, or sanitary fluids. Widely used in pharmaceuticals and food processing.",
    image: valveRoomImage3,
    alt: "Industrial valve storage area",
    badge: "Sanitary Service",
    material: "PVC, CPVC, Stainless Steel Lined",
    classRating: "Class 125 / 150",
    dimensions: "DN15 to DN300",
    operatingPressure: "Up to PN10 / PN16",
    endConnections: "Flanged, threaded, sanitary",
    applications: "Pharma, food processing, corrosive media",
  },
  {
    slug: "pinch-valves",
    title: "Pinch Valves",
    description:
      "Simple elastomer-sleeved valves for abrasive and slurry service with strong isolation characteristics.",
    image: valveRoomImage,
    alt: "Industrial valve installation area",
    badge: "Slurry Duty",
    material: "Aluminum body, rubber sleeve options",
    classRating: "Industrial duty",
    dimensions: "DN25 to DN450",
    operatingPressure: "Up to PN10 / PN16",
    endConnections: "Flanged, clamp",
    applications: "Slurries, powders, abrasive flow",
  },
  {
    slug: "knife-gate-valves",
    title: "Knife Gate Valves",
    description:
      "Heavy-duty shutoff valves designed for slurry, pulp, and solids-laden media with reliable cut-through action.",
    image: valvesImage,
    alt: "Knife gate valve style product image",
    badge: "Heavy Duty",
    material: "Cast Iron, Stainless Steel",
    classRating: "Class 150 / 300",
    dimensions: "DN50 to DN900",
    operatingPressure: "Up to PN16",
    endConnections: "Wafer, flanged",
    applications: "Mining, pulp, wastewater, solids handling",
  },
];

export const PRODUCT_CAROUSEL_ITEMS = PRODUCT_ITEMS.slice(0, 8);
