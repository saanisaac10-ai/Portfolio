import React, { useState } from 'react';
import {
  ArrowUpRight,
  Mail,
  Phone,
  CheckCircle2,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
} from 'lucide-react';
import {
  CASE_STUDIES,
  CaseStudy,
  INDEX_BUTTONS,
  PROFILE_INFO,
} from './data/portfolioData';
import { CaseStudyModal } from './components/CaseStudyModal';
import { VisualJourneyTimeline } from './components/VisualJourneyTimeline';
import { InteractiveSkillDiagram } from './components/InteractiveSkillDiagram';

export default function App() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const areAllExpanded =
    CASE_STUDIES.length > 0 && CASE_STUDIES.every((s) => expandedIds[s.id]);

  const toggleExpandAll = () => {
    if (areAllExpanded) {
      setExpandedIds({});
    } else {
      const next: Record<string, boolean> = {};
      CASE_STUDIES.forEach((s) => {
        next[s.id] = true;
      });
      setExpandedIds(next);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-minimal-gradient text-zinc-900 flex flex-col">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-zinc-200/80">
        <div className="max-w-[1220px] mx-auto flex items-center justify-between gap-8 px-5 py-3">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 whitespace-nowrap shrink-0 font-display"
          >
            Saan Isaac George
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-zinc-600">
            <a
              href="#about-me"
              className="hover:text-zinc-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              About Me
            </a>
            <a
              href="#what-i-solve"
              className="hover:text-zinc-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              What I can solve/bring for you
            </a>
            <a
              href="#skillsets"
              className="hover:text-zinc-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Skillsets
            </a>
            <a
              href="#resumes"
              className="hover:text-zinc-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Resumes
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <a
              href="#resumes"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-button rounded-lg hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1 pb-10">
        {/* HERO SECTION: Single Unified Headline starting with "Hi, I'm Saan" + "Exploring roles in" */}
        <section className="max-w-[1220px] mx-auto px-5 pt-5 pb-6">
          <div className="rounded-2xl p-5 sm:p-7 minimal-card space-y-4">
            {/* Top Row: Location Metadata & Exploring Roles In */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-zinc-200/80 pb-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                <span>{PROFILE_INFO.location}</span>
                <span aria-hidden="true">·</span>
                <span>{PROFILE_INFO.experienceYears}</span>
                <span aria-hidden="true">·</span>
                <span>{PROFILE_INFO.industries}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-zinc-500">Exploring roles in:</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-50/90 text-indigo-900 border border-indigo-200/70 whitespace-nowrap">
                    Chief of Staff & Strategy
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-purple-50/90 text-purple-900 border border-purple-200/70 whitespace-nowrap">
                    Head of HR & AI Transformation
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-rose-50/90 text-rose-900 border border-rose-200/70 whitespace-nowrap">
                    Org & Workforce Transformation
                  </span>
                </div>
              </div>
            </div>

            {/* Single Unified Headline starting with "Hi, I'm Saan" */}
            <div className="space-y-2.5 max-w-4xl">
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                <span className="text-gradient-editorial">Hi, I’m Saan</span> — I work alongside founders and CXOs to turn messy people and operational problems into simple systems that hold.
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl">
                Across EdTech, QSR, EV, consulting, and retail, I build practical AI tools for hiring and onboarding, tie incentives to commercial margin, and design career and leadership frameworks that move speed, revenue, and engagement.
              </p>
            </div>

            {/* Contact & Social Links Bar */}
            <div className="pt-3 border-t border-zinc-200/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-indigo-700" />
                      <span>Copied {PROFILE_INFO.email}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-indigo-700" />
                      <span>{PROFILE_INFO.email}</span>
                    </>
                  )}
                </button>
                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5 text-indigo-700" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5 text-zinc-900" />
                  <span>GitHub</span>
                </a>
              </div>

              <div className="text-xs text-zinc-500 font-mono-tabular">
                {PROFILE_INFO.phone} · {PROFILE_INFO.location}
              </div>
            </div>
          </div>

          {/* INDEX AS COMPACT BUTTONS */}
          <div className="mt-3.5 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {INDEX_BUTTONS.map((item) => (
              <button
                key={item.number}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="p-3.5 rounded-xl minimal-card-interactive text-left flex flex-col justify-between gap-1 group cursor-pointer"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[11px] font-mono-tabular font-bold text-indigo-700">
                    {item.number}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-indigo-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-indigo-800 transition-colors">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-zinc-500">{item.sub}</div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 01: About Me (Visualized Interactive Career Timeline & Stat Cards) */}
        <section
          id="about-me"
          className="max-w-[1220px] mx-auto px-5 py-6 lg:py-8 border-t border-zinc-300/80 space-y-4"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3">
            <div className="space-y-1 max-w-3xl">
              <div className="text-xs font-mono-tabular font-semibold text-indigo-700">
                01. About Me
              </div>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900"
                style={{ textWrap: 'balance' }}
              >
                What my journey has been like—from automating retail spreadsheets to building AI tools for hiring and scale.
              </h2>
            </div>
          </div>

          <VisualJourneyTimeline />
        </section>

        {/* SECTION 02: What I can solve/bring for you — 2x4 Matrix of Collapsible Case Studies */}
        <section
          id="what-i-solve"
          className="max-w-[1220px] mx-auto px-5 py-6 lg:py-8 border-t border-zinc-300/80 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="max-w-2xl space-y-1">
              <div className="text-xs font-mono-tabular font-semibold text-indigo-700">
                02. What I can solve/bring for you
              </div>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900"
                style={{ textWrap: 'balance' }}
              >
                The challenges I’ve solved at different organizations.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600">
                Click any tile in the 2×4 matrix to expand what I found, what I fixed, my role, technologies used, and the impact.
              </p>
            </div>

            <button
              type="button"
              onClick={toggleExpandAll}
              className="px-3.5 py-1.5 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
            >
              {areAllExpanded ? 'Collapse All (8)' : 'Expand All (8)'}
            </button>
          </div>

          {/* 2x4 Matrix (2 columns × 4 rows) of Collapsible Case Study Tiles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {CASE_STUDIES.map((study) => {
              const isExpanded = !!expandedIds[study.id];

              return (
                <article
                  key={study.id}
                  className="rounded-xl minimal-card-interactive overflow-hidden transition-all"
                >
                  {/* Collapsible Header Area: Quote Header + Problem Statement ONLY visible when collapsed */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(study.id)}
                    aria-expanded={isExpanded}
                    className="w-full text-left p-4 sm:p-5 flex flex-col gap-2.5 cursor-pointer"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-500 font-mono-tabular">
                        <span className="text-indigo-700 font-bold">Case {study.index}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-zinc-900 font-semibold">{study.company}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-indigo-800 font-medium">{study.categoryLabel}</span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 bg-indigo-50/90 px-2 py-0.5 rounded-md border border-indigo-200/60 shrink-0">
                        <span>{isExpanded ? 'Hide' : 'What I Found & Fixed'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3 h-3" />
                        ) : (
                          <ChevronDown className="w-3 h-3" />
                        )}
                      </span>
                    </div>

                    {/* Quote Header */}
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
                      {study.quoteHeader}
                    </h3>

                    {/* Problem Statement (Always Visible) */}
                    <div className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      <span className="font-semibold text-zinc-900">Problem Statement: </span>
                      {study.problemStatement}
                    </div>
                  </button>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-3.5 border-t border-zinc-200/80 bg-white/70 space-y-3.5">
                      {/* Project Title & My Role */}
                      <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-50/70 via-purple-50/50 to-rose-50/60 border border-indigo-100 space-y-1.5">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <span className="text-xs font-bold text-zinc-900">
                            {study.projectTitle}
                          </span>
                          <span className="text-[11px] font-mono-tabular text-indigo-700 font-semibold">
                            {study.timeframe}
                          </span>
                        </div>
                        <div className="text-xs text-zinc-700 leading-relaxed">
                          <span className="font-semibold text-purple-800">
                            My Role ({study.myRole.title}):{' '}
                          </span>
                          {study.myRole.narrative}
                        </div>
                      </div>

                      {/* What I found? & What I fixed? */}
                      <div className="space-y-2.5">
                        <div>
                          <div className="text-xs font-bold text-rose-700">What I found?</div>
                          <p className="text-xs text-zinc-700 leading-relaxed mt-0.5">
                            {study.whatIFound}
                          </p>
                        </div>

                        <div>
                          <div className="text-xs font-bold text-indigo-800">
                            What I fixed? (Solution Implemented)
                          </div>
                          <p className="text-xs font-medium text-zinc-900 mt-0.5">
                            {study.solutionImplemented.summary}
                          </p>
                          <ul className="space-y-1 pt-1">
                            {study.solutionImplemented.steps.map((step, i) => (
                              <li
                                key={i}
                                className="text-xs text-zinc-600 leading-relaxed flex items-start gap-1.5"
                              >
                                <span className="font-mono-tabular text-[11px] font-semibold text-indigo-700 mt-0.5 shrink-0">
                                  0{i + 1}.
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div className="pt-2.5 border-t border-zinc-200/80 space-y-1.5">
                        <div className="text-xs font-semibold text-zinc-900">
                          Technologies Used
                        </div>
                        <div className="space-y-1">
                          {study.technologiesUsed.map((tech) => (
                            <div key={tech.name} className="text-xs text-zinc-600">
                              <span className="font-semibold text-indigo-900">{tech.name}: </span>
                              <span>{tech.application}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Outcomes / Impact */}
                      <div className="pt-2.5 border-t border-zinc-200/80 space-y-1.5">
                        <div className="text-xs font-semibold text-zinc-900">
                          Key Outcomes / Impact
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {study.keyOutcomes.map((outcome) => (
                            <div
                              key={outcome.metric}
                              className="p-2.5 rounded-lg bg-white border border-indigo-200/70"
                            >
                              <div className="flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-indigo-700 shrink-0" />
                                <span className="text-xs font-bold font-mono-tabular text-zinc-900">
                                  {outcome.metric}
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-600 mt-1 leading-snug">
                                {outcome.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* SECTION 03: Skillsets (Interactive SVG Network & Capability Inspector) */}
        <section
          id="skillsets"
          className="max-w-[1220px] mx-auto px-5 py-6 lg:py-8 border-t border-zinc-300/80 space-y-4"
        >
          <div className="space-y-1">
            <div className="text-xs font-mono-tabular font-semibold text-indigo-700">
              03. Skillsets
            </div>
            <h2
              className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: 'balance' }}
            >
              Tech · People and Culture · Strategy · Org Design
            </h2>
          </div>

          <InteractiveSkillDiagram />
        </section>

        {/* SECTION 04: Witty Cliffhanger instead of Traditional Resumes */}
        <section
          id="resumes"
          className="max-w-[1220px] mx-auto px-5 pt-6 pb-4 border-t border-zinc-300/80"
        >
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-indigo-950 via-indigo-900 to-purple-950 text-white border border-indigo-800/60 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono-tabular text-indigo-300">
                04. The Cliffhanger
              </div>
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                Still need a black-and-white resume after all this?
              </h2>
              <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
                If you still want a classic two-page black-and-white PDF after seeing what I’ve built, found, and fixed—let’s connect directly and I’ll gladly send one over.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={`mailto:${PROFILE_INFO.email}`}
                className="px-4 py-2.5 rounded-xl bg-white text-indigo-950 text-xs font-bold hover:bg-indigo-50 transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-700" />
                <span>{PROFILE_INFO.email}</span>
              </a>

              <a
                href={`tel:${PROFILE_INFO.phone.replace(/\s+/g, '')}`}
                className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/15 transition-colors inline-flex items-center gap-1.5 font-mono-tabular"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-300" />
                <span>{PROFILE_INFO.phone}</span>
              </a>

              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/15 transition-colors inline-flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-indigo-300" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PROFILE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/15 transition-colors inline-flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-indigo-300" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <CaseStudyModal
        study={selectedStudy}
        allStudies={CASE_STUDIES}
        onClose={() => setSelectedStudy(null)}
        onSelectStudy={(study) => setSelectedStudy(study)}
      />
    </div>
  );
}
