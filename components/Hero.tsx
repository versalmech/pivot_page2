'use client';

import React from 'react';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-14 sm:pt-16 sm:pb-20 border-b border-borderSubtle bg-canvas font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-7">
        
        {/* Compact Terminal Telemetry Pill */}
        <div className="inline-flex items-center justify-center gap-2 sm:gap-3 px-3 py-1.5 rounded-full bg-panel border border-borderSubtle font-mono text-[9.5px] sm:text-[11px] shadow-sm">
          <div className="flex items-center space-x-1.5 text-textSub">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
            <span>CAPACITY: <strong className="text-textMain font-medium">12/50 SLOTS</strong></span>
          </div>
          <span className="text-borderSubtle">|</span>
          <div className="text-accent font-semibold flex items-center space-x-1">
            <span>&#10003; 8-MO AUDITED FORWARD RUN</span>
          </div>
        </div>

        {/* Primary Header Group */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-textMain tracking-tight leading-tight">
            Automated Execution Infrastructure Engineered for{' '}
            <span className="text-accent">Quantitative Precision</span>
          </h1>
          <p className="text-[14px] sm:text-base md:text-[17px] text-textSub font-normal leading-relaxed max-w-2xl mx-auto px-1">
            Deterministic API trade routing for perpetual futures desks. Stress-tested across dynamic market regimes, multi-stage structural gates filter intra-day noise to capture asymmetric +4.33R realized expansion vectors.
          </p>
        </div>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 max-w-md mx-auto">
          <a
            href="https://t.me/echelonmech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded bg-accent text-canvas font-mono text-xs font-bold uppercase tracking-wider hover:opacity-95 active:scale-[0.98] transition-all text-center shadow-lg cursor-pointer"
          >
            Initialize API Routing &rarr;
          </a>
          <a
            href="#edge"
            onClick={(e) => handleScroll(e, 'edge')}
            className="w-full sm:w-auto px-6 py-3 rounded bg-panel border border-borderSubtle text-textSub font-mono text-xs font-semibold uppercase tracking-wider hover:text-textMain hover:border-borderCrisp active:scale-[0.98] transition-all text-center cursor-pointer"
          >
            Inspect Specifications
          </a>
        </div>

        {/* Option B: Quantitative Alpha Triad */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 max-w-2xl mx-auto">
          
          {/* Compounded Cumulative Return */}
          <div className="p-2.5 sm:p-4 rounded bg-panel border border-borderSubtle flex flex-col items-center justify-center space-y-1">
            <span className="font-mono text-base sm:text-2xl md:text-3xl font-bold text-positiveR font-num">
              +4,940%
            </span>
            <span className="font-mono text-[8.5px] sm:text-[10px] text-textMuted uppercase tracking-wider">
              Compounded Return
            </span>
            <span className="font-mono text-[7.5px] sm:text-[8.5px] text-accent/80 tracking-tight">
              8-Mo Forward Run
            </span>
          </div>

          {/* Realized Win Payout */}
          <div className="p-2.5 sm:p-4 rounded bg-panel border border-borderSubtle flex flex-col items-center justify-center space-y-1">
            <span className="font-mono text-base sm:text-2xl md:text-3xl font-bold text-accent font-num">
              2.34
            </span>
            <span className="font-mono text-[8.5px] sm:text-[10px] text-textMuted uppercase tracking-wider">
              Profit Factor
            </span>
            <span className="font-mono text-[7.5px] sm:text-[8.5px] text-textMuted tracking-tight">
              +1.10 Avg R • 633 tr
            </span>
          </div>

          {/* Max Peak Drawdown */}
          <div className="p-2.5 sm:p-4 rounded bg-panel border border-borderSubtle flex flex-col items-center justify-center space-y-1">
            <span className="font-mono text-base sm:text-2xl md:text-3xl font-bold text-drawdownR font-num">
              -16.7%
            </span>
            <span className="font-mono text-[8.5px] sm:text-[10px] text-textMuted uppercase tracking-wider">
              Max Drawdown
            </span>
            <span className="font-mono text-[7.5px] sm:text-[8.5px] text-accent/80 tracking-tight">
              @ 0.75% Risk Ceiling
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
