import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  Github,
  Linkedin,
  CheckCircle2,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function MobileProfileHeader() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="bg-[#1a2332] rounded-2xl border border-[#00d9ff]/10 p-6 w-full">
      {/* Profile Section - Centered */}
      <div className="flex flex-col items-center mb-6">
        {/* Avatar */}
        <div className="relative mb-4">
          <img
            src="https://i.imgur.com/b9VixKi.png"
            alt="Lemlem Tsifete"
            className="w-24 h-24 rounded-full object-cover border-4 border-[#00d9ff]/20"
          />
        </div>

        {/* Name and Title */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-xl font-display font-bold text-white">
              Lemlem Tsifete
            </h1>
            <CheckCircle2 className="w-4 h-4 text-[#00d9ff]" />
          </div>
          <p className="text-xs text-[#cbd5e1] bg-[#112240] px-3 py-2 rounded-lg inline-block">
            Electrical System Designer | Graphics Designer | UI/UX Designer
          </p>
        </div>
      </div>

      {/* Social Links - Full Width Row */}
      <div className="flex justify-center gap-3 mb-6">
        <a
          href="https://github.com/Lemlem-Tsifete"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#112240] p-3 rounded-lg border border-[#00d9ff]/10 hover:border-[#00d9ff]/30 hover:scale-110 transition-all duration-200"
        >
          <Github className="w-5 h-5 text-[#cbd5e1]" />
        </a>
        <a
          href="https://www.linkedin.com/in/lemlem-tsifete/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#112240] p-3 rounded-lg border border-[#00d9ff]/10 hover:border-[#00d9ff]/30 hover:scale-110 transition-all duration-200"
        >
          <Linkedin className="w-5 h-5 text-[#cbd5e1]" />
        </a>
        <a
          href="https://t.me/lemlemtsifete"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#112240] p-3 rounded-lg border border-[#00d9ff]/10 hover:border-[#00d9ff]/30 hover:scale-110 transition-all duration-200"
        >
          <Send className="w-5 h-5 text-[#cbd5e1]" />
        </a>
        <a
          href="https://www.behance.net/lemlemtsifete"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#112240] p-3 rounded-lg border border-[#00d9ff]/10 hover:border-[#00d9ff]/30 hover:scale-110 transition-all duration-200"
        >
          <svg className="w-5 h-5 text-[#cbd5e1]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM3.495 7.6h2.42c.862 0 1.49-.2 1.885-.6.39-.4.586-.98.586-1.73 0-.5-.08-.92-.24-1.27-.16-.35-.39-.62-.67-.84-.28-.22-.61-.38-.98-.48-.37-.1-.78-.15-1.23-.15H3.495V7.6zm0 7.17h2.93c.44 0 .84-.05 1.21-.15.37-.1.69-.25.96-.44.27-.19.48-.44.63-.75.15-.31.23-.68.23-1.1 0-.86-.23-1.47-.69-1.81-.46-.34-1.08-.51-1.86-.51H3.495v4.76zm16.32-7.17c-.74 0-1.38.18-1.92.53-.53.35-.96.84-1.29 1.46-.33.62-.58 1.35-.76 2.19-.18.84-.27 1.76-.27 2.76 0 .98.09 1.89.27 2.73.18.84.43 1.57.76 2.19.33.62.76 1.11 1.29 1.46.54.35 1.18.53 1.92.53.74 0 1.38-.18 1.92-.53.54-.35.97-.84 1.3-1.46.33-.62.58-1.35.76-2.19.18-.84.27-1.75.27-2.73 0-1-.09-1.92-.27-2.76-.18-.84-.43-1.57-.76-2.19-.33-.62-.76-1.11-1.3-1.46-.54-.35-1.18-.53-1.92-.53zm0 11.53c-.44 0-.84-.17-1.21-.5-.37-.33-.69-.79-.96-1.39-.27-.6-.48-1.32-.63-2.16-.15-.84-.23-1.77-.23-2.79 0-1.02.08-1.95.23-2.79.15-.84.36-1.56.63-2.16.27-.6.59-1.06.96-1.39.37-.33.77-.5 1.21-.5.44 0 .84.17 1.21.5.37.33.69.79.96 1.39.27.6.48 1.32.63 2.16.15.84.23 1.77.23 2.79 0 1.02-.08 1.95-.23 2.79-.15.84-.36 1.56-.63 2.16-.27.6-.59 1.06-.96 1.39-.37.33-.77.5-1.21.5z" />
          </svg>
        </a>
      </div>

      {/* Contact Details - Full Width Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div
          className="bg-[#112240] rounded-xl p-3 border border-[#00d9ff]/10 cursor-pointer hover:border-[#00d9ff]/30 transition-colors"
          onClick={() => handleCopy("tsifetelemlem@gmail.com", "email")}
        >
          <div className="flex items-center gap-2">
            <div className="bg-[#00d9ff]/10 p-2 rounded-lg">
              <Mail className="w-4 h-4 text-[#00d9ff]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[#64748b] font-mono uppercase">Email</p>
              <p className="text-xs text-white truncate">tsifetelemlem@gmail.com</p>
              {copiedField === "email" && (
                <p className="text-[10px] text-[#00d9ff]">Copied!</p>
              )}
            </div>
          </div>
        </div>

        <div
          className="bg-[#112240] rounded-xl p-3 border border-[#00d9ff]/10 cursor-pointer hover:border-[#00d9ff]/30 transition-colors"
          onClick={() => handleCopy("(+251) 901215319", "phone")}
        >
          <div className="flex items-center gap-2">
            <div className="bg-[#00d9ff]/10 p-2 rounded-lg">
              <Phone className="w-4 h-4 text-[#00d9ff]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[#64748b] font-mono uppercase">Phone</p>
              <p className="text-xs text-white">(+251) 901215319</p>
              {copiedField === "phone" && (
                <p className="text-[10px] text-[#00d9ff]">Copied!</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#112240] rounded-xl p-3 border border-[#00d9ff]/10">
          <div className="flex items-center gap-2">
            <div className="bg-[#00d9ff]/10 p-2 rounded-lg">
              <Calendar className="w-4 h-4 text-[#00d9ff]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[#64748b] font-mono uppercase">Birthday</p>
              <p className="text-xs text-white">JUN 2, 2000</p>
            </div>
          </div>
        </div>

        <div className="bg-[#112240] rounded-xl p-3 border border-[#00d9ff]/10">
          <div className="flex items-center gap-2">
            <div className="bg-[#00d9ff]/10 p-2 rounded-lg">
              <MapPin className="w-4 h-4 text-[#00d9ff]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[#64748b] font-mono uppercase">Location</p>
              <p className="text-xs text-white">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
