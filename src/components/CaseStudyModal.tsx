import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  allStudies: CaseStudy[];
  onClose: () => void;
  onSelectStudy: (study: CaseStudy) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  allStudies,
  onClose,
  onSelectStudy,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (study) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [study, onClose]);

  if (!study) return null;

  const currentIndex = allStudies.findIndex((s) => s.id === study.id);
  const prevStudy =
    currentIndex > 0 ? allStudies[currentIndex - 1] : allStudies[allStudies.length - 1];
  const nextStudy =
    currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : allStudies[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-zinc-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F6] text-zinc-900 border border-zinc-200 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="px-6 py-4 bg-white/80 border-b border-zinc-200/80 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono-tabular">
            <span>Case Study {study.index}</span>
            <span aria-hidden="true">·</span>
            <span>{study.company}</span>
            <span aria-hidden="true">·</span>
            <span>{study.timeframe}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-700 hover:bg-zinc-100 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Close</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-minimal-gradient">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200/80 pb-6">
            <div>
              <div className="text-xs text-zinc-500 mb-1">
                {study.categoryLabel} · {study.industry}
              </div>
              <h2 id="modal-case-title" className="text-2xl font-bold text-zinc-900">
                {study.projectTitle}
              </h2>
            </div>

            <div className="p-4 rounded-xl bg-white/90 border border-indigo-200/70 shrink-0">
              <div className="text-2xl font-bold font-mono-tabular text-gradient-editorial">
                {study.headlineMetric.value}
              </div>
              <div className="text-xs text-zinc-600">{study.headlineMetric.unit}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl minimal-card space-y-1.5">
              <div className="text-xs font-mono-tabular font-semibold text-indigo-700">
                01. Problem Statement
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">{study.problemStatement}</p>
            </div>

            <div className="p-5 rounded-xl minimal-card space-y-1.5">
              <div className="text-xs font-mono-tabular font-semibold text-purple-700">
                02. My Role ({study.myRole.title})
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">{study.myRole.narrative}</p>
            </div>
          </div>

          <div className="p-5 rounded-xl minimal-card space-y-4">
            <div className="text-xs font-mono-tabular font-semibold text-rose-700">
              03. Solution Implemented
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {study.solutionImplemented.architectureFlow.map((node) => (
                <div
                  key={node.stage}
                  className="p-3.5 rounded-lg bg-white/80 border border-zinc-200/70"
                >
                  <div className="text-xs font-mono-tabular font-bold text-indigo-900">
                    {node.stage}
                  </div>
                  <div className="text-xs text-zinc-600 mt-1">{node.detail}</div>
                </div>
              ))}
            </div>
            <ul className="space-y-1.5 pt-1">
              {study.solutionImplemented.steps.map((step, i) => (
                <li key={i} className="text-sm text-zinc-700 flex items-start gap-2">
                  <span className="font-mono-tabular text-xs font-semibold text-indigo-700 mt-0.5">
                    0{i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl minimal-card space-y-2.5">
              <div className="text-xs font-mono-tabular font-semibold text-indigo-700">
                04. Technologies Used
              </div>
              {study.technologiesUsed.map((t) => (
                <div key={t.name} className="text-xs">
                  <span className="font-semibold text-zinc-900">{t.name}: </span>
                  <span className="text-zinc-600">{t.application}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl minimal-card space-y-2.5">
              <div className="text-xs font-mono-tabular font-semibold text-rose-700">
                05. Key Outcomes / Impact
              </div>
              {study.keyOutcomes.map((o) => (
                <div key={o.metric} className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold font-mono-tabular text-zinc-900">{o.metric} — </span>
                    <span className="text-zinc-600">{o.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-white/80 border-t border-zinc-200/80 flex items-center justify-between gap-4 shrink-0">
          <button
            type="button"
            onClick={() => onSelectStudy(prevStudy)}
            className="text-xs font-medium text-zinc-600 hover:text-zinc-900 flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Prev: {prevStudy.company}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectStudy(nextStudy)}
            className="text-xs font-medium text-zinc-600 hover:text-zinc-900 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Next: {nextStudy.company}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
