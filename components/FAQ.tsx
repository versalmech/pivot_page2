'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: '01',
    question: 'How does non-custodial API integration safeguard client equity?',
    answer: (
      <>
        API credentials require only <strong className="text-textMain font-semibold">Read</strong> and <strong className="text-textMain font-semibold">Trade</strong> permissions. Fund transfer and withdrawal rights are explicitly disabled on the exchange. Echelon Mechanics cannot access, extract, or transfer account equity.
      </>
    ),
  },
  {
    id: '02',
    question: 'Which exchanges and contract types are supported?',
    answer: (
      <>
        Execution is calibrated for BingX Perpetual Futures with isolated margin routing. Order routing targets high-liquidity contracts with continuous depth to avoid execution slippage.
      </>
    ),
  },
  {
    id: '03',
    question: 'How are stop-loss orders executed during volatile volatility spikes?',
    answer: (
      <>
        Position entries automatically submit paired stop-loss orders directly to the exchange order book upon fill. Risk sizing is locked at a fixed 0.75% per dispatch with hardcoded stops to prevent cascade exposure.
      </>
    ),
  },
  {
    id: '04',
    question: 'What is the difference between Dispatch Telemetry and Execution Core?',
    answer: (
      <>
        <strong className="text-textMain font-semibold">Dispatch Telemetry (Tier 1)</strong> broadcasts live entry, scale-out, and invalidation prices for manual account execution. <strong className="text-textMain font-semibold">Execution Core (Tier 2)</strong> links directly via exchange API to place orders, adjust brackets, and trail stops automatically.
      </>
    ),
  },
  {
    id: '05',
    question: 'Can position leverage and trade risk be customized?',
    answer: (
      <>
        Core execution tiers enforce an invariant 0.75% risk model with isolated margin to ensure systematic reliability. Institutional Gateway tiers permit custom allocation ceilings, multi-account routing, and bespoke drawdown cutoffs.
      </>
    ),
  },
  {
    id: '06',
    question: 'How can performance be verified before connecting an account?',
    answer: (
      <>
        Historical and forward executions stream live in our <strong className="text-textMain font-semibold">Public Telemetry Feed</strong>. The observer terminal displays 24h, 7d, and 30d rolling metrics, real-time position status, and forward-run audit logs.
      </>
    ),
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('01');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 border-t border-borderSubtle bg-canvas font-sans">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wide text-textSub mb-2">
            SYSTEM INQUIRIES & PARAMETERS
          </h2>
          <h3 className="font-sans text-xl sm:text-3xl font-bold text-textMain tracking-tight mb-2">
            Frequently Asked Questions
          </h3>
          <p className="text-sm sm:text-base text-textSub font-normal leading-relaxed font-sans">
            Technical clarification on API key permissions, risk enforcement, exchange routing, and system infrastructure.
          </p>
        </div>

        {/* Single Flat Accordion Container */}
        <div className="rounded border border-borderSubtle bg-panel divide-y divide-borderSubtle/60 overflow-hidden shadow-lg">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div 
                key={item.id} 
                className={`transition-colors ${isOpen ? 'bg-panel/90' : 'hover:bg-panelHover'}`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between space-x-4 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <span className="font-mono text-xs font-bold text-accent shrink-0 pt-0.5">
                      {item.id}
                    </span>
                    <span className={`font-sans text-sm sm:text-base font-bold tracking-tight transition-colors ${
                      isOpen ? 'text-textMain' : 'text-textMain group-hover:text-accent'
                    }`}>
                      {item.question}
                    </span>
                  </div>

                  <span className={`font-mono text-xs font-bold shrink-0 pt-0.5 transition-colors ${
                    isOpen ? 'text-accent' : 'text-textMuted group-hover:text-textMain'
                  }`}>
                    {isOpen ? '[ - ]' : '[ + ]'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 pl-11 sm:pl-12">
                    <p className="text-[13px] sm:text-sm text-textSub font-sans leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
