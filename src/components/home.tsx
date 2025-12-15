import { useState } from "react";
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
              Elevator pitch
            </h2>
            <div className="bg-[#112240] rounded-2xl overflow-hidden border border-[#00d9ff]/10">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/watch?v=vksBO0AI0qM"
                  title="Elevator Speech"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
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
      {/* Mobile Profile Header - Full Width Stacked Layout */}
      <div className="lg:hidden mb-4">
        <MobileProfileHeader />
      </div>

      <div className="max-w-[1400px] mx-auto flex gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 rounded-tl-3xl lg:rounded-tl-3xl rounded-2xl lg:rounded-none border border-[#00d9ff]/10 overflow-hidden">
          {/* Navigation Area */}
          <div className="flex">
            {/* Content Header - Left Side */}
            <div className="bg-[#1a2332] flex-1 px-6 lg:px-10 pt-6 lg:pt-8 pb-4 lg:pb-6">
              {/* Section Title with Accent Line */}
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#e2e8f0]">
                {activeSection}
              </h2>
              <div className="w-12 h-1 bg-[#00d9ff] mt-3 rounded-full" />
            </div>

            {/* Navigation Bar - Right Side with rounded bottom-left (Desktop) */}
            <nav className="bg-[#112240] rounded-bl-3xl px-8 pt-8 pb-0 hidden lg:flex gap-6">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`pb-4 text-base font-medium transition-all duration-200 relative whitespace-nowrap ${
                    activeSection === section
                      ? "text-[#00d9ff]"
                      : "text-[#64748b]/60 hover:text-[#cbd5e1]"
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

          {/* Mobile Navigation - Horizontal Scrollable Tab Bar */}
          <div className="lg:hidden bg-[#112240] border-t border-[#00d9ff]/10 px-4 py-3">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                    activeSection === section
                      ? "bg-[#00d9ff] text-[#0a192f]"
                      : "bg-[#1a2332] text-[#64748b] hover:text-[#cbd5e1] border border-[#00d9ff]/10"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-10 bg-[#1a2332] animate-in fade-in duration-300">
            {renderSection()}

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-[#00d9ff]/10 text-center">
              <p className="text-sm text-[#64748b]">
                UI Designed by{" "}
                <a
                  href="https://github.com/Henok-Belachew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00d9ff] hover:text-[#0ea5e9] transition-colors"
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
