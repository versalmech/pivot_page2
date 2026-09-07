'use client';

import React, { useState } from 'react';

type TierId = 'tier0' | 'tier1' | 'tier2' | 'tier3';

interface TierData {
  id: TierId;
  label: string;
  name: string;
  bracket: string;
  badge?: string;
  feeMonthly: number;
  feeQuarterly: number;
  thread: string;
  queue: string;
  drawdownFloor: string;
  apiScope: string;
  capacityText: string;
  description: string;
  ctaText: string;
}

const TIERS: Record<TierId, TierData> = {
  tier0: {
    id: 'tier0',
    label: 'TIER 0',
    name: 'Public Audit Feed',
    bracket: 'Open Observation',
    feeMonthly: 0,
    feeQuarterly: 0,
    thread: 'Public Telemetry Node',
    queue: 'Observation Queue',
    drawdownFloor: 'N/A (Read-Only)',
    apiScope: 'None (Observer Stream)',
    capacityText: 'UNLIMITED PUBLIC ACCESS',
    description: 'Zero-cost performance observation and real-time execution telemetry stream.',
    ctaText: 'INITIALIZE AUDIT STREAM',
  },
  tier1: {
    id: 'tier1',
    label: 'TIER 1',
    name: 'Signal Telemetry',
    bracket: 'Discretionary Desks',
    feeMonthly: 89,
    feeQuarterly: 219,
    thread: 'Telemetry Worker Pool',
    queue: 'Sub-Second Event Relay',
    drawdownFloor: 'Manual Alert Brackets',
    apiScope: 'Read Telemetry Only',
    capacityText: 'TELEMETRY FEED OPEN',
    description: 'Sub-second webhook dispatch with exact entry, target, and structural SL levels.',
    ctaText: 'SUBSCRIBE TO TELEMETRY',
  },
  tier2: {
    id: 'tier2',
    label: 'TIER 2',
    name: 'Execution Core',
    bracket: '$2k – $10k Equity',
    badge: 'CORE ALLOCATION',
    feeMonthly: 169,
    feeQuarterly: 429,
    thread: 'Multi-Tenant Process Pool',
    queue: 'FIFO Standard Queue',
    drawdownFloor: '$1,500 Preservation Floor',
    apiScope: 'Read + Isolated Trade Only',
    capacityText: '12 / 50 API SLOTS ALLOCATED',
    description: 'Direct sub-second API order routing engineered for standard account equity on BingX Perps.',
    ctaText: 'DEPLOY EXECUTION CORE',
  },
  tier3: {
    id: 'tier3',
    label: 'TIER 3',
    name: 'Institutional Gateway',
    bracket: '$15k – $50k Equity',
    badge: 'PRIORITY THREAD',
    feeMonthly: 349,
    feeQuarterly: 899,
    thread: 'Isolated Container Runtime',
    queue: 'Priority Memory Queue',
    drawdownFloor: 'Dynamic Equity Floor (-7.30%)',
    apiScope: 'Read + Isolated Trade Only',
    capacityText: '4 / 10 DEDICATED THREADS ALLOCATED',
    description: 'Dedicated memory-resident execution engine and priority queue routing for high-capital desks.',
    ctaText: 'DEPLOY PRIORITY GATEWAY',
  },
};

