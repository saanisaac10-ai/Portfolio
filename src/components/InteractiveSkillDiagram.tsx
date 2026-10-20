import React, { useState } from 'react';
import { SKILL_PILLARS, SkillPillar, SkillNodeItem } from '../data/portfolioData';
import { Cpu, Users, Compass, GitBranch, CheckCircle2 } from 'lucide-react';

export const InteractiveSkillDiagram: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<SkillPillar['id']>('tech');
  const [selectedSkillId, setSelectedSkillId] = useState<string>('claude-ai');

  const activePillar =
    SKILL_PILLARS.find((p) => p.id === activePillarId) || SKILL_PILLARS[0];
  const activeSkill: SkillNodeItem =
    activePillar.items.find((i) => i.id === selectedSkillId) || activePillar.items[0];

  const handleSelectPillar = (pillar: SkillPillar) => {
    setActivePillarId(pillar.id);
    setSelectedSkillId(pillar.items[0].id);
  };

  // SVG Hub coordinates (ViewBox 460 x 380)
  const centerX = 230;
  const centerY = 190;

  const quadrantCoords: Record<
    SkillPillar['id'],
    {
      x: number;
      y: number;
      color: string;
      lightFill: string;
      satellites: { x: number; y: number }[];
    }
  > = {
    tech: {
      x: 125,
      y: 105,
      color: '#4338CA',
      lightFill: '#EEF2FF',
      satellites: [
        { x: 55, y: 45 },
        { x: 165, y: 38 },
        { x: 48, y: 125 },
        { x: 125, y: 170 },
      ],
    },
    strategy: {
      x: 335,
      y: 105,
      color: '#BE123C',
      lightFill: '#FFF1F2',
      satellites: [
        { x: 295, y: 38 },
        { x: 405, y: 45 },
        { x: 412, y: 125 },
        { x: 335, y: 170 },
      ],
    },
    people: {
      x: 125,
      y: 275,
      color: '#7E22CE',
      lightFill: '#FAF5FF',
      satellites: [
        { x: 48, y: 245 },
        { x: 55, y: 330 },
        { x: 165, y: 342 },
        { x: 125, y: 215 },
      ],
    },
    org: {
      x: 335,
      y: 275,
      color: '#0F766E',
      lightFill: '#F0FDFA',
      satellites: [
        { x: 412, y: 245 },
        { x: 405, y: 330 },
        { x: 295, y: 342 },
        { x: 335, y: 215 },
      ],
    },
  };

  const getPillarIcon = (id: SkillPillar['id']) => {
    switch (id) {
      case 'tech':
        return <Cpu className="w-3.5 h-3.5" />;
      case 'people':
        return <Users className="w-3.5 h-3.5" />;
      case 'strategy':
        return <Compass className="w-3.5 h-3.5" />;
      case 'org':
        return <GitBranch className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Top 4-Pillar Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {SKILL_PILLARS.map((pillar) => {
          const isActive = pillar.id === activePillarId;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => handleSelectPillar(pillar)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                isActive
                  ? 'bg-gradient-button text-white border-indigo-900 shadow-sm'
                  : 'minimal-card hover:border-indigo-300 text-zinc-800'
              }`}
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold">
                  {getPillarIcon(pillar.id)}
                  <span>{pillar.title}</span>
                </div>
                <div
                  className={`text-[11px] mt-0.5 line-clamp-1 ${
                    isActive ? 'text-indigo-100' : 'text-zinc-500'
                  }`}
                >
                  {pillar.subtitle}
                </div>
              </div>
              <span
                className={`text-xs font-mono-tabular font-bold px-2 py-0.5 rounded-md ${
                  isActive ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-600'
                }`}
              >
                4
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Diagram + Inspector Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left: Interactive SVG Network & Quadrant Map (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl minimal-card p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
            <span className="font-semibold text-zinc-800">
              Interactive Capability Architecture Map
            </span>
            <span>Click any quadrant or satellite node</span>
          </div>

          <div className="w-full overflow-hidden flex items-center justify-center">
            <svg
              viewBox="0 0 460 380"
              className="w-full max-w-[520px] h-auto select-none"
              role="img"
              aria-label="Interactive Skillset Network Diagram"
            >
              {/* Subtle Quadrant Background Rings */}
              <circle
                cx={centerX}
                cy={centerY}
                r={155}
                fill="none"
                stroke="#CBD5E1"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              <circle
                cx={centerX}
                cy={centerY}
                r={95}
                fill="none"
                stroke="#CBD5E1"
                strokeDasharray="3 3"
                strokeWidth="1"
              />
              <line
                x1={centerX}
                y1={20}
                x2={centerX}
                y2={360}
                stroke="#E2E8F0"
                strokeWidth="1"
              />
              <line
                x1={20}
                y1={centerY}
                x2={440}
                y2={centerY}
                stroke="#E2E8F0"
                strokeWidth="1"
              />

              {/* Connectors from Center to 4 Pillar Hubs & Satellites */}
              {SKILL_PILLARS.map((pillar) => {
                const q = quadrantCoords[pillar.id];
                const isPillarActive = pillar.id === activePillarId;

                return (
                  <g key={`lines-${pillar.id}`}>
                    {/* Center to Pillar Hub Line */}
                    <line
                      x1={centerX}
                      y1={centerY}
                      x2={q.x}
                      y2={q.y}
                      stroke={isPillarActive ? q.color : '#94A3B8'}
                      strokeWidth={isPillarActive ? 2.5 : 1.2}
                      strokeOpacity={isPillarActive ? 0.9 : 0.4}
                    />

                    {/* Pillar Hub to 4 Skill Satellites */}
                    {pillar.items.map((skill, sIdx) => {
                      const sat = q.satellites[sIdx];
                      const isSkillSelected = skill.id === activeSkill.id;
                      return (
                        <line
                          key={`sat-line-${skill.id}`}
                          x1={q.x}
                          y1={q.y}
                          x2={sat.x}
                          y2={sat.y}
                          stroke={isPillarActive ? q.color : '#CBD5E1'}
                          strokeWidth={isSkillSelected ? 2.2 : isPillarActive ? 1.5 : 1}
                          strokeDasharray={isPillarActive ? 'none' : '2 2'}
                        />
                      );
                    })}
                  </g>
                );
              })}

              {/* Satellite Skill Nodes (16 total) */}
              {SKILL_PILLARS.map((pillar) => {
                const q = quadrantCoords[pillar.id];
                const isPillarActive = pillar.id === activePillarId;

                return (
                  <g key={`nodes-${pillar.id}`}>
                    {pillar.items.map((skill, sIdx) => {
                      const sat = q.satellites[sIdx];
                      const isSkillSelected = skill.id === activeSkill.id;
                      return (
                        <g
                          key={skill.id}
                          onClick={() => {
                            setActivePillarId(pillar.id);
                            setSelectedSkillId(skill.id);
                          }}
                          className="cursor-pointer"
                        >
                          <rect
                            x={sat.x - 46}
                            y={sat.y - 13}
                            width={92}
                            height={26}
                            rx={8}
                            fill={isSkillSelected ? q.color : isPillarActive ? '#FFFFFF' : '#F8FAFC'}
                            stroke={isSkillSelected ? q.color : isPillarActive ? q.color : '#CBD5E1'}
                            strokeWidth={isSkillSelected ? 2 : 1.2}
                          />
                          <text
                            x={sat.x}
                            y={sat.y + 3.5}
                            textAnchor="middle"
                            fontSize="9.5"
                            fontWeight={isSkillSelected || isPillarActive ? '700' : '500'}
                            fill={isSkillSelected ? '#FFFFFF' : isPillarActive ? '#18181B' : '#64748B'}
                          >
                            {skill.shortName}
                          </text>
                        </g>
                      );
                    })}

                    {/* Quadrant Hub Node */}
                    <g
                      onClick={() => handleSelectPillar(pillar)}
                      className="cursor-pointer"
                    >
                      <circle
                        cx={q.x}
                        cy={q.y}
                        r={isPillarActive ? 28 : 24}
                        fill={isPillarActive ? q.color : '#FFFFFF'}
                        stroke={q.color}
                        strokeWidth={2}
                      />
                      <text
                        x={q.x}
                        y={q.y + 3.5}
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight="700"
                        fill={isPillarActive ? '#FFFFFF' : q.color}
                      >
                        {pillar.title === 'People and Culture' ? 'People' : pillar.title}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Central Operating Core Node */}
              <circle
                cx={centerX}
                cy={centerY}
                r={34}
                fill="#1E1B4B"
                stroke="#6366F1"
                strokeWidth="2.5"
              />
              <text
                x={centerX}
                y={centerY - 3}
                textAnchor="middle"
                fontSize="9.5"
                fontWeight="700"
                fill="#FFFFFF"
              >
                SAAN
              </text>
              <text
                x={centerX}
                y={centerY + 9}
                textAnchor="middle"
                fontSize="8"
                fontWeight="500"
                fill="#C7D2FE"
              >
                4-Pillar Core
              </text>
            </svg>
          </div>

          {/* Bottom Legend Bar */}
          <div className="pt-2 border-t border-zinc-200/70 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500">
            <span>Selected Domain: <strong className="text-zinc-900">{activePillar.title}</strong></span>
            <span>Selected Node: <strong className="text-indigo-700">{activeSkill.name}</strong></span>
          </div>
        </div>

        {/* Right: Visual Capability Cards & Selected Node Inspector (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          {/* Active Skill Spotlight Box */}
          <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-950 text-white border border-indigo-800/60 space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono-tabular text-indigo-300">
              <span>{activePillar.title.toUpperCase()} SPOTLIGHT</span>
              <span className="px-2 py-0.5 rounded bg-white/15 text-white font-semibold">
                {activeSkill.proofMetric}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {activeSkill.name}
            </h3>
            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              {activeSkill.detail}
            </p>
            <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-indigo-200 font-mono-tabular">
              <span>Shipped at: {activeSkill.whereApplied}</span>
            </div>
          </div>

          {/* All 4 Skills in the Active Quadrant as Interactive Visual Gauge Cards */}
          <div className="rounded-2xl minimal-card p-4 space-y-2.5 flex-1 flex flex-col justify-between">
            <div className="text-xs font-semibold text-zinc-700">
              {activePillar.title} Capabilities (Click to inspect):
            </div>
            <div className="space-y-2">
              {activePillar.items.map((item) => {
                const isSelected = item.id === activeSkill.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedSkillId(item.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-indigo-500 shadow-xs'
                        : 'bg-white/60 border-zinc-200/80 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isSelected ? 'text-indigo-700' : 'text-zinc-400'
                          }`}
                        />
                        <span>{item.name}</span>
                      </span>
                      <span className="text-[11px] font-mono-tabular font-bold text-indigo-700 shrink-0">
                        {item.proofMetric}
                      </span>
                    </div>

                    {/* Visual Capability Bar */}
                    <div className="mt-2 w-full h-1.5 bg-zinc-200/80 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-button transition-all duration-300"
                        style={{ width: `${item.strength}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
