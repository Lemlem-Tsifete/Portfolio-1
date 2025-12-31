import { Github, ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-display font-bold text-white"></h2>

      <div className="bg-[#1a2332] rounded-2xl p-12 border border-[#00d9ff]/10 text-center">
        <p className="text-[#cbd5e1] mb-8 text-lg">
          This section is still under development. Please visit my{" "}
          <a
            href="https://github.com/Lemlem-Tsifete"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00d9ff] hover:underline"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.behance.net/lemlemtsifete"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00d9ff] hover:underline"
          >
            Behance
          </a>{" "}
          to see my work in the meantime. I appreciate your understanding!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/Lemlem-Tsifete?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#00d9ff] hover:bg-[#0ea5e9] text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Github className="w-5 h-5" />
            Visit GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://www.behance.net/lemlemtsifete"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#112240] hover:bg-[#1a2332] text-white font-medium px-8 py-3 rounded-lg border border-[#00d9ff]/30 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM3.495 7.6h2.42c.862 0 1.49-.2 1.885-.6.39-.4.586-.98.586-1.73 0-.5-.08-.92-.24-1.27-.16-.35-.39-.62-.67-.84-.28-.22-.61-.38-.98-.48-.37-.1-.78-.15-1.23-.15H3.495V7.6zm0 7.17h2.93c.44 0 .84-.05 1.21-.15.37-.1.69-.25.96-.44.27-.19.48-.44.63-.75.15-.31.23-.68.23-1.1 0-.86-.23-1.47-.69-1.81-.46-.34-1.08-.51-1.86-.51H3.495v4.76zm16.32-7.17c-.74 0-1.38.18-1.92.53-.53.35-.96.84-1.29 1.46-.33.62-.58 1.35-.76 2.19-.18.84-.27 1.76-.27 2.76 0 .98.09 1.89.27 2.73.18.84.43 1.57.76 2.19.33.62.76 1.11 1.29 1.46.54.35 1.18.53 1.92.53.74 0 1.38-.18 1.92-.53.54-.35.97-.84 1.3-1.46.33-.62.58-1.35.76-2.19.18-.84.27-1.75.27-2.73 0-1-.09-1.92-.27-2.76-.18-.84-.43-1.57-.76-2.19-.33-.62-.76-1.11-1.3-1.46-.54-.35-1.18-.53-1.92-.53zm0 11.53c-.44 0-.84-.17-1.21-.5-.37-.33-.69-.79-.96-1.39-.27-.6-.48-1.32-.63-2.16-.15-.84-.23-1.77-.23-2.79 0-1.02.08-1.95.23-2.79.15-.84.36-1.56.63-2.16.27-.6.59-1.06.96-1.39.37-.33.77-.5 1.21-.5.44 0 .84.17 1.21.5.37.33.69.79.96 1.39.27.6.48 1.32.63 2.16.15.84.23 1.77.23 2.79 0 1.02-.08 1.95-.23 2.79-.15.84-.36 1.56-.63 2.16-.27.6-.59 1.06-.96 1.39-.37.33-.77.5-1.21.5z" />
            </svg>
            Visit Behance
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
