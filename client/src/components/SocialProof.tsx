/**
 * Social Proof Component
 * Display impressive metrics and statistics
 */

export default function SocialProof() {
  const stats = [
    {
      number: "500+",
      label: "Industrial Clients",
      description: "Trusted by leading companies worldwide",
    },
    {
      number: "50,000+",
      label: "Valves Delivered",
      description: "Successful installations globally",
    },
    {
      number: "99.2%",
      label: "On-Time Delivery",
      description: "Consistent and reliable service",
    },
    {
      number: "0.02%",
      label: "Failure Rate",
      description: "Industry-leading quality standards",
    },
    {
      number: "25+",
      label: "Years Experience",
      description: "Decades of engineering expertise",
    },
    {
      number: "24/7",
      label: "Technical Support",
      description: "Always available for assistance",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="text-center">
          <div className="text-5xl font-black text-brand-red mb-3">
            {stat.number}
          </div>
          <h3 className="text-lg font-black uppercase tracking-tight mb-2">
            {stat.label}
          </h3>
          <p className="text-sm text-gray-600">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}
