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
  { period: "JAN '26", trades: 87, wr: '51.7%', pf: '2.67', avgR: '+1.24', pnlDollar: '+$687.0', pnlPct: '+68.7%', ddPct: '5.3%' },
  { period: "FEB '26", trades: 73, wr: '54.8%', pf: '3.09', avgR: '+1.32', pnlDollar: '+$645.2', pnlPct: '+64.5%', ddPct: '5.1%' },
  { period: "MAR '26", trades: 72, wr: '50.0%', pf: '2.77', avgR: '+1.33', pnlDollar: '+$618.2', pnlPct: '+61.8%', ddPct: '8.7%' },
  { period: "APR '26", trades: 70, wr: '42.9%', pf: '1.54', avgR: '+0.62', pnlDollar: '+$209.2', pnlPct: '+20.9%', ddPct: '6.2%' },
  { period: "MAY '26", trades: 81, wr: '55.6%', pf: '3.22', avgR: '+1.50', pnlDollar: '+$798.4', pnlPct: '+79.8%', ddPct: '5.9%' },
  { period: "JUN '26", trades: 96, wr: '54.2%', pf: '2.62', avgR: '+1.14', pnlDollar: '+$696.3', pnlPct: '+69.6%', ddPct: '5.7%' },
  { period: "JUL '26", trades: 68, wr: '50.0%', pf: '2.14', avgR: '+0.98', pnlDollar: '+$388.7', pnlPct: '+38.9%', ddPct: '4.6%' },
  { period: "AUG '26", trades: 77, wr: '45.5%', pf: '2.09', avgR: '+0.97', pnlDollar: '+$448.3', pnlPct: '+44.8%', ddPct: '7.0%' },
];