export default function AccessTiers() {
  const [selectedTier, setSelectedTier] = useState<TierId>('tier2');
  const [isQuarterly, setIsQuarterly] = useState(false);

  const activeData = TIERS[selectedTier];
  
  // Displays discounted per-month rate when quarterly is active
  const fee = isQuarterly
    ? Math.round(activeData.feeQuarterly / 3)
    : activeData.feeMonthly;

  return (
    <section id="tiers" className="py-12 sm:py-20 border-t border-borderSubtle bg-canvas font-sans">
      <div className="max-w-4xl mx-auto px-3 sm:px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wide text-textSub mb-2">
            SYSTEM ALLOCATION CONTROL
          </h2>
          <h3 className="font-sans text-xl sm:text-3xl font-bold text-textMain tracking-tight mb-2">
            Capital Allocation & System Integration
          </h3>
          <p className="text-sm sm:text-base text-textSub font-normal leading-relaxed font-sans">
            Select an account capital bracket below to inspect server thread isolation, order queue priority, and risk controls.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <span className={`text-[11px] font-mono uppercase tracking-wide ${!isQuarterly ? 'text-textMain font-bold' : 'text-textMuted'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsQuarterly(!isQuarterly)}
            className="w-10 h-5 rounded-full bg-panel border border-borderSubtle p-0.5 transition-colors relative focus:outline-none cursor-pointer"
            aria-label="Toggle Billing Cycle"
          >
            <div
              className={`w-3.5 h-3.5 rounded-full bg-accent transition-transform duration-200 ${
                isQuarterly ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="flex items-center space-x-2">
            <span className={`text-[11px] font-mono uppercase tracking-wide ${isQuarterly ? 'text-textMain font-bold' : 'text-textMuted'}`}>
              Quarterly Allocation
            </span>
            <span className="px-1.5 py-0.5 rounded bg-panel border border-accent/40 text-accent font-mono text-[10px] font-bold">
              18% SAVINGS
            </span>
          </div>
        </div>

        {/* Capital Segment Controller */}
        <div className="rounded-t border-t border-x border-borderSubtle bg-panel p-2 shadow-lg">
          <div className="text-[10px] font-mono font-bold text-textMuted uppercase tracking-wide px-2 py-1 mb-2">
            CAPITAL ALLOCATION BRACKET:
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {(Object.keys(TIERS) as TierId[]).map((id) => {
              const t = TIERS[id];
              const active = selectedTier === id;

              return (
                <button
                  key={id}
                  onClick={() => setSelectedTier(id)}
                  className={`p-3 rounded text-left transition-all relative flex flex-col justify-between border cursor-pointer ${
                    active
                      ? 'bg-canvas border-accent border-l-2 border-l-accent shadow-sm'
                      : 'bg-panel/60 border-borderSubtle/60 hover:bg-panel hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-mono text-[10px] font-bold ${active ? 'text-accent' : 'text-textMuted'}`}>
                        {t.label}
                      </span>
                      {t.badge && (
                        <span className={`text-[9px] font-mono font-bold px-1 rounded border ${
                          active ? 'bg-panel border-accent/40 text-accent' : 'text-textMuted border-borderSubtle/60 bg-canvas'
                        }`}>
                          {t.badge}
                        </span>
                      )}
                    </div>
                    <div className="font-sans font-bold text-xs sm:text-sm text-textMain leading-tight">
                      {t.name}
                    </div>
                  </div>
                  <div className={`text-[11px] font-sans mt-2 pt-1 border-t ${
                    active ? 'text-textMain font-medium border-borderSubtle' : 'text-textSub border-borderSubtle/40'
                  }`}>
                    {t.bracket}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* System Specifications Detailed Box */}
        <div className="rounded-b border border-borderSubtle bg-panel p-4 sm:p-6 shadow-2xl space-y-4">
          
          {/* Header Title with Clean Inline Capital Band */}
          <div className="pb-3 border-b border-borderSubtle/60">
            <div className="font-mono text-[10px] font-bold text-accent uppercase tracking-wide mb-1">
              {activeData.label} · SYSTEM SPECIFICATIONS
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="font-sans text-lg sm:text-2xl font-bold text-textMain tracking-tight">
                {activeData.name}
              </h4>
              <div className="font-mono text-[11px] text-textMuted uppercase tracking-wide">
                CAPITAL BAND: <span className="text-textMain font-semibold">{activeData.bracket}</span>
              </div>
            </div>
          </div>

          {/* Description Copy */}
          <p className="text-[13px] sm:text-sm text-textSub font-sans leading-relaxed max-w-2xl">
            {activeData.description}
          </p>

          {/* Grid-Locked Specification Table */}
          <div className="divide-y divide-borderSubtle/50 border border-borderSubtle bg-canvas/60 rounded overflow-hidden">
            <div className="py-2.5 px-3.5 grid grid-cols-12 items-baseline">
              <span className="col-span-5 font-mono text-textMuted uppercase text-[10px] tracking-wide">
                THREAD ISOLATION
              </span>
              <span className="col-span-7 font-mono text-[11px] sm:text-xs text-textMain font-medium text-right leading-snug">
                {activeData.thread}
              </span>
            </div>

            <div className="py-2.5 px-3.5 grid grid-cols-12 items-baseline">
              <span className="col-span-5 font-mono text-textMuted uppercase text-[10px] tracking-wide">
                QUEUE PRIORITY
              </span>
              <span className="col-span-7 font-mono text-[11px] sm:text-xs text-textMain font-medium text-right leading-snug">
                {activeData.queue}
              </span>
            </div>

            <div className="py-2.5 px-3.5 grid grid-cols-12 items-baseline">
              <span className="col-span-5 font-mono text-textMuted uppercase text-[10px] tracking-wide">
                DRAWDOWN CIRCUIT FLOOR
              </span>
              <span className="col-span-7 font-mono text-[11px] sm:text-xs text-textMain font-medium text-right leading-snug">
                {activeData.drawdownFloor}
              </span>
            </div>

            <div className="py-2.5 px-3.5 grid grid-cols-12 items-baseline">
              <span className="col-span-5 font-mono text-textMuted uppercase text-[10px] tracking-wide">
                API SCOPE PERMISSIONS
              </span>
              <span className="col-span-7 font-mono text-[11px] sm:text-xs text-textMain font-medium text-right leading-snug">
                {activeData.apiScope}
              </span>
            </div>
          </div>

          {/* Rate Card & Terminal Execution Action */}
          <div className="p-4 rounded bg-canvas border border-borderSubtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-2">
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] font-bold text-textMuted uppercase tracking-wide block">
                SYSTEM ALLOCATION RATE
              </span>
              <div className="flex items-baseline space-x-1.5 font-mono">
                <span className="text-2xl sm:text-3xl font-bold text-textMain tracking-tight font-num">${fee}</span>
                <span className="text-textMuted text-xs font-sans">/month</span>
                {isQuarterly && activeData.feeQuarterly > 0 && (
                  <span className="text-[10.5px] text-textMuted font-mono ml-1">
                    (${activeData.feeQuarterly} billed quarterly)
                  </span>
                )}
              </div>
              <div className="text-[10px] font-mono text-textMuted tracking-wide pt-0.5">
                STATUS: {activeData.capacityText}
              </div>
            </div>

            {/* Institutional Dispatch Trigger */}
            <a
              href="https://t.me/echelonmech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded bg-panel/90 border border-accent/40 hover:border-accent hover:bg-panel active:scale-[0.99] text-textMain font-mono text-xs font-bold uppercase tracking-wider text-center transition-all shrink-0 flex items-center justify-center space-x-2 cursor-pointer shadow-sm group"
            >
              <span className="group-hover:text-accent transition-colors">{activeData.ctaText}</span>
              <span className="text-accent group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
