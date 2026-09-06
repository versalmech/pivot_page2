'use client';

import React from 'react';

interface RowSpec {
  metric: string;
  delta: string;
  legacy: {
    badge: string;
    stat: string;
    desc: string;
  };
  echelon: {
    badge: string;
    stat: string;
    desc: string;
  };
}

const MATRIX_SPECS: RowSpec[] = [
  {
    metric: '01. RISK ASYMMETRY',
    delta: '+3.10R SPREAD',
    legacy: {
      badge: 'SYMMETRIC DRAG',
      stat: '1.0R : 0.2R PAYOFF',
      desc: 'Risks $100 to capture $20. A single adverse stop liquidates multiple sessions of accumulated gains.',
    },
    echelon: {
      badge: '5R+ RUNNER VECTORS',
      stat: '1.0R : 5.0R+ PAYOFF',
      desc: 'Engineered for multi-wave expansions with automated breakeven ratchets securing risk-free runner equity.',
    },
  },
  {
    metric: '02. EXECUTION SELECTIVITY',
    delta: '90%+ NOISE PURGED',
    legacy: {
      badge: 'ORDER CHURN',
      stat: '20–50 TRADES / DAY',
      desc: 'Indiscriminate execution across low-conviction range chop, accelerating broker commission decay.',
    },
    echelon: {
      badge: 'REGIME FILTERED',
      stat: '2–4 SETUPS / DAY',
      desc: 'Multi-stage confluence gates. Preserves 100% cash liquidity when market books offer no statistical edge.',
    },
  },
  {
    metric: '03. FRICTION INSULATION',
    delta: 'ZERO FEE DRAG',
    legacy: {
      badge: 'MARGIN EROSION',
      stat: 'HIGH TAKER DECAY',
      desc: 'Micro-targets consumed by bid-ask spread decay and compound exchange fees regardless of raw win rate.',
    },
    echelon: {
      badge: 'TARGET EXPANSION',
      stat: 'ALPHA PRESERVATION',
      desc: 'High-conviction structural entries paired with wide target expansion to absorb exchange fee drag without degrading net alpha.',
    },
  },
];

export default function Comparison() {
  return (
    <section id="architecture" className="py-10 sm:py-16 border-t border-borderSubtle bg-canvas font-sans">
      <div className="max-w-4xl mx-auto px-3 sm:px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-[11px] font-mono font-semibold uppercase tracking-widest text-accent mb-2">
            EXECUTION MODEL DISTINCTION
          </h2>
          <h3 className="font-sans text-xl sm:text-3xl font-bold text-textMain tracking-tight mb-3">
            High-Frequency Churn vs. Structural Selection
          </h3>
          <p className="text-[15px] sm:text-base md:text-[17px] text-textSub font-normal leading-relaxed font-sans max-w-xl mx-auto">
            Why micro-scalping erodes equity through fee friction, and how selective structural routing captures sustained 5R+ trend expansion.
          </p>
        </div>

        {/* Unified Ledger */}
        <div className="rounded border border-borderSubtle bg-panel divide-y divide-borderSubtle/60 overflow-hidden shadow-lg">
          {MATRIX_SPECS.map((row) => (
            <div key={row.metric} className="p-4 sm:p-5 space-y-3 hover:bg-panelHover/30 transition-colors">
              
              {/* Row Header */}
              <div className="flex items-center justify-between border-b border-borderSubtle/40 pb-2">
                <span className="font-mono text-xs font-bold text-textMain uppercase tracking-wide">
                  {row.metric}
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-accent font-semibold px-2 py-0.5 rounded bg-canvas border border-accentBorder">
                  {row.delta}
                </span>
              </div>

              {/* Data Rails */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-0.5">
                
                {/* Legacy Churn Rail */}
                <div className="border-l-2 border-drawdownR/70 pl-3 space-y-1">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="font-bold text-drawdownR uppercase tracking-wider">
                      &times; {row.legacy.badge}
                    </span>
                    <span className="text-textMuted font-medium">{row.legacy.stat}</span>
                  </div>
                  <p className="text-[12.5px] sm:text-[13px] text-textMuted font-normal leading-snug font-sans">
                    {row.legacy.desc}
                  </p>
                </div>

                {/* Echelon Rail */}
                <div className="border-l-2 border-accent pl-3 space-y-1">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="font-bold text-accent uppercase tracking-wider">
                      &#10003; {row.echelon.badge}
                    </span>
                    <span className="text-positiveR font-medium font-num">{row.echelon.stat}</span>
                  </div>
                  <p className="text-[12.5px] sm:text-[13px] text-textSub font-normal leading-snug font-sans">
                    {row.echelon.desc}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
