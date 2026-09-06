'use client';

import React from 'react';

interface ProtocolStep {
  index: string;
  tag: string;
  title: string;
  badge: string;
  desc: React.ReactNode;
  footerTag: string;
  footerValue: string;
}

const STEPS: ProtocolStep[] = [
  {
    index: '01',
    tag: 'SYSTEM VERIFICATION',
    title: 'Live Telemetry & Forward Audit Feed',
    badge: 'ZERO DISCRETION',
    desc: (
      <>
        Observe the architecture in real time before deployment. Access the live telemetry stream to monitor algorithmic dispatches, trailing stop updates, partial scale-outs, and rolling equity progression directly from our forward execution engine.
      </>
    ),
    footerTag: 'MONITORING MODE',
    footerValue: 'Public Execution Stream',
  },
  {
    index: '02',
    tag: 'KEY PROVISIONING',
    title: 'Restricted API Credential Generation',
    badge: 'NON-CUSTODIAL',
    desc: (
      <>
        Generate dedicated API credentials on BingX Perpetual Futures. Restrict permissions exclusively to read and trade functionality. Withdrawal and transfer authorizations remain permanently disabled at the exchange layer—ensuring zero capital custody.
      </>
    ),
    footerTag: 'SECURITY POLICY',
    footerValue: 'Trade-Only Access',
  },
  {
    index: '03',
    tag: 'GATEWAY BINDING',
    title: 'Terminal Key Binding & Slot Allocation',
    badge: 'HARDWARE AES-256',
    desc: (
      <>
        Transmit encrypted API credentials to the Echelon Execution Gateway. The engine validates permissions, reserves your allocated subscription slot, and runs connectivity checks against exchange margin pools before initiating trade synchronization.
      </>
    ),
    footerTag: 'ENCRYPTION SPEC',
    footerValue: 'Client-Side Hash & Encrypt',
  },
  {
    index: '04',
    tag: 'AUTOMATED ROUTING',
    title: 'Execution Synchronization & Vector Sizing',
    badge: 'INVARIANT 0.75% SIZING',
    desc: (
      <>
        The routing engine manages position entries, partial scale targets, and breakeven stop ratchets completely autonomously. Portfolio exposure dynamically scales to active market regimes with sub-120ms execution dispatch across all matrix pairs.
      </>
    ),
    footerTag: 'EXECUTION SLA',
    footerValue: '<120ms Deterministic Fill',
  },
];

export default function OperationalProtocol() {
  return (
    <section id="protocol" className="py-12 sm:py-20 border-t border-borderSubtle bg-canvas font-sans">
      <div className="max-w-5xl mx-auto px-3 sm:px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-[11px] font-mono font-semibold uppercase tracking-widest text-accent mb-2">
            INTEGRATION PIPELINE
          </h2>
          <h3 className="font-sans text-xl sm:text-3xl font-bold text-textMain tracking-tight mb-3">
            System Operational Protocol
          </h3>
          <p className="text-[14px] sm:text-base md:text-[16px] text-textSub font-normal leading-relaxed max-w-xl mx-auto">
            A 4-stage non-custodial pipeline connecting Echelon Mechanics directly to your exchange desk with zero principal custody.
          </p>
        </div>

        {/* 4 Steps Grid: Base Cyan -> Hover Pure White Flip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {STEPS.map((step) => (
            <div
              key={step.index}
              className="group relative p-5 sm:p-6 rounded bg-panel border border-borderSubtle flex flex-col justify-between shadow-lg transition-all duration-200 hover:border-white hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,255,255,0.06)] active:scale-[0.99] space-y-4 cursor-default"
            >
              <div className="space-y-3">
                {/* Header Tag Line */}
                <div className="flex items-center justify-between border-b border-borderSubtle/50 pb-2.5 transition-colors group-hover:border-white/20">
                  <div className="flex items-center space-x-2 font-mono text-xs">
                    <span className="font-bold text-accent transition-colors group-hover:text-white">
                      {step.index}
                    </span>
                    <span className="text-textMuted/40">·</span>
                    <span className="text-textMuted text-[10px] font-semibold uppercase tracking-wide transition-colors group-hover:text-white/80">
                      {step.tag}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-accent font-semibold px-1.5 py-0.5 rounded bg-canvas border border-accentBorder transition-colors group-hover:border-white group-hover:text-white">
                    {step.badge}
                  </span>
                </div>

                {/* Title: Base Accent Cyan/Blue -> Flips to Crisp White on Hover */}
                <h4 className="font-sans text-base sm:text-lg font-bold text-accent tracking-tight leading-snug transition-colors duration-200 group-hover:text-white">
                  {step.title}
                </h4>

                {/* Body Copy: Stays Subdued */}
                <p className="text-[13px] text-textSub font-normal leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              {/* Monospace Parameter Footnote */}
              <div className="pt-3 border-t border-borderSubtle/60 flex items-center justify-between font-mono text-[10px] transition-colors group-hover:border-white/20">
                <span className="text-textMuted uppercase tracking-wider">{step.footerTag}:</span>
                <span className="text-accent font-semibold tracking-wide transition-colors group-hover:text-white">
                  {step.footerValue}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
