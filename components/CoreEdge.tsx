'use client';

import React from 'react';

interface EdgePillar {
  index: string;
  tag: string;
  title: string;
  badge: string;
  desc: React.ReactNode;
  footerTag: string;
  footerValue: string;
}

const PILLARS: EdgePillar[] = [
  {
    index: '01',
    tag: 'REGIME ROUTING',
    title: 'Dynamic Cross-Regime Capital Routing',
    badge: '6-ASSET POOLED MATRIX',
    desc: (
      <>
        Market regimes are never uniform. When high-beta assets consolidate into low-volatility ranges, uncorrelated matrix assets decouple to provide clean directional expansion. Rather than remaining dormant or forcing low-probability churn, Echelon dynamically shifts execution priority—culling over 90% of intra-day noise to deploy only <strong className="text-accent font-semibold font-mono">2 to 4 high-conviction structural vectors daily</strong> aligned with active liquidity conditions.
      </>
    ),
    footerTag: 'MATRIX DIVERSIFICATION',
    footerValue: 'Regime-Decoupled Routing',
  },
  {
    index: '02',
    tag: 'ASYMMETRIC PAYOFF',
    title: '+4.33R Realized Target Alpha',
    badge: '+4.33R REALIZED MEAN',
    desc: (
      <>
        Long-term capital survival demands structural payoff asymmetry over fragile, high-probability micro-scalping. Echelon is engineered for structural expansions where fully realized winning trades yield <strong className="text-positiveR font-mono font-bold">+4.33R net return</strong> across disciplined 3-tier scale-outs (2.5R, 5.0R, and 7.0R). Factoring in all stop-outs, fee drag, and market friction across 624 forward executions, the engine extracts a net portfolio expectancy of <strong className="text-accent font-mono font-bold">+1.15R pure alpha on every single trade fired</strong>.
      </>
    ),
    footerTag: 'WINNING PAYOUT',
    footerValue: '+4.33R Realized Mean',
  },
  {
    index: '03',
    tag: 'RISK INVARIANCE',
    title: 'Deterministic Sizing & Capital Insulation',
    badge: '0.75% RISK CEILING',
    desc: (
      <>
        Systematic portfolio survival requires deterministic risk boundaries rather than dynamic or discretionary position scaling. Every execution dispatch is constrained to an invariant <strong className="text-accent font-mono font-semibold">0.75% portfolio equity ceiling</strong>. Upon reaching the initial expansion milestone, automated order logic captures partial liquidity and transitions the stop to entry—completely neutralizing principal exposure and letting runners expand without downside equity variance.
      </>
    ),
    footerTag: 'TAIL-RISK PROTOCOL',
    footerValue: 'Automated Stop Ratchet',
  },
];

export default function CoreEdge() {
  return (
    <section id="edge" className="py-12 sm:py-20 border-t border-borderSubtle bg-canvas font-sans">
      <div className="max-w-5xl mx-auto px-3 sm:px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-[11px] font-mono font-semibold uppercase tracking-widest text-accent mb-2">
            EMPIRICAL QUANTITATIVE ARCHITECTURE
          </h2>
          <h3 className="font-sans text-xl sm:text-3xl font-bold text-textMain tracking-tight mb-3">
            The Discipline Mechanics Behind Our Forward Alpha
          </h3>
          <p className="text-[15px] sm:text-base md:text-[17px] text-textSub font-normal leading-relaxed font-sans max-w-xl mx-auto">
            How dynamic regime routing, 0.75% deterministic risk bounds, and multi-target scale-outs compound out-of-sample alpha.
          </p>
        </div>

        {/* 3 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.index}
              className="p-5 sm:p-6 rounded bg-panel border border-borderSubtle flex flex-col justify-between shadow-lg hover:border-borderCrisp transition-colors space-y-4"
            >
              <div className="space-y-3">
                {/* Header Tag Line */}
                <div className="flex items-center justify-between border-b border-borderSubtle/50 pb-2.5">
                  <div className="flex items-center space-x-1.5 font-mono text-xs">
                    <span className="font-bold text-accent">{pillar.index} //</span>
                    <span className="text-textMuted text-[10px] font-semibold uppercase tracking-wide">
                      {pillar.tag}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-accent font-semibold px-1.5 py-0.5 rounded bg-canvas border border-accentBorder">
                    {pillar.badge}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-sans text-base sm:text-lg font-bold text-textMain tracking-tight leading-snug">
                  {pillar.title}
                </h4>

                {/* Body Copy */}
                <p className="text-[13px] text-textSub font-normal leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>

              {/* Monospace Parameter Footnote */}
              <div className="pt-3 border-t border-borderSubtle/60 flex items-center justify-between font-mono text-[10px]">
                <span className="text-textMuted uppercase tracking-wider">{pillar.footerTag}:</span>
                <span className="text-accent font-semibold tracking-wide">{pillar.footerValue}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
