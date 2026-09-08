'use client';

import Footer from "../../components/footer"; 

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#5c4a3d]">
      <main className="flex-1 max-w-5xl mx-auto w-full pt-16 md:pt-20 px-6 md:px-12 pb-12">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-[#e8ddd0] pb-6">
          <div className="space-y-0.5">
            <h1 className="text-4xl font-light tracking-tight">Janna Wang</h1>
            <p className="text-[11px] text-[#9c8b7a] tracking-wide uppercase">
              (631) 530-5116 | janna.wang@duke.edu | <a href="#" className="hover:text-[#c4a882]">LinkedIn</a> | <a href="#" className="hover:text-[#c4a882]">Portfolio</a>
            </p>
          </div>
          
          <a 
            href="/janna-wang-resume-f26.pdf" 
            download
            className="inline-flex items-center gap-2 bg-[#c4a882] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-[#a08060] transition-all shadow-sm w-fit h-fit"
          >
            Download PDF
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* SIDEBAR */}
          <div className="lg:col-span-4 space-y-10">
            <section>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#c4a882] mb-4 font-bold">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm">Duke University</p>
                  <p className="text-xs text-[#6c5b4a] leading-tight">B.S. in Mechanical Engineering</p>
                  <p className="text-xs text-[#9c8b7a]">Minors in Computer Science, Visual Media Studies</p>
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
                  { label: "Product Strategy", items: "Discovery, User Research, Roadmapping, Stakeholder Management, Agile, User Stories" },
                  { label: "Technical", items: "Python, SQL, AI/LLM Applications, AWS, APIs, Git, CAD" },
                  { label: "Tools", items: "Figma, Jira, Salesforce, Tableau, Power BI, Visio, Miro, Smartsheet, Airtable" },
                  { label: "Prototyping", items: "DFM, Injection Molding, 3D Printing, Laser Cutting, CNC, Arduino" }
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
            
            {/* EXPERIENCE */}
            <section>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#c4a882] mb-6 font-bold">Experience</h3>
              <div className="space-y-8">
                
                {/* SIEMENS */}
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-semibold text-base leading-none">Technical Product Management Intern</h4>
                    <span className="text-[10px] font-medium text-[#9c8b7a] whitespace-nowrap">Jun 2026 — Present</span>
                  </div>
                  <p className="text-xs text-[#c4a882] mb-2 italic">Siemens Smart Infrastructure • Wendell, NC</p>
                  <ul className="text-[13px] text-[#6c5b4a] list-disc list-outside ml-4 space-y-1.5">
                    <li>Led product discovery across a global support org via user interviews and journey mapping, surfacing bottlenecks stalling cases.</li>
                    <li>Drove process standardization and operating-model design, helping cut average case close time 96% and clearing aged-case backlog to 0.</li>
                    <li>Authored business case and roadmap for "Case-to-Knowledge" AI product to turn engineering corrections into a reusable knowledge base.</li>
                    <li>Consolidated overlapping use cases into prioritized requirements by driving alignment across field service, PLM, IT, and business teams.</li>
                  </ul>
                </div>

                {/* AMGEN */}
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-semibold text-base leading-none">Operations Engineering Intern</h4>
                    <span className="text-[10px] font-medium text-[#9c8b7a] whitespace-nowrap">Jun 2025 — Sep 2025</span>
                  </div>
                  <p className="text-xs text-[#c4a882] mb-2 italic">Amgen • Thousand Oaks, CA</p>
                  <ul className="text-[13px] text-[#6c5b4a] list-disc list-outside ml-4 space-y-1.5">
                    <li>Analyzed maintenance data for 1,000+ assets and 20+ stakeholders to target 8% downtime savings.</li>
                    <li>Built centralized Smartsheet dashboards as a single source of truth for POs, QA, and engineers, streamlining compliance tracking.</li>
                  </ul>
                </div>

                {/* UNLOCKEDMAPS */}
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-semibold text-base leading-none">Product Engineer Intern</h4>
                    <span className="text-[10px] font-medium text-[#9c8b7a] whitespace-nowrap">May 2025 — Aug 2025</span>
                  </div>
                  <p className="text-xs text-[#c4a882] mb-2 italic">UnlockedMaps • Remote</p>
                  <ul className="text-[13px] text-[#6c5b4a] list-disc list-outside ml-4 space-y-1.5">
                    <li>Ran UX audit and redesigned city directory interface; shipped frontend fixes (HTML/CSS/JS) improving mobile responsiveness and WCAG accessibility.</li>
                    <li>Architected a WMATA transit API integration end-to-end to launch the product into the DC market.</li>
                  </ul>
                </div>

                {/* FRC ROBOTICS */}
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-semibold text-base leading-none">Engineering Lead & Director of Lab Operation</h4>
                    <span className="text-[10px] font-medium text-[#9c8b7a] whitespace-nowrap">Sep 2019 — May 2023</span>
                  </div>
                  <p className="text-xs text-[#c4a882] mb-2 italic">FRC Robotics Team 694 • New York, NY</p>
                  <ul className="text-[13px] text-[#6c5b4a] list-disc list-outside ml-4 space-y-1.5">
                    <li>Led a 50+ person division in end-to-end robot R&D, securing 13 awards over 2 seasons.</li>
                    <li>Directed lab operations for 150+ members, establishing safety protocols and machine-shop training.</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* PROJECTS */}
            <section className="pt-6 border-t border-[#e8ddd0]">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#c4a882] mb-6 font-bold">Projects</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm">Modular Lunch Tray System (Patent Pending)</h4>
                  <p className="text-[13px] text-[#6c5b4a] mt-1">
                    Developed "Slide n' Lock" modular tray for Durham Public Schools. Led user research, CAD, and DFM for injection molding; secured grant funding for production scale-up.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Project Tadpole</h4>
                  <p className="text-[13px] text-[#6c5b4a] mt-1">
                    Built accessible play systems, including switch-adapted toys and retrofitted ride-on cars for limited-mobility users.
                  </p>
                </div>
              </div>
            </section>

            {/* PATENTS & PUBLICATIONS */}
            <section className="pt-6 border-t border-[#e8ddd0]">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#c4a882] mb-4 font-bold">Patents & Publications</h3>
              <div className="space-y-4 text-[12px] leading-snug text-[#6c5b4a]">
                <p>
                  <strong>"Adjustable sliding tray with locking mechanism"</strong> — US Patent App. 29/936,005.
                </p>
                <p>
                  Co-authored 2 peer-reviewed papers in <span className="italic">Science Advances</span> and <span className="italic">Sensors & Actuators B</span>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}