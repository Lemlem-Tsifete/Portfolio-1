import { ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "ALX Freelance Acadamy",
    issuer: "ALX Venture",
    issued: "Dec 2025",
    image: "https://i.imgur.com/eXUHCV0.png",
    verifyUrl:
      "https://savanna.alxafrica.com/certificates/RMFSTmH653?utm_campaign=205164743-ALX%20-%202025%20-%20TR%20-%20FLA%204W%20C0&utm_medium=email&_hsenc=p2ANqtz--xdoxVwjuCxE6AskKe5VgZ8ijTdhzlCuiSgHF7xBthYbziz53t3PzkEXopvlZbu2Oz-67SHpvvBjB-fMopY4TGg-ntgA&_hsmi=122758207&utm_content=122758207&utm_source=hs_email",
  },
  {
    title: "ALX Professional Foundations program",
    issuer: "ALX Professional Foundations program",
    issued: "Dec 2025",
    image: "https://i.imgur.com/3d3poVk.png",
    verifyUrl:
      "https://savanna.alxafrica.com/certificates/RMFSTmH653?utm_campaign=205164743-ALX%20-%202025%20-%20TR%20-%20FLA%204W%20C0&utm_medium=email&_hsenc=p2ANqtz--xdoxVwjuCxE6AskKe5VgZ8ijTdhzlCuiSgHF7xBthYbziz53t3PzkEXopvlZbu2Oz-67SHpvvBjB-fMopY4TGg-ntgA&_hsmi=122758207&utm_content=122758207&utm_source=hs_email",
  },
];

export default function CertificatesSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-display font-bold text-white">
        
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#1a2332] rounded-2xl overflow-hidden border border-[#00d9ff]/10 hover:border-[#00d9ff]/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00d9ff]/10 transition-all duration-200 group"
          >
            {/* Certificate Image */}
            <div className="aspect-video overflow-hidden bg-[#112240]">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Certificate Info */}
            <div className="p-5">
              <h3 className="text-lg font-display font-bold text-white mb-2 line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-sm text-[#cbd5e1] mb-1">{cert.issuer}</p>
              <p className="text-xs text-[#64748b] font-mono mb-4">
                Issued {cert.issued}
              </p>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#00d9ff] hover:text-[#0ea5e9] font-medium transition-colors"
              >
                Verify
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
