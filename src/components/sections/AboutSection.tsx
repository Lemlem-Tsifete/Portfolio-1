import { Palette, Smartphone, PenTool, Settings } from "lucide-react";
import { useState } from "react";

// ---------------- SERVICES ----------------
const services = [
  {
    icon: Palette,
    title: "Website Design",
    description:
      "Create visually appealing and user-friendly websites tailored to your brand's identity.",
  },
  {
    icon: Settings,
    title: "Electrical System Design",
    description:
      "Designs and optimizes complex electrical systems, ensuring performance, safety, and efficiency from concept to completion.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description:
      "Craft intuitive and engaging mobile applications optimized for iOS and Android platforms.",
  },
  {
    icon: PenTool,
    title: "Graphics Design",
    description:
      "Create aesthetic, brand-consistent visual content using strong UI/UX principles across digital and print media.",
  },
];

// ---------------- SKILLS ----------------
const skills = {
  all: [
    // UI/UX
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Adobe XD",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    },
    {
      name: "Adobe Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    },

    // Web Development
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },

    // Electrical System Design
    {
      name: "AutoCAD",
      icon: "https://i.imgur.com/YcUDhV5.png",
    },
  ],

  "UI/UX design": [
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Adobe XD",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    },
    {
      name: "Adobe Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    },
  ],

  "Web development": [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
  ],

  "Electrical System Design": [
    {
      name: "AutoCAD",
      icon: "https://i.imgur.com/YcUDhV5.png",
    },
  ],
};

// ---------------- TOOLS ----------------
const tools = [
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Windows",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  },
  {
    name: "Kali Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Visual Studio Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<
    "all" | "UI/UX design" | "Web development" | "Electrical System Design"
  >("all");

  return (
    <div className="space-y-10">
      {/* Bio */}
      <div className="space-y-4">
        <p className="text-[#cbd5e1] leading-relaxed">
          I'm Lemlem Tsifete, an Electrical and Computer Engineering graduate
          with a passion for combining creativity and technology. I have 2+
          years of experience in UI/UX and graphic design, creating clean and
          user-centered digital interfaces.
        </p>
        <p className="text-[#cbd5e1] leading-relaxed">
          I also work on electrical system design, including accurate electrical
          layouts using AutoCAD and BOQ preparation. I have basic knowledge of
          Python, JavaScript, React, Flutter, and Node.js.
        </p>
        <p className="text-[#cbd5e1] leading-relaxed">
          Currently, I am learning cybersecurity through ALX. I am adaptable,
          motivated, and focused on building practical and impactful solutions.
        </p>
      </div>

      {/* My Services */}
      <div>
        <h2 className="text-3xl font-display font-bold text-white mb-8">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a2332] rounded-2xl p-6 border border-[#00d9ff]/10 hover:border-[#00d9ff]/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00d9ff]/10 transition-all duration-200 group"
            >
              <div className="bg-[#00d9ff]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00d9ff]/20 transition-colors">
                <service.icon className="w-6 h-6 text-[#00d9ff]" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Skillsets */}
      <div>
        <h2 className="text-3xl font-display font-bold text-white mb-6">
          Professional Skillsets
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-[#00d9ff]/10">
          {(
            [
              "all",
              "UI/UX design",
              "Web development",
              "Electrical System Design",
            ] as const
          ).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 text-sm font-medium transition-all duration-200 relative ${
                activeTab === tab
                  ? "text-[#00d9ff]"
                  : "text-[#64748b] hover:text-[#cbd5e1]"
              }`}
            >
              {tab === "all" ? "All Skills" : tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00d9ff]" />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {skills[activeTab].map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a2332] rounded-xl p-4 border border-[#00d9ff]/10 hover:border-[#00d9ff]/30 hover:shadow-lg hover:shadow-[#00d9ff]/20 transition-all duration-200 flex items-center justify-center group"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tools I Use (Separated) */}
      <div>
        <h2 className="text-3xl font-display font-bold text-white mb-6">
          Tools I Use
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#1a2332] rounded-xl p-4 border border-[#00d9ff]/10 hover:border-[#00d9ff]/30 hover:shadow-lg hover:shadow-[#00d9ff]/20 transition-all duration-200 flex items-center justify-center group"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
