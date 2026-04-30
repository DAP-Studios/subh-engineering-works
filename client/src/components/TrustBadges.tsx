/**
 * Trust Badges Component
 * Display certifications, compliance, and social proof
 */

export default function TrustBadges() {
  const badges = [
    {
      icon: "✓",
      title: "ISO 9001 Certified",
      description: "Quality Management System",
    },
    {
      icon: "✓",
      title: "API 598 Compliant",
      description: "100% Hydrostatic Testing",
    },
    {
      icon: "✓",
      title: "API 600/602 Approved",
      description: "Gate Valve Standards",
    },
    {
      icon: "✓",
      title: "BS 1873 Certified",
      description: "Globe Valve Standards",
    },
    {
      icon: "✓",
      title: "24-Hour Support",
      description: "Emergency Response Team",
    },
    {
      icon: "✓",
      title: "50,000+ Valves Delivered",
      description: "Proven Track Record",
    },
  ];

  return (
    <div className="grid md:grid-cols-6 gap-4">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className="bg-white border-2 border-gray-200 p-4 text-center hover:border-brand-red transition"
        >
          <div className="text-3xl font-black text-brand-red mb-2">
            {badge.icon}
          </div>
          <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-1">
            {badge.title}
          </h3>
          <p className="text-xs text-gray-600">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}
