import { Download, GraduationCap, Briefcase, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const education = [
  {
    institution: "Debre Birhan University",
    degree: "Bachelor's degree, Electrical and Computer Engineering",
    location: "Debre Birhan, Ethiopia",
    period: "Oct 2019 — May 2024",
    rating: 5,
  },
  {
    institution: "ALX Africa",
    degree: "ALX Ventures Freelance acadamy",
    location: "Remote",
    period: "Nov 2025 — Dec 2025",
    rating: 5,
  },
   {
    institution: "ALX Africa",
    degree: " ALX Professional Foundations program",
    location: "Remote",
    period: "oct 2025 — Dec 2025",
    rating: 5,
  },
];

const experience = [
  {
    role: "Sr Electrical System Designer",
    company: "Tibeb Design and Build pls",
    type: "Full time",
    location: "Addis Ababa, Ethiopia",
    period: "Oct 2024 — Present · 1 yr+",
    rating: 5,
  },
  {
    role: "Jr. UI/UX Designer",
    company: "Emawa shopping",
    type: "Part time",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2022 — Present",
    rating: 5,
  },
];

const skills = [
  { name: "Mobile App Design", percentage: 95 },
  { name: "Electrical System Design", percentage: 90 },
  { name: "Web Design", percentage: 80 },
  { name: "Graphic Design", percentage: 80 },
];

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#cbd5e1] font-medium">{name}</span>
        <span className="text-[#00d9ff] font-mono text-sm">{percentage}%</span>
      </div>
      <div className="h-3 bg-[#112240] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function ResumeSection() {
  return (
    <div className="space-y-12">
      {/* Header with Download Button */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-display font-bold text-white"></h2>
        <Button className="bg-[#00d9ff] hover:bg-[#0ea5e9] text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 w-full md:w-auto">
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </Button>
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#00d9ff]/10 p-3 rounded-lg">
            <GraduationCap className="w-6 h-6 text-[#00d9ff]" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white">
            Education
          </h3>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a2332] rounded-2xl p-6 border border-[#00d9ff]/10 hover:border-[#00d9ff]/30 transition-all duration-200 relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-3 h-3 bg-[#00d9ff] rounded-full -translate-x-1/2" />
              {index !== education.length - 1 && (
                <div className="absolute left-0 top-11 bottom-0 w-px bg-[#00d9ff]/20 -translate-x-1/2" />
              )}

              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-lg font-display font-bold text-white mb-1">
                    {item.institution}
                  </h4>
                  <p className="text-[#cbd5e1] mb-2">{item.degree}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#00d9ff] text-[#00d9ff]"
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-[#64748b] font-mono">
                <span>{item.location}</span>
                <span>•</span>
                <span>{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#00d9ff]/10 p-3 rounded-lg">
            <Briefcase className="w-6 h-6 text-[#00d9ff]" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white">
            Experience
          </h3>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a2332] rounded-2xl p-6 border border-[#00d9ff]/10 hover:border-[#00d9ff]/30 transition-all duration-200 relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-3 h-3 bg-[#00d9ff] rounded-full -translate-x-1/2" />
              {index !== experience.length - 1 && (
                <div className="absolute left-0 top-11 bottom-0 w-px bg-[#00d9ff]/20 -translate-x-1/2" />
              )}

              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-lg font-display font-bold text-white mb-1">
                    {item.role}
                  </h4>
                  <p className="text-[#cbd5e1] mb-2">
                    {item.company} · {item.type}
                  </p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#00d9ff] text-[#00d9ff]"
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-[#64748b] font-mono">
                <span>{item.location}</span>
                <span>•</span>
                <span>{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Skills */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#00d9ff]/10 p-3 rounded-lg">
            <Zap className="w-6 h-6 text-[#00d9ff]" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white">
            My Skills
          </h3>
        </div>

        <div className="bg-[#1a2332] rounded-2xl p-6 border border-[#00d9ff]/10">
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </div>
  );
}
