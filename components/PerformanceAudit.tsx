'use client';

import React, { useState } from 'react';

type AuditTab = 'matrix' | '7d' | '30d';

interface MonthlyMetric {
  period: string;
  trades: number;
  wr: string;
  pf: string;
  avgR: string;
  pnlDollar: string;
  pnlPct: string;
  ddPct: string;
}

interface CompoundedMetric {
  period: string;
  trades: number;
  wr: string;
  startBal: string;
  endBal: string;
  gainPct: string;
  maxDDPct: string;
}

const SECTION_1_DATA: MonthlyMetric[] = [
  { period: "JAN '26", trades: 56, wr: '32.1%', pf: '1.69', avgR: '+0.47', pnlDollar: '+$196.2', pnlPct: '+19.6%', ddPct: '7.2%' },
  { period: "FEB '26", trades: 38, wr: '42.1%', pf: '2.55', avgR: '+0.90', pnlDollar: '+$256.5', pnlPct: '+25.7%', ddPct: '5.3%' },
  { period: "MAR '26", trades: 31, wr: '41.9%', pf: '2.26', avgR: '+0.69', pnlDollar: '+$160.8', pnlPct: '+16.1%', ddPct: '4.3%' },
  { period: "APR '26", trades: 39, wr: '35.9%', pf: '2.07', avgR: '+0.67', pnlDollar: '+$194.7', pnlPct: '+19.5%', ddPct: '4.0%' },
  { period: "MAY '26", trades: 45, wr: '60.0%', pf: '5.68', avgR: '+1.87', pnlDollar: '+$631.8', pnlPct: '+63.2%', ddPct: '2.6%' },
  { period: "JUN '26", trades: 53, wr: '54.7%', pf: '3.94', avgR: '+1.33', pnlDollar: '+$529.8', pnlPct: '+53.0%', ddPct: '2.2%' },
  { period: "JUL '26", trades: 51, wr: '49.0%', pf: '2.45', avgR: '+0.74', pnlDollar: '+$282.2', pnlPct: '+28.2%', ddPct: '4.4%' },
  { period: "AUG '26", trades: 46, wr: '28.3%', pf: '1.68', avgR: '+0.49', pnlDollar: '+$168.9', pnlPct: '+16.9%', ddPct: '4.4%' },
];

const SECTION_2_DATA: CompoundedMetric[] = [
  { period: "JAN '26", trades: 56, wr: '32.1%', startBal: '1,000.0', endBal: '1,206.5', gainPct: '+20.6%', maxDDPct: '7.3%' },
  { period: "FEB '26", trades: 38, wr: '42.1%', startBal: '1,206.5', endBal: '1,548.4', gainPct: '+28.3%', maxDDPct: '5.5%' },
  { period: "MAR '26", trades: 31, wr: '41.9%', startBal: '1,548.4', endBal: '1,810.0', gainPct: '+16.9%', maxDDPct: '4.4%' },
  { period: "APR '26", trades: 39, wr: '35.9%', startBal: '1,810.0', endBal: '2,185.1', gainPct: '+20.7%', maxDDPct: '4.6%' },
  { period: "MAY '26", trades: 45, wr: '60.0%', startBal: '2,185.1', endBal: '4,060.6', gainPct: '+85.8%', maxDDPct: '3.0%' },
  { period: "JUN '26", trades: 53, wr: '54.7%', startBal: '4,060.6', endBal: '6,818.1', gainPct: '+67.9%', maxDDPct: '3.0%' },
  { period: "JUL '26", trades: 51, wr: '49.0%', startBal: '6,818.1', endBal: '8,971.7', gainPct: '+31.6%', maxDDPct: '5.0%' },
  { period: "AUG '26", trades: 46, wr: '28.3%', startBal: '8,971.7', endBal: '10,543.9', gainPct: '+17.5%', maxDDPct: '4.7%' },
];

export default function PerformanceAudit() {
  const [activeTab, setActiveTab] = useState<AuditTab>('matrix');

  return (
    <section id="audit" className="py-12 sm:py-20 border-t border-borderSubtle bg-canvas font-sans">
      <div className="max-w-5xl mx-auto px-3 sm:px-4">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-accent mb-2">
            EMPIRICAL FORWARD EXECUTION // 2026 MULTI-ASSET MATRIX
          </h2>
          <h3 className="font-sans text-xl sm:text-3xl font-bold text-textMain tracking-tight mb-3">
            Out-of-Sample Quantitative Execution Ledger
          </h3>
          <p className="text-sm sm:text-base text-textSub font-normal leading-relaxed">
            Live un-optimized telemetry across a pooled 5-asset matrix (BTC, ETH, SOL, BNB, AVAX). Verifiable proof that asymmetric payoff and disciplined execution outperform curve-fitted fantasies.
          </p>
        </div>

        {/* Tab Navigation & Status */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-3 border-b border-borderSubtle">
          <div className="flex items-center space-x-1.5 w-full sm:w-auto bg-panel p-1 rounded border border-borderSubtle">
            <button
              onClick={() => setActiveTab('matrix')}
              className={`flex-1 sm:flex-initial py-1.5 px-3 rounded font-mono text-xs font-semibold transition-all text-center ${
                activeTab === 'matrix'
                  ? 'bg-canvas text-accent border border-accentBorder shadow-sm'
                  : 'text-textSub hover:text-textMain border border-transparent'
              }`}
            >
              2026 Walk-Forward (8M)
            </button>
            <button
              onClick={() => setActiveTab('7d')}
              className={`flex-1 sm:flex-initial py-1.5 px-3 rounded font-mono text-xs font-semibold transition-all text-center ${
                activeTab === '7d'
                  ? 'bg-canvas text-accent border border-accentBorder shadow-sm'
                  : 'text-textSub hover:text-textMain border border-transparent'
              }`}
            >
              Rolling 7 Days
            </button>
            <button
              onClick={() => setActiveTab('30d')}
              className={`flex-1 sm:flex-initial py-1.5 px-3 rounded font-mono text-xs font-semibold transition-all text-center ${
                activeTab === '30d'
                  ? 'bg-canvas text-accent border border-accentBorder shadow-sm'
                  : 'text-textSub hover:text-textMain border border-transparent'
              }`}
            >
              Rolling 30 Days
            </button>
          </div>

          <div className="flex items-center space-x-2 font-mono text-[10px] text-textMuted uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>UNIVERSE: 5-ASSET POOLED // RISK: 0.75%</span>
          </div>
        </div>

        {/* TAB 1: 5-ASSET POOLED MATRIX */}
        {activeTab === 'matrix' && (
          <div className="space-y-6">
            
            {/* Top Aggregate Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-panel p-3.5 sm:p-4 rounded border border-borderSubtle">
                <span className="font-mono text-[10px] text-textMuted uppercase tracking-wider block">TOTAL EXECUTIONS</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-textMain">359</span>
                <span className="text-[10px] text-textSub block mt-0.5 font-sans">8 Continuous Months</span>
              </div>
              <div className="bg-panel p-3.5 sm:p-4 rounded border border-borderSubtle">
                <span className="font-mono text-[10px] text-textMuted uppercase tracking-wider block">EXPECTANCY MEAN</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-accent">+0.90 R</span>
                <span className="text-[10px] text-textSub block mt-0.5 font-sans">43.2% Structural WR</span>
              </div>
              <div className="bg-panel p-3.5 sm:p-4 rounded border border-borderSubtle">
                <span className="font-mono text-[10px] text-textMuted uppercase tracking-wider block">PROFIT FACTOR</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-positiveR">2.60</span>
                <span className="text-[10px] text-textSub block mt-0.5 font-sans">Gross Win / Gross Loss</span>
              </div>
              <div className="bg-panel p-3.5 sm:p-4 rounded border border-borderSubtle">
                <span className="font-mono text-[10px] text-textMuted uppercase tracking-wider block">COMPOUNDED RETURN</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-positiveR">+954.4%</span>
                <span className="text-[10px] text-drawdownR block mt-0.5 font-mono font-semibold">Max DD: 7.3%</span>
              </div>
            </div>

            {/* REALISTIC WIN-RATE & EMPIRICAL ALPHA THESIS */}
            <div className="rounded border border-borderSubtle bg-panel/90 p-4 sm:p-5 text-xs text-textSub space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[11px] font-bold text-textMain uppercase tracking-wide">
                  EMPIRICAL DISCIPLINE VS. SYNTHETIC 90% WIN RATES
                </span>
              </div>
              <p className="leading-relaxed font-sans text-textSub text-[13px]">
                Retail schemes lure capital with overfitted, synthetic 90%+ win-rate backtests that inevitably liquidate accounts under real market friction. Echelon operates on mathematical reality: a <strong className="text-textMain font-semibold">43.2% win rate</strong> combined with an average trade expectancy of <strong className="text-accent font-mono font-bold">+0.90 R</strong> and rigid <strong className="text-textMain font-semibold">0.75% risk per trade</strong> generated <strong className="text-positiveR font-mono font-bold">+954.4% net gain</strong> with a peak drawdown of just <strong className="text-drawdownR font-mono font-bold">7.3%</strong> across 359 forward dispatches.
              </p>
            </div>

            {/* TABLE 01: CASH EXTRACTION (FIXED $1K RESET) */}
            <div className="rounded border border-borderSubtle bg-panel overflow-hidden shadow-lg">
              <div className="px-4 py-3 bg-canvas/80 border-b border-borderSubtle flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-mono text-xs font-bold text-textMain uppercase tracking-wide">
                    LEDGER 01 // CASH YIELD EXTRACTION (FIXED $1,000 BASELINE)
                  </span>
                  <span className="text-xs text-textMuted block sm:inline sm:ml-2 font-sans">
                    Monthly Profit Realization & Baseline Capital Reset
                  </span>
                </div>
                <span className="font-mono text-[10px] text-accent font-semibold uppercase">
                  MONTHLY PAYOUT REGIME
                </span>
              </div>

              <div className="overflow-x-auto font-mono text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-borderSubtle/80 text-textMuted bg-canvas/40 text-[10px]">
                      <th className="py-2.5 px-3 font-semibold whitespace-nowrap">PERIOD</th>
                      <th className="py-2.5 px-3 font-semibold text-center">TR</th>
                      <th className="py-2.5 px-3 font-semibold text-right">WR</th>
                      <th className="py-2.5 px-3 font-semibold text-right">PF</th>
                      <th className="py-2.5 px-3 font-semibold text-right">AVG R</th>
                      <th className="py-2.5 px-3 font-semibold text-right whitespace-nowrap">NET ($)</th>
                      <th className="py-2.5 px-3 font-semibold text-right">GAIN%</th>
                      <th className="py-2.5 px-3 font-semibold text-right">DD%</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-borderSubtle/40 text-textMain">
                    {SECTION_1_DATA.map((row) => (
                      <tr key={row.period} className="hover:bg-panelHover transition-colors">
                        <td className="py-2 px-3 text-textSub font-semibold whitespace-nowrap">{row.period}</td>
                        <td className="py-2 px-3 text-center text-textSub">{row.trades}</td>
                        <td className="py-2 px-3 text-right">{row.wr}</td>
                        <td className="py-2 px-3 text-right text-textMain font-semibold">{row.pf}</td>
                        <td className="py-2 px-3 text-right text-accent">{row.avgR}</td>
                        <td className="py-2 px-3 text-right text-positiveR font-semibold whitespace-nowrap">{row.pnlDollar}</td>
                        <td className="py-2 px-3 text-right text-positiveR font-semibold">{row.pnlPct}</td>
                        <td className="py-2 px-3 text-right text-drawdownR">{row.ddPct}</td>
                      </tr>
                    ))}
                    <tr className="bg-panelHover border-t-2 border-b-2 border-accent/40 font-bold text-textMain">
                      <td className="py-2.5 px-3 text-accent tracking-wide whitespace-nowrap">TOTAL</td>
                      <td className="py-2.5 px-3 text-center">359</td>
                      <td className="py-2.5 px-3 text-right">43.2%</td>
                      <td className="py-2.5 px-3 text-right">2.60</td>
                      <td className="py-2.5 px-3 text-right text-accent">+0.90</td>
                      <td className="py-2.5 px-3 text-right text-positiveR whitespace-nowrap">+$2,421.0</td>
                      <td className="py-2.5 px-3 text-right text-positiveR">+242.1%</td>
                      <td className="py-2.5 px-3 text-right text-drawdownR">7.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* TABLE 02: COMPOUNDED WEALTH */}
            <div className="rounded border border-borderSubtle bg-panel overflow-hidden shadow-lg">
              <div className="px-4 py-3 bg-canvas/80 border-b border-borderSubtle flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-mono text-xs font-bold text-textMain uppercase tracking-wide">
                    LEDGER 02 // DYNAMIC WEALTH COMPOUNDING (0.75% RISK)
                  </span>
                  <span className="text-xs text-textMuted block sm:inline sm:ml-2 font-sans">
                    0.75% Risk Dynamic Sizing on Running Portfolio Balance
                  </span>
                </div>
                <span className="font-mono text-[10px] text-positiveR font-semibold uppercase">
                  EXPONENTIAL SCALE
                </span>
              </div>

              <div className="overflow-x-auto font-mono text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-borderSubtle/80 text-textMuted bg-canvas/40 text-[10px]">
                      <th className="py-2.5 px-3 font-semibold whitespace-nowrap">PERIOD</th>
                      <th className="py-2.5 px-3 font-semibold text-center">TR</th>
                      <th className="py-2.5 px-3 font-semibold text-right">WR</th>
                      <th className="py-2.5 px-3 font-semibold text-right whitespace-nowrap">START ($)</th>
                      <th className="py-2.5 px-3 font-semibold text-right whitespace-nowrap">END ($)</th>
                      <th className="py-2.5 px-3 font-semibold text-right">GAIN%</th>
                      <th className="py-2.5 px-3 font-semibold text-right">MAX DD%</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-borderSubtle/40 text-textMain">
                    {SECTION_2_DATA.map((row) => (
                      <tr key={row.period} className="hover:bg-panelHover transition-colors">
                        <td className="py-2 px-3 text-textSub font-semibold whitespace-nowrap">{row.period}</td>
                        <td className="py-2 px-3 text-center text-textSub">{row.trades}</td>
                        <td className="py-2 px-3 text-right">{row.wr}</td>
                        <td className="py-2 px-3 text-right text-textSub whitespace-nowrap">${row.startBal}</td>
                        <td className="py-2 px-3 text-right text-textMain font-semibold whitespace-nowrap">${row.endBal}</td>
                        <td className="py-2 px-3 text-right text-positiveR font-semibold">{row.gainPct}</td>
                        <td className="py-2 px-3 text-right text-drawdownR">{row.maxDDPct}</td>
                      </tr>
                    ))}
                    <tr className="bg-panelHover border-t-2 border-b-2 border-accent/40 font-bold text-textMain">
                      <td className="py-2.5 px-3 text-accent tracking-wide whitespace-nowrap">TOTAL</td>
                      <td className="py-2.5 px-3 text-center">359</td>
                      <td className="py-2.5 px-3 text-right">43.2%</td>
                      <td className="py-2.5 px-3 text-right text-textSub whitespace-nowrap">$1,000.0</td>
                      <td className="py-2.5 px-3 text-right text-positiveR whitespace-nowrap">$10,543.9</td>
                      <td className="py-2.5 px-3 text-right text-positiveR">+954.4%</td>
                      <td className="py-2.5 px-3 text-right text-drawdownR">7.3%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ORDER BOOK SLIPPAGE & 50-SLOT CAPACITY SAFEGUARD STRIP */}
            <div className="rounded border border-borderSubtle bg-panel p-4 sm:p-5 shadow-lg space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-borderSubtle/60">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-xs font-bold text-textMain uppercase tracking-wide">
                    LIQUIDITY CAPACITY SAFEGUARD
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] text-textMuted uppercase">UTILIZATION:</span>
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-canvas border border-accentBorder">
                    12 / 50 SLOTS ALLOCATED [24%]
                  </span>
                </div>
              </div>

              <p className="text-[12px] sm:text-[13px] text-textSub font-sans leading-relaxed">
                To eliminate slippage drag and prevent internal order-book crossing, total automated API equity is strictly throttled across Tier-1 perpetual futures order books. Once 50 seats are allocated, enrollment locks automatically.
              </p>

              <div className="space-y-1">
                <div className="w-full bg-canvas h-1.5 rounded-full overflow-hidden border border-borderSubtle">
                  <div className="bg-accent h-full w-[24%]" />
                </div>
                <div className="flex justify-between items-center font-mono text-[9px] text-textMuted">
                  <span>HARD ENGINE CEILING: 50 NODES</span>
                  <span className="text-accent font-semibold">38 SLOTS UNALLOCATED</span>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="#tiers"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded bg-canvas border border-borderSubtle hover:border-accent text-textMain hover:text-accent font-mono text-xs font-semibold transition-all text-center"
                >
                  INSPECT ALLOCATION TIERS &rarr;
                </a>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: ROLLING 7-DAY TELEMETRY */}
        {activeTab === '7d' && (
          <div className="rounded border border-borderSubtle bg-panel overflow-hidden shadow-lg">
            <div className="px-5 py-3 bg-canvas/80 border-b border-borderSubtle flex items-center justify-between font-mono text-[11px] text-textMuted font-semibold uppercase tracking-wider">
              <span>7-DAY ROLLING EXECUTION LEDGER</span>
              <span>AUDIT VALUE</span>
            </div>
            <div className="divide-y divide-borderSubtle/60">
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Net Realized Alpha</div>
                  <div className="text-[11px] text-textMuted font-mono">Rolling 7-Day Total Yield</div>
                </div>
                <div className="font-mono text-base font-bold text-positiveR font-num">+18.4 R</div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Model Win Rate</div>
                  <div className="text-[11px] text-textMuted font-mono">17 / 26 Dispatches Executed</div>
                </div>
                <div className="font-mono text-base font-bold text-textMain font-num">65.4%</div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Max Period Drawdown</div>
                  <div className="text-[11px] text-textMuted font-mono">Peak-to-Trough Exposure</div>
                </div>
                <div className="font-mono text-base font-bold text-drawdownR font-num">-1.20 R</div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Average Risk Ratio</div>
                  <div className="text-[11px] text-textMuted font-mono">Target vs. Stop Loss Dist.</div>
                </div>
                <div className="font-mono text-base font-bold text-accent font-num">1 : 3.10</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ROLLING 30-DAY TELEMETRY */}
        {activeTab === '30d' && (
          <div className="rounded border border-borderSubtle bg-panel overflow-hidden shadow-lg">
            <div className="px-5 py-3 bg-canvas/80 border-b border-borderSubtle flex items-center justify-between font-mono text-[11px] text-textMuted font-semibold uppercase tracking-wider">
              <span>30-DAY ROLLING EXECUTION LEDGER</span>
              <span>AUDIT VALUE</span>
            </div>
            <div className="divide-y divide-borderSubtle/60">
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Net Realized Alpha</div>
                  <div className="text-[11px] text-textMuted font-mono">Rolling 30-Day Total Yield</div>
                </div>
                <div className="font-mono text-base font-bold text-positiveR font-num">+52.8 R</div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Model Win Rate</div>
                  <div className="text-[11px] text-textMuted font-mono">71 / 104 Dispatches Executed</div>
                </div>
                <div className="font-mono text-base font-bold text-textMain font-num">68.2%</div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Max Period Drawdown</div>
                  <div className="text-[11px] text-textMuted font-mono">Peak-to-Trough Exposure</div>
                </div>
                <div className="font-mono text-base font-bold text-drawdownR font-num">-2.45 R</div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Average Risk Ratio</div>
                  <div className="text-[11px] text-textMuted font-mono">Target vs. Stop Loss Dist.</div>
                </div>
                <div className="font-mono text-base font-bold text-accent font-num">1 : 3.25</div>
              </div>
            </div>
          </div>
        )}

        {/* Telegram Interactive Terminal Callout */}
        <div className="mt-8 rounded border border-borderSubtle bg-panel p-6 sm:p-8 text-center hover:border-accentBorder transition-all shadow-md">
          <div className="inline-block px-3 py-1 rounded bg-accentMuted border border-accentBorder font-mono text-[11px] font-bold text-accent uppercase tracking-wider mb-3">
            Interactive Telemetry Terminal
          </div>
          <h4 className="font-sans text-base sm:text-xl font-bold text-textMain mb-2">
            Query Live Telemetry & Active Position Brackets
          </h4>
          <p className="text-[13px] sm:text-sm text-textSub font-normal max-w-xl mx-auto mb-6 leading-relaxed font-sans">
            Our public Telegram bot serves as an interactive inspection node. Query rolling trade metrics, current bracket distances, and verify forward dispatches directly in real time.
          </p>
          <a
            href="https://t.me/echelonmech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded bg-panelHover border border-accentBorder hover:border-accent text-textMain hover:text-accent font-bold text-xs tracking-wider uppercase transition-all font-mono shadow-sm"
          >
            <span>Query Telegram Terminal</span>
            <span className="font-mono text-xs ml-2">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
