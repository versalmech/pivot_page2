'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-borderSubtle bg-canvas text-textSub font-sans pt-8 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Brand & Status Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-borderSubtle/60">
          <div className="flex items-center space-x-2.5">
            <div className="w-6 h-6 rounded bg-canvas border border-accentBorder flex items-center justify-center font-mono font-bold text-xs text-accent shadow-sm">
              EM
            </div>
            <span className="font-mono font-bold text-textMain text-sm uppercase tracking-wider">
              ECHELON MECHANICS
            </span>
          </div>

          <div className="flex items-center space-x-2 px-2.5 py-1 rounded bg-panel border border-borderSubtle">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] text-textMain font-semibold tracking-wider uppercase">
              SYSTEM OPERATIONAL · 99.98%
            </span>
          </div>
        </div>

        {/* Compact Navigation & Dispatch Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 border-b border-borderSubtle/60">
          
          {/* Column 1: System Architecture */}
          <div className="space-y-2">
            <h4 className="font-mono text-[10px] font-bold text-textMuted uppercase tracking-wide">
              ARCHITECTURE
            </h4>
            <ul className="space-y-1.5 text-xs font-sans">
              <li>
                <a href="#audit" className="hover:text-accent transition-colors text-textSub">
                  Telemetry Metrics
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-accent transition-colors text-textSub">
                  Routing Engine
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-accent transition-colors text-textSub">
                  API Key Security
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Allocation & Protocol */}
          <div className="space-y-2">
            <h4 className="font-mono text-[10px] font-bold text-textMuted uppercase tracking-wide">
              ALLOCATION & SLA
            </h4>
            <ul className="space-y-1.5 text-xs font-sans">
              <li>
                <a href="#tiers" className="hover:text-accent transition-colors text-textSub">
                  Capital Tiers
                </a>
              </li>
              <li>
                <a href="#protocol" className="hover:text-accent transition-colors text-textSub">
                  Operational Protocol
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors text-textSub">
                  Technical FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Compact Terminal Access */}
          <div className="col-span-2 sm:col-span-1 space-y-2 pt-2 sm:pt-0">
            <h4 className="font-mono text-[10px] font-bold text-textMuted uppercase tracking-wide">
              TERMINAL ACCESS
            </h4>
            <div className="flex sm:flex-col gap-2">
              <a
                href="https://t.me/defisnyper"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded bg-panel border border-borderSubtle hover:border-accent/80 hover:bg-panelHover text-textMain hover:text-accent font-mono text-[10px] font-bold transition-all text-center flex-1 sm:flex-none shadow-sm cursor-pointer"
              >
                BOT TERMINAL &rarr;
              </a>
              <a
                href="https://t.me/defisnyper"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded bg-panel border border-borderSubtle hover:border-accent/80 hover:bg-panelHover text-textMain hover:text-accent font-mono text-[10px] font-bold transition-all text-center flex-1 sm:flex-none shadow-sm cursor-pointer"
              >
                AUDIT CHANNEL &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Footnote & Clean Risk Disclosure */}
        <div className="pt-6 space-y-3">
          <p className="text-[10px] text-textMuted font-sans leading-relaxed">
            <strong className="font-mono text-textMuted">RISK DISCLOSURE:</strong> Derivatives trading involves substantial risk of loss. Past performance audits do not guarantee future returns. Echelon Mechanics operates strictly as non-custodial software via restricted API keys (Read + Trade permissions only) and never holds or transfers client funds.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] font-mono text-textMuted pt-2 border-t border-borderSubtle/40">
            <div>&copy; {currentYear} ECHELON MECHANICS. ALL RIGHTS RESERVED.</div>
            <div className="flex space-x-3 text-textMuted/80">
              <span>ISOLATED MARGIN</span>
              <span>·</span>
              <span>RESTRICTED API</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
