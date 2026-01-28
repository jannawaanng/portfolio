'use client';

import Footer from "../../components/footer"; 

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#5c4a3d]">
      <main className="flex-1 max-w-5xl mx-auto w-full pt-16 md:pt-20 px-6 md:px-12 pb-12">
        
        {/* HEADER - Tightened padding and margin */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-[#e8ddd0] pb-6">
          <div className="space-y-0.5">
            <h1 className="text-4xl font-light tracking-tight">Janna Wang</h1>
            <p className="text-[11px] text-[#9c8b7a] tracking-wide">
              (631) 530-5116 | janna.wang@duke.edu
            </p>
          </div>
          
          <a 
            href="/janna-wang-resume.pdf" 
            download
            className="inline-flex items-center gap-2 bg-[#c4a882] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-[#a08060] transition-all shadow-sm w-fit h-fit"
          >
            Download PDF
          </a>
        </div>

        {/* Layout with tightened grid gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* SIDEBAR */}
          <div className="lg:col-span-4 space-y-10">
            <section>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#c4a882] mb-4 font-bold">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm">Duke University</p>
                  <p className="text-xs text-[#6c5b4a] leading-tight">B.S. in Mechanical Engineering, B.A. in Comp. Sci.</p>
                  <p className="text-xs text-[#9c8b7a]">Minor in Visual Media Studies</p>
                  <p className="text-[10px] text-[#c4a882] mt-1 font-medium">Aug 2023 — Present</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Stuyvesant High School</p>
                  <p className="text-[10px] text-[#c4a882] mt-0.5 font-medium">Sep 2019 — Jun 2023</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#c4a882] mb-4 font-bold">Skills</h3>
              <div className="space-y-4">
                {[
                  { label: "Software & Data Analytics", items: "Python, Java, MySQL, HTML/CSS, Git, Excel, Power BI, Retool, Tableau" },
                  { label: "Product", items: "Agile, Lean Six Sigma, Roadmapping, Jira, Trello, Smartsheet, Airtable, Miro, PPT" },
                  { label: "Prototyping", items: "SolidWorks, AutoCAD, Fusion 360, Onshape, CNC, Arduino, Laser Cutting, 3D Printing" },
                  { label: "UI/UX", items: "Figma, InDesign, Wireframing, User Research, Personas, Journey Mapping" },
                  { label: "Wet Lab", items: "Microfluidic Fabrication, Fluid Handling, Optical Analysis, Nanoparticle Tracking" }
                ].map((skill, i) => (
                  <div key={i}>
                    <p className="text-[9px] font-bold text-[#9c8b7a] uppercase mb-1">{skill.label}</p>
                    <p className="text-xs leading-snug text-[#6c5b4a]">{skill.items}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-10">
            <section>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#c4a882] mb-6 font-bold">Experience</h3>
              <div className="space-y-8">
                
                {/* AMGEN */}
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-semibold text-base leading-none">Operations Engineering Intern</h4>
                    <span className="text-[10px] font-medium text-[#9c8b7a] whitespace-nowrap">Jun 2025 — Aug 2025</span>
                  </div>
                  <p className="text-xs text-[#c4a882] mb-2 italic">Amgen • Thousand Oaks, CA</p>
                  <ul className="text-[13px] text-[#6c5b4a] list-disc list-outside ml-4 space-y-1.5">
                    <li>Coordinated with 20+ stakeholders to identify inefficiencies in 1000+ asset production lines</li>
                    <li>Used analytic & visual tooling (Power BI, Excel, Maximo) to redesign maintenance workflows, reducing downtime by 8%</li>
                    <li>Developed automated Smartsheet dashboards to track regulatory compliance and enhance operational visibility</li>
                    <li>Optimized scheduling infrastructure by integrating live asset data and standard logic fields</li>
                  </ul>
                </div>

                {/* UNLOCKEDMAPS */}
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-semibold text-base leading-none">UI Intern</h4>
                    <span className="text-[10px] font-medium text-[#9c8b7a] whitespace-nowrap">Jun 2025 — Aug 2025</span>
                  </div>
                  <p className="text-xs text-[#c4a882] mb-2 italic">UnlockedMaps</p>
                  <ul className="text-[13px] text-[#6c5b4a] list-disc list-outside ml-4 space-y-1.5">
                    <li>Conducted platform-wide UX audit to implement UI enhancements, improving navigation and visual clarity</li>
                    <li>Built WMATA transit API integration to launch Washington DC market and enable live transit data</li>
                    <li>Redesigned city directory interface with improved information architecture and search functionality</li>
                  </ul>
                </div>

                {/* DIBS RESEARCH FELLOW */}
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-semibold text-base leading-none">Research Fellow, Duke Institute for Brain Sciences</h4>
                    <span className="text-[10px] font-medium text-[#9c8b7a] whitespace-nowrap">May 2024 — Aug 2024</span>
                  </div>
                  <p className="text-xs text-[#c4a882] mb-2 italic">Remote</p>
                  <ul className="text-[13px] text-[#6c5b4a] list-disc list-outside ml-4 space-y-1.5">
                    <li>Developed a MySQL database (AMPPS stack) for large-scale multimedia displays on the DIBS "Cube" exterior</li>
                    <li>Optimized database for diverse media formats by implementing a comprehensive metadata tagging system</li>
                    <li>Streamlined data entry processes by developing automated scripts linking spreadsheets with the database</li>
                  </ul>
                </div>

                {/* CORNELL CIRA LAB */}
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-semibold text-base leading-none">Undergraduate Researcher, Cornell Cira Lab</h4>
                    <span className="text-[10px] font-medium text-[#9c8b7a] whitespace-nowrap">Jun 2024 — Aug 2024</span>
                  </div>
                  <p className="text-xs text-[#c4a882] mb-2 italic">Ithaca, NY</p>
                  <ul className="text-[13px] text-[#6c5b4a] list-disc list-outside ml-4 space-y-1.5">
                    <li>Used Python and MATLAB to collect data from Fenton reactions, improving reaction speed by ten-fold</li>
                    <li>Investigated workflow improvements including software for reduced processing time and evaporation mitigation</li>
                  </ul>
                </div>

                {/* RESEARCH: ACOUSTOFLUIDICS */}
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-semibold text-base leading-none">Research Assistant, Duke Acoustofluidics Lab</h4>
                    <span className="text-[10px] font-medium text-[#9c8b7a] whitespace-nowrap">Dec 2023 — June 2025</span>
                  </div>
                  <p className="text-xs text-[#c4a882] mb-2 italic">Durham, NC</p>
                  <ul className="text-[13px] text-[#6c5b4a] list-disc list-outside ml-4 space-y-1.5">
                    <li>Designed droplet-splitting acoustofluidic device to sort and detect particles using AutoCAD</li>
                    <li>Fabricated lab-on-a-chip devices with microfluidic channels and IDTs for acoustic manipulation</li>
                    <li>Conducted multi-technique experiments investigating cellular interactions and sample processing</li>
                  </ul>
                </div>

              </div>
            </section>

            <section className="pt-6 border-t border-[#e8ddd0]">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#c4a882] mb-4 font-bold">Patents & Publications</h3>
              <div className="space-y-4 text-[12px] leading-snug text-[#6c5b4a]">
                
                <a href="https://www.science.org/doi/10.1126/sciadv.ady1136" target="_blank" rel="noopener noreferrer" className="block hover:text-[#c4a882] transition-colors">
                  <p>
                    K. Yang, [...] <strong>Janna Wang</strong>, et al. "Precision Acoustofluidics for High-Throughput Mechanobiology." <span className="italic">Science Advances</span>, 12 (2026).
                  </p>
                </a>

                <a href="https://doi.org/10.1016/j.snb.2024.136294" target="_blank" rel="noopener noreferrer" className="block hover:text-[#c4a882] transition-colors">
                  <p>
                    T. Naquin, [...] <strong>Janna Wang</strong>, et al. "An acoustofluidic picoinjector." <span className="italic">Sensors and Actuators B: Chemical</span>, 418 (2024).
                  </p>
                </a>

                <div className="block">
                  <p>
                    <strong>"Adjustable sliding tray with locking mechanism"</strong> — US Patent App. 29/936,005 — Apr 5, 2024
                  </p>
                </div>

              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}