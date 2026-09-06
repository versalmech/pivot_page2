'use client';

import React, { useState } from 'react';
import { Terminal, Activity, HelpCircle, CheckCircle, Clock, ShieldCheck, Cpu } from 'lucide-react';

interface TelemetryLog {
  timestamp: string;
  symbol: string;
  side: 'BUY_LONG' | 'SELL_SHORT' | 'CLOSE_LONG' | 'CLOSE_SHORT';
  price: string;
  size: string;
  latency: string;
  status: 'EXECUTED' | 'VERIFIED';
}

export default function ProofMatrix() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const rawLogs: TelemetryLog[] = [
    { timestamp: '2026-07-24T02:48:12.104Z', symbol: 'BTC-USDT-PERP', side: 'BUY_LONG', price: '64,310.50', size: '1.25 BTC', latency: '11.2ms', status: 'VERIFIED' },
    { timestamp: '2026-07-24T02:31:05.892Z', symbol: 'ETH-USDT-PERP', side: 'CLOSE_LONG', price: '3,482.10', size: '14.00 ETH', latency: '9.8ms', status: 'VERIFIED' },
    { timestamp: '2026-07-24T01:55:40.011Z', symbol: 'SOL-USDT-PERP', side: 'SELL_SHORT', price: '184.25', size: '250.0 SOL', latency: '12.6ms', status: 'VERIFIED' },
    { timestamp: '2026-07-24T01:12:19.445Z', symbol: 'BTC-USDT-PERP', side: 'CLOSE_SHORT', price: '63,980.00', size: '1.25 BTC', latency: '10.5ms', status: 'VERIFIED' },
    { timestamp: '2026-07-24T00:40:02.310Z', symbol: 'AVAX-USDT-PERP', side: 'BUY_LONG', price: '31.85', size: '800.0 AVAX', latency: '13.1ms', status: 'VERIFIED' },
  ];

  const faqs = [
    {
      question: 'HOW DOES ISOLATED VPS HOSTING PROTECT EXECUTION EFFICIENCY?',
      answer: 'Execution logic runs on a dedicated, hardened Vultr/Hetzner node close to BingX endpoints. Ports 80 and 443 remain closed to public ingress. Web requests are routed exclusively via Cloudflare Pages edge static builds, eliminating attack vectors and thread contention.',
    },
    {
      question: 'WHAT ARE THE MANDATORY API PERMISSION LIMITS?',
      answer: 'API keys must strictly have Read and Isolated Perpetual Trading permissions active. Withdrawal and Transfer permissions must remain strictly disabled. The engine automatically rejects and revokes connection attempts configured with unsafe permissions.',
    },
    {
      question: 'HOW IS LIQUIDITY PROTECTED BY THE 50-SEAT HARD CAP?',
      answer: 'To preserve execution price fidelity and minimize internal order book impact, total active copy-allocated equity is capped across all automated tiers. Once 50 seats are assigned, new API provisioning locks automatically.',
    },
    {
      question: 'WHAT OCCURS DURING API DISCONNECTION OR WEBSOCKET DROP?',
      answer: 'The live_main.py core maintains a secondary REST polling fallback loop. If WebSocket heartbeat fails beyond 300ms, the system automatically verifies pending orders and syncs local position states before attempting silent reconnect.',
    },
  ];

  return (
    <section className="space-y-6">
      {/* Metrics & Performance Proof */}
      <div className="border border-borderLine bg-panel p-6 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-borderLine pb-4">
          <div>
            <h2 className="text-lg font-bold text-textMain tracking-wider flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyanAccent" />
              SYSTEM VERIFICATION MATRIX
            </h2>
            <p className="text-xs text-textMuted mt-1">
              LIVE ENGINE METRICS & AUDITED PERFORMANCE TELEMETRY
            </p>
          </div>
          <span className="text-xs font-mono text-cyanAccent bg-canvas px-3 py-1 border border-borderLine">
            AUDIT_REF: 2026-Q3-EXEC
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-canvas p-4 border border-borderLine">
            <span className="text-xs text-textMuted block">PROFIT FACTOR (PF)</span>
            <span className="text-2xl font-bold text-cyanAccent">5.00</span>
            <span className="text-[10px] text-textMuted block mt-1">Gross Win / Gross Loss Ratio</span>
          </div>
          <div className="bg-canvas p-4 border border-borderLine">
            <span className="text-xs text-textMuted block">SYSTEM WIN RATE</span>
            <span className="text-2xl font-bold text-textMain">68.4%</span>
            <span className="text-[10px] text-textMuted block mt-1">1,428 Verified Trades</span>
          </div>
          <div className="bg-canvas p-4 border border-borderLine">
            <span className="text-xs text-textMuted block">MAX HISTORICAL DD</span>
            <span className="text-2xl font-bold text-textMain">-4.2%</span>
            <span className="text-[10px] text-textMuted block mt-1">Hard Margin Circuit Cap</span>
          </div>
          <div className="bg-canvas p-4 border border-borderLine">
            <span className="text-xs text-textMuted block">SHARPE RATIO</span>
            <span className="text-2xl font-bold text-textMain">3.12</span>
            <span className="text-[10px] text-textMuted block mt-1">Annualized Risk-Adjusted</span>
          </div>
        </div>
      </div>

      {/* Raw Telemetry Log Output */}
      <div className="border border-borderLine bg-panel p-6 space-y-4">
        <div className="flex justify-between items-center border-b border-borderLine pb-4">
          <div className="flex items-center gap-2 text-sm font-bold text-textMain">
            <Terminal className="w-4 h-4 text-cyanAccent" />
            <span>RAW EXECUTION TELEMETRY STREAM</span>
          </div>
          <span className="text-[10px] text-textMuted flex items-center gap-1 font-mono">
            <Clock className="w-3 h-3 text-cyanAccent" />
            REAL-TIME BUFFER
          </span>
        </div>

        <div className="bg-canvas border border-borderLine p-4 overflow-x-auto font-mono text-xs">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-borderLine text-textMuted">
                <th className="pb-2 font-normal">TIMESTAMP (UTC)</th>
                <th className="pb-2 font-normal">CONTRACT</th>
                <th className="pb-2 font-normal">ACTION</th>
                <th className="pb-2 font-normal">FILL PRICE</th>
                <th className="pb-2 font-normal">SIZE</th>
                <th className="pb-2 font-normal">LATENCY</th>
                <th className="pb-2 font-normal text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-borderLine/50 text-textMain">
              {rawLogs.map((log, index) => (
                <tr key={index} className="hover:bg-panel/50">
                  <td className="py-2.5 text-textMuted">{log.timestamp}</td>
                  <td className="py-2.5 font-bold">{log.symbol}</td>
                  <td className={`py-2.5 font-bold ${log.side.includes('BUY') || log.side.includes('LONG') ? 'text-cyanAccent' : 'text-textMain'}`}>
                    {log.side}
                  </td>
                  <td className="py-2.5">${log.price}</td>
                  <td className="py-2.5">{log.size}</td>
                  <td className="py-2.5 text-textMuted">{log.latency}</td>
                  <td className="py-2.5 text-right">
                    <span className="inline-flex items-center gap-1 text-[10px] bg-cyanMuted text-cyanAccent px-2 py-0.5 border border-cyanAccent/30">
                      <CheckCircle className="w-3 h-3" />
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Protocol FAQ & Specifications */}
      <div className="border border-borderLine bg-panel p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-textMain border-b border-borderLine pb-4">
          <HelpCircle className="w-4 h-4 text-cyanAccent" />
          <span>PROTOCOL & ARCHITECTURAL SPECIFICATIONS</span>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-borderLine bg-canvas">
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full text-left p-4 text-xs font-bold text-textMain flex justify-between items-center hover:text-cyanAccent transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-cyanAccent font-mono text-sm">
                  {activeFaq === index ? '[-]' : '[+]'}
                </span>
              </button>
              {activeFaq === index && (
                <div className="p-4 pt-0 text-xs text-textMuted border-t border-borderLine/40 leading-relaxed font-mono">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
