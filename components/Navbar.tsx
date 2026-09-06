'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { num: '01', label: 'TELEMETRY METRICS', href: '#audit' },
    { num: '02', label: 'ROUTING ENGINE', href: '#architecture' },
    { num: '03', label: 'API SECURITY', href: '#security' },
    { num: '04', label: 'CAPITAL ALLOCATION', href: '#tiers' },
    { num: '05', label: 'OPERATIONAL PROTOCOL', href: '#protocol' },
    { num: '06', label: 'TECHNICAL FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur-md border-b border-borderSubtle font-sans">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 h-14 flex items-center justify-between gap-2">
        
        {/* Brand Block */}
        <a href="#" className="flex items-center space-x-2 sm:space-x-2.5 shrink-0 group">
          <div className="w-6 sm:w-7 h-6 sm:h-7 rounded bg-canvas border border-accentBorder flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs text-accent group-hover:border-accent transition-colors shadow-sm">
            EM
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1 font-mono text-[11px] sm:text-xs tracking-wider leading-none">
              <span className="font-bold text-textMain">ECHELON</span>
              <span className="font-normal text-textSub">MECHANICS</span>
            </div>
            <span className="font-mono text-[8px] sm:text-[9px] text-textMuted uppercase tracking-widest leading-none mt-1">
              QUANTITATIVE INFRASTRUCTURE
            </span>
          </div>
        </a>

        {/* Right Action Block */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
          <a
            href="https://t.me/echelonmech"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded bg-panelHover border border-accentBorder hover:border-accent text-textMain hover:text-accent font-mono font-bold text-[10px] tracking-wider uppercase transition-all shadow-sm"
          >
            TERMINAL &rarr;
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="px-2.5 py-1.5 rounded bg-panel border border-borderSubtle text-textSub hover:text-textMain sm:hidden font-mono text-[10px] font-bold focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
          </button>
        </div>

      </div>

      {/* Flat Terminal Overlay Drawer (Purged Box Bricks) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-borderSubtle bg-panel/98 backdrop-blur-lg shadow-2xl divide-y divide-borderSubtle/50">
          {navLinks.map((item) => (
            <a
              key={item.num}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 font-mono text-[11px] text-textSub hover:text-accent hover:bg-canvas/60 transition-all"
            >
              <div className="flex items-center space-x-3">
                <span className="text-textMuted font-bold">{item.num}</span>
                <span className="font-semibold tracking-wider">{item.label}</span>
              </div>
              <span className="text-textMuted text-[10px]">&rarr;</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