const SECTION_2_DATA: CompoundedMetric[] = [
  { period: "JAN '26", trades: 87, wr: '51.7%', startBal: '1,000.0', endBal: '1,950.1', gainPct: '+95.0%', maxDDPct: '6.8%' },
  { period: "FEB '26", trades: 73, wr: '54.8%', startBal: '1,950.1', endBal: '3,657.3', gainPct: '+87.5%', maxDDPct: '7.5%' },
  { period: "MAR '26", trades: 72, wr: '50.0%', startBal: '3,657.3', endBal: '6,675.7', gainPct: '+82.5%', maxDDPct: '10.7%' },
  { period: "APR '26", trades: 70, wr: '42.9%', startBal: '6,675.7', endBal: '8,138.6', gainPct: '+21.9%', maxDDPct: '6.7%' },
  { period: "MAY '26", trades: 81, wr: '55.6%', startBal: '8,138.6', endBal: '17,735.9', gainPct: '+117.9%', maxDDPct: '10.0%' },
  { period: "JUN '26", trades: 96, wr: '54.2%', startBal: '17,735.9', endBal: '34,910.3', gainPct: '+96.8%', maxDDPct: '9.5%' },
  { period: "JUL '26", trades: 68, wr: '50.0%', startBal: '34,910.3', endBal: '50,836.8', gainPct: '+45.6%', maxDDPct: '6.5%' },
  { period: "AUG '26", trades: 77, wr: '45.5%', startBal: '50,836.8', endBal: '78,386.9', gainPct: '+54.2%', maxDDPct: '11.2%' },
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
            Live un-optimized telemetry across an audited 6-asset matrix (ETH, BTC, BNB, SOL, SUI, AVAX). Verifiable proof that asymmetric payoff and disciplined execution outperform curve-fitted models.
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
            <span>UNIVERSE: 6-ASSET MATRIX // RISK: 0.75%</span>
          </div>
        </div>

        {/* TAB 1: 6-ASSET POOLED MATRIX */}
        {activeTab === 'matrix' && (
          <div className="space-y-6">
            
            {/* Top Aggregate Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-panel p-3.5 sm:p-4 rounded border border-borderSubtle">
                <span className="font-mono text-[10px] text-textMuted uppercase tracking-wider block">TOTAL EXECUTIONS</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-textMain">624</span>
                <span className="text-[10px] text-textSub block mt-0.5 font-sans">8 Continuous Months</span>
              </div>
              <div className="bg-panel p-3.5 sm:p-4 rounded border border-borderSubtle">
                <span className="font-mono text-[10px] text-textMuted uppercase tracking-wider block">EXPECTANCY MEAN</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-accent">+1.15 R</span>
                <span className="text-[10px] text-textSub block mt-0.5 font-sans">50.8% Structural WR</span>
              </div>
              <div className="bg-panel p-3.5 sm:p-4 rounded border border-borderSubtle">
                <span className="font-mono text-[10px] text-textMuted uppercase tracking-wider block">PROFIT FACTOR</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-positiveR">2.50</span>
                <span className="text-[10px] text-textSub block mt-0.5 font-sans">Gross Win / Gross Loss</span>
              </div>
              <div className="bg-panel p-3.5 sm:p-4 rounded border border-borderSubtle">
                <span className="font-mono text-[10px] text-textMuted uppercase tracking-wider block">COMPOUNDED RETURN</span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-positiveR">+7,739%</span>
                <span className="text-[10px] text-drawdownR block mt-0.5 font-mono font-semibold">Max DD: 11.2%</span>
              </div>
            </div>

            {/* ASYMMETRIC EXPECTANCY THESIS */}
            <div className="rounded border border-borderSubtle bg-panel/90 p-4 sm:p-5 text-xs text-textSub space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[11px] font-bold text-textMain uppercase tracking-wide">
                  ASYMMETRIC DISTRIBUTION // EXPECTANCY-DRIVEN ARCHITECTURE
                </span>
              </div>
              <p className="leading-relaxed font-sans text-textSub text-[13px]">
                Long-term edge in perpetual futures is governed by trade expectancy (<span className="font-mono text-accent">E[R]</span>) and payoff convexity, not artificial win-rate metrics. High-frequency models optimized for 90%+ accuracy consistently introduce catastrophic left-tail liquidation exposure under dynamic volatility regimes. Echelon is engineered for structural asymmetry: coupling a disciplined <strong className="text-textMain font-semibold">50.8% hit rate</strong> with an average trade expectancy of <strong className="text-accent font-mono font-bold">+1.15 R</strong> and rigid <strong className="text-textMain font-semibold">0.75% risk per trade</strong> to generate <strong className="text-positiveR font-mono font-bold">+7,739% net compounding</strong> with drawdown constrained to <strong className="text-drawdownR font-mono font-bold">11.2%</strong> across 624 live executions.
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
                    <tr className="bg-panelHover border-t-2 border-b border-accent/40 font-bold text-textMain">
                      <td className="py-2.5 px-3 text-accent tracking-wide whitespace-nowrap">TOTAL</td>
                      <td className="py-2.5 px-3 text-center">624</td>
                      <td className="py-2.5 px-3 text-right">50.8%</td>
                      <td className="py-2.5 px-3 text-right text-accent">2.50</td>
                      <td className="py-2.5 px-3 text-right text-accent">+1.15</td>
                      <td className="py-2.5 px-3 text-right text-positiveR whitespace-nowrap">+$4,491.3</td>
                      <td className="py-2.5 px-3 text-right text-positiveR">+449.1%</td>
                      <td className="py-2.5 px-3 text-right text-drawdownR">8.7%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Ledger 01 Friction Governance Footnote */}
              <div className="px-4 py-2.5 bg-canvas/60 border-t border-borderSubtle/60 flex flex-wrap items-center justify-between gap-y-1 font-mono text-[10px] text-textMuted">
                <div>Gross Edge: <span className="text-textMain">+$5,365.71</span></div>
                <div>Taker Fees Deducted: <span className="text-drawdownR">-$874.46 (16.3%)</span></div>
                <div>Net Realized: <span className="text-positiveR font-semibold">+$4,491.25</span></div>
                <div>Unreset Total DD: <span className="text-textSub">5.3%</span></div>
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
                    Dynamic Position Sizing with 15% Maximum Margin Guard
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
                    <tr className="bg-panelHover border-t-2 border-b border-accent/40 font-bold text-textMain">
                      <td className="py-2.5 px-3 text-accent tracking-wide whitespace-nowrap">TOTAL</td>
                      <td className="py-2.5 px-3 text-center">624</td>
                      <td className="py-2.5 px-3 text-right">50.8%</td>
                      <td className="py-2.5 px-3 text-right text-textSub whitespace-nowrap">$1,000.0</td>
                      <td className="py-2.5 px-3 text-right text-positiveR whitespace-nowrap">$78,386.9</td>
                      <td className="py-2.5 px-3 text-right text-positiveR">+7,739%</td>
                      <td className="py-2.5 px-3 text-right text-drawdownR">11.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Ledger 02 Friction Governance Footnote */}
              <div className="px-4 py-2.5 bg-canvas/60 border-t border-borderSubtle/60 flex flex-wrap items-center justify-between gap-y-1 font-mono text-[10px] text-textMuted">
                <div>Compounded Gross: <span className="text-textMain">+$96,060.01</span></div>
                <div>Taker Fees Paid: <span className="text-drawdownR">-$18,673.14 (19.4%)</span></div>
                <div>Terminal Net Equity: <span className="text-positiveR font-semibold">$78,386.88</span></div>
                <div>Risk Ceiling: <span className="text-accent font-medium">0.75% Fixed Base</span></div>
              </div>
            </div>

            {/* UNIFIED EXECUTION INTEGRITY & FRICTION AUDIT STRIP */}
            <div className="rounded border border-borderSubtle bg-panel/70 p-3.5 sm:p-4 font-mono text-[11px] space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] text-textMuted border-b border-borderSubtle/50 pb-2">
                <span className="font-bold uppercase tracking-wider text-accent">
                  ◆ EXECUTION GOVERNANCE & RISK PARAMETERS
                </span>
                <span>ASSETS: ETH / BTC / BNB / SOL / SUI / AVAX</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] sm:text-[11px] pt-0.5">
                <div>
                  <span className="text-textMuted block text-[9px] uppercase">Margin Safety Gate</span>
                  <span className="text-textMain font-semibold">15% Cap @ 25x</span>
                  <span className="text-[9px] text-positiveR block">0/624 (0.0%) clamped</span>
                </div>
                <div>
                  <span className="text-textMuted block text-[9px] uppercase">Noise Filter Gate</span>
                  <span className="text-textMain font-semibold">Min-Stop Active</span>
                  <span className="text-[9px] text-textSub block">598 setups filtered</span>
                </div>
                <div>
                  <span className="text-textMuted block text-[9px] uppercase">Scale-Out Split</span>
                  <span className="text-textMain font-semibold">35 / 55 / 10 Slices</span>
                  <span className="text-[9px] text-positiveR block">BE @ TP2 Migration</span>
                </div>
                <div>
                  <span className="text-textMuted block text-[9px] uppercase">Friction Model</span>
                  <span className="text-textMain font-semibold">0.10% Taker Deducted</span>
                  <span className="text-[9px] text-drawdownR block">Realized at execution</span>
                </div>
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
                <div className="font-mono text-base font-bold text-positiveR font-num">+12.2 R</div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Model Win Rate</div>
                  <div className="text-[11px] text-textMuted font-mono">7 / 11 Dispatches Executed</div>
                </div>
                <div className="font-mono text-base font-bold text-textMain font-num">63.6%</div>
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
                <div className="font-mono text-base font-bold text-accent font-num">1 : 2.31</div>
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
                <div className="font-mono text-base font-bold text-positiveR font-num">+40.5 R</div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Model Win Rate</div>
                  <div className="text-[11px] text-textMuted font-mono">23 / 45 Dispatches Executed</div>
                </div>
                <div className="font-mono text-base font-bold text-textMain font-num">51.2%</div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Max Period Drawdown</div>
                  <div className="text-[11px] text-textMuted font-mono">Peak-to-Trough Exposure</div>
                </div>
                <div className="font-mono text-base font-bold text-drawdownR font-num">-4.40 R</div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between hover:bg-panelHover transition-colors">
                <div>
                  <div className="text-sm font-semibold text-textMain font-sans">Average Risk Ratio</div>
                  <div className="text-[11px] text-textMuted font-mono">Target vs. Stop Loss Dist.</div>
                </div>
                <div className="font-mono text-base font-bold text-accent font-num">1 : 2.72</div>
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
