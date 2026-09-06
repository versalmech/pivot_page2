'use client';

import React from 'react';

export default function SecurityProtocol() {
  const securityPillars = [
    {
      index: '01',
      title: 'Restricted API Scope & Non-Custodial Isolation',
      detail: 'Zero Withdrawal & Transfer Access',
      content: (
        <>
          API keys are generated strictly with{' '}
          <strong className="text-textMain font-semibold">Read</strong> and{' '}
          <strong className="text-textMain font-semibold">Trade</strong> permissions. Transfer and withdrawal permissions are explicitly disabled upon key generation. Echelon Mechanics cannot access or move client funds.
        </>
      ),
    },
    {
      index: '02',
      title: 'Exchange-Native Stop-Loss Enforcement',
      detail: 'Isolated Margin Protection Mode',
      content: (
        <>
          Stop-loss orders are submitted directly to the{' '}
          <strong className="text-textMain font-semibold">exchange order book</strong> immediately upon position fill. Total risk exposure is capped to isolated position margin under{' '}
          <strong className="text-textMain font-semibold">Isolated Margin</strong> routing.
        </>
      ),
    },
    {
      index: '03',
      title: 'Algorithmic Scale-Out & Capital Floor Safeguard',
      detail: 'Automated Risk-Free Position Scaling',
      content: (
        <>
          Initial structural targets trigger automated partial profit realization while shifting the stop-loss directly to entry—securing risk-free position status to capture asymmetric{' '}
          <strong className="text-textMain font-mono font-semibold">5R+</strong> trend expansion vectors.
        </>
      ),
    },
  ];

  return (
    <section id="security" className="py-12 sm:py-20 border-t border-borderSubtle bg-canvas font-sans">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-textSub mb-2">
            ACCOUNT SECURITY & API CONSTRAINTS
          </h2>
          <h3 className="font-sans text-xl sm:text-3xl font-bold text-textMain tracking-tight mb-2">
            Non-Custodial API Risk Architecture
          </h3>
          <p className="text-sm sm:text-base text-textSub font-normal leading-relaxed font-sans">
            Your capital remains on supported tier-1 exchanges at all times. Echelon Mechanics operates strictly via automated API trade routing without withdrawal access.
          </p>
        </div>

        {/* Ledger Container */}
        <div className="rounded border border-borderSubtle bg-panel divide-y divide-borderSubtle/60 overflow-hidden shadow-lg">
          {securityPillars.map((pillar) => (
            <div
              key={pillar.index}
              className="p-5 sm:p-6 flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-5 hover:bg-panelHover transition-colors"
            >
              {/* Pillar Number Tag */}
              <div className="w-8 h-8 rounded bg-canvas border border-accentBorder flex items-center justify-center font-mono font-bold text-xs text-accent shrink-0 mt-0.5 shadow-inner">
                {pillar.index}
              </div>

              {/* Pillar Content */}
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-sans text-base font-bold text-textMain">
                    {pillar.title}
                  </h4>
                  <span className="font-mono text-[11.3px] text-accent uppercase tracking-wider">
                    {pillar.detail}
                  </span>
                </div>
                {/* Pillar Body Copy set to 13px (text-[13px]) on mobile */}
                <p className="text-[13px] sm:text-sm text-textSub font-normal leading-relaxed font-sans">
                  {pillar.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
