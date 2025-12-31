import { useState } from "react";
/**import {
  Home as HomeIcon,
  FileText,
  Briefcase,
  Award,
  Mail,
  Video,
} from "lucide-react";**/

import Sidebar from "./Sidebar";
import MobileProfileHeader from "./MobileProfileHeader";
import AboutSection from "./sections/AboutSection";
import ResumeSection from "./sections/ResumeSection";
import PortfolioSection from "./sections/PortfolioSection";
import CertificatesSection from "./sections/CertificatesSection";
import ContactSection from "./sections/ContactSection";

type Section =
  | "About"
  | "Elevator pitch"
  | "Resume"
  | "Portfolio"
  | "Certificates"
  | "Contact";

/** Icon map (FIXED & COMPLETE) */
/**const sectionIcons: Record<Section, React.ElementType> = {
  About: HomeIcon,
  "Elevator pitch": Video,
  Resume: FileText,
  Portfolio: Briefcase,
  Certificates: Award,
  Contact: Mail,
};**/

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("About");

  const sections: Section[] = [
    "About",
    "Elevator pitch",
    "Resume",
    "Portfolio",
    "Certificates",
    "Contact",
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <AboutSection />;

      case "Elevator pitch":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-white">
              
            </h2>
            <div className="bg-[#112240] rounded-2xl overflow-hidden border border-[#00d9ff]/10">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/vksBO0AI0qM"
                  title="Elevator Speech"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        );

      case "Resume":
        return <ResumeSection />;

      case "Portfolio":
        return <PortfolioSection />;

      case "Certificates":
        return <CertificatesSection />;

      case "Contact":
        return <ContactSection />;

      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] p-4 md:p-8">
      {/* Mobile Profile Header */}
      <div className="lg:hidden mb-4">
        <MobileProfileHeader />
      </div>

      <div className="max-w-[1400px] mx-auto flex gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 rounded-2xl border border-[#00d9ff]/10 overflow-hidden">
          {/* Header */}
          <div className="flex">
            <div className="bg-[#1a2332] flex-1 px-6 lg:px-10 pt-6 pb-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#e2e8f0]">
                {activeSection}
              </h2>
              <div className="w-12 h-1 bg-[#00d9ff] mt-3 rounded-full" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex bg-[#112240] rounded-bl-3xl px-8 pt-8 gap-6">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`pb-4 relative ${
                    activeSection === section
                      ? "text-[#00d9ff]"
                      : "text-[#64748b] hover:text-[#cbd5e1]"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00d9ff]" />
                  )}
                </button>
              ))}
            </nav>
          </div>

  {/* Mobile Bottom Navigation (Text Only) */}
<div className="lg:hidden fixed bottom-4 left-0 right-0 z-50 px-4">
  <div className="mx-auto max-w-md bg-[#0f1c2e]/80 backdrop-blur-xl border border-[#00d9ff]/20 rounded-2xl shadow-lg">
    <div className="flex items-center gap-2 px-3 py-2 overflow-x-auto scrollbar-hide">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm font-medium transition-all duration-200 ${
            activeSection === section
              ? "bg-[#00d9ff]/15 text-[#00d9ff]"
              : "text-[#94a3b8] hover:text-white"
          }`}
        >
          {section}
        </button>
      ))}
    </div>
  </div>
</div>


          {/* Content */}
          <div className="p-6 md:p-10 bg-[#1a2332] animate-in fade-in duration-300">
            {renderSection()}

            <footer className="mt-16 pt-8 border-t border-[#00d9ff]/10 text-center">
              <p className="text-sm text-[#64748b]">
                UI Designed by {" "}
                <a
                  href="https://github.com/Henok-Belachew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00d9ff] hover:text-[#0ea5e9]"
                >
                  Henok Belachew
                </a>
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
