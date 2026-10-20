import React, { useState } from 'react';
import { EDUCATION_DATA, JOURNEY_NODES } from '../data/portfolioData';
import { GraduationCap, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export const VisualJourneyTimeline: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(JOURNEY_NODES.length - 1);
  const activeNode = JOURNEY_NODES[activeNodeIndex];

  return (
    <div className="space-y-4">
      {/* Interactive Visual Stepper Track (2012 -> 2026) */}
      <div className="rounded-2xl minimal-card p-4 sm:p-5 space-y-4">
        <div className="text-xs text-zinc-500 font-semibold text-zinc-800">
          Interactive Career Map (Click any milestone from 2012 to 2026)
        </div>

        {/* Connected Horizontal Stepper Nodes */}
        <div className="relative">
          {/* Background connecting line on desktop */}
          <div className="hidden lg:block absolute top-6 left-8 right-8 h-0.5 bg-gradient-to-r from-indigo-300 via-purple-400 to-rose-400" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 relative z-10">
            {JOURNEY_NODES.map((node, idx) => {
              const isSelected = idx === activeNodeIndex;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNodeIndex(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                    isSelected
                      ? 'bg-gradient-button text-white border-indigo-900 shadow-sm'
                      : 'bg-white/90 border-zinc-200/90 hover:border-indigo-400 text-zinc-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-mono-tabular font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-indigo-50 text-indigo-800'
                      }`}
                    >
                      {node.year}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 ${
                        isSelected ? 'text-white' : 'text-zinc-400'
                      }`}
                    />
                  </div>

                  <div>
                    <div className="text-xs sm:text-sm font-bold leading-tight">
                      {node.company}
                    </div>
                    <div
                      className={`text-[11px] mt-0.5 truncate ${
                        isSelected ? 'text-indigo-100' : 'text-zinc-500'
                      }`}
                    >
                      {node.themeTitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Visual Dashboard Card (Replaces text-heavy paragraphs) */}
        <div className="rounded-xl bg-white/90 border border-indigo-200/70 p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Left: Concise Role & 1-Sentence Story (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-indigo-700 font-semibold">
              <span>{activeNode.period}</span>
              <span aria-hidden="true">·</span>
              <span>{activeNode.domainTag}</span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                {activeNode.role} — {activeNode.company}
              </h3>
              <div className="text-xs font-semibold text-purple-700 mt-0.5">
                {activeNode.themeTitle}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {activeNode.oneLiner}
            </p>

            {/* Shipped Systems Visual Tags */}
            <div className="pt-1 flex flex-wrap items-center gap-1.5">
              {activeNode.shippedItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200/80"
                >
                  <CheckCircle2 className="w-3 h-3 text-indigo-700 shrink-0" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right: 3 Visual Stat Blocks (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeNode.keyStats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-purple-50/50 to-rose-50/60 border border-indigo-200/60 flex flex-col justify-between"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono-tabular text-gradient-editorial">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-zinc-700 mt-1.5 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Credentials Ribbon (Degrees + Global Executive Education) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
        <div className="lg:col-span-5 rounded-xl minimal-card p-4 flex flex-col justify-between gap-2.5">
          <div className="flex items-center gap-1.5 text-xs font-mono-tabular font-semibold text-indigo-700">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Foundation</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {EDUCATION_DATA.degrees.map((d) => (
              <div
                key={d.degree}
                className="p-3 rounded-lg bg-white/80 border border-zinc-200/80"
              >
                <div className="text-xs font-bold font-mono-tabular text-indigo-700">
                  {d.year}
                </div>
                <div className="text-xs font-bold text-zinc-900 mt-0.5">{d.degree}</div>
                <div className="text-[11px] text-zinc-500">{d.institution}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 rounded-xl minimal-card p-4 flex flex-col justify-between gap-2.5">
          <div className="flex items-center gap-1.5 text-xs font-mono-tabular font-semibold text-purple-700">
            <Award className="w-4 h-4" />
            <span>Executive Education (2022 – 2025)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {EDUCATION_DATA.executiveEducation.map((e) => (
              <div
                key={e.program}
                className="p-3 rounded-lg bg-white/80 border border-zinc-200/80"
              >
                <div className="text-xs font-bold font-mono-tabular text-purple-700">
                  {e.year}
                </div>
                <div className="text-xs font-bold text-zinc-900 mt-0.5 truncate">
                  {e.institution}
                </div>
                <div className="text-[11px] text-zinc-500 truncate">{e.program}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
