'use client';

import React from 'react';
import { Activity, ShieldCheck, Cpu, Terminal, AlertCircle } from 'lucide-react';

export default function MatrixHeader() {
  return (
    <header className="border border-borderLine bg-panel p-4 md:p-6 space-y-6">
      {/* Top Banner Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-borderLine pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyanAccent" />
            <span className="text-xl font-bold tracking-wider text-textMain">ECHELON MECHANICS</span>
            <span className="text-xs px-2 py-0.5 bg-cyanMuted text-cyanAccent border border-cyanAccent/30">
              v1.0.4-EXEC
            </span>
          </div>
          <p className="text-xs text-textMuted">
            QUANTITATIVE EXECUTION INFRASTRUCTURE & TERMINAL ENGINE
          </p>
        </div>

        {/* Global Node Status */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <div className="flex items-center gap-2 bg-canvas px-3 py-1.5 border border-borderLine">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyanAccent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyanAccent"></span>
            </span>
            <span className="text-textMuted">CORE ENGINE:</span>
            <span className="text-cyanAccent font-bold">ACTIVE</span>
          </div>
          <div className="flex items-center gap-2 bg-canvas px-3 py-1.5 border border-borderLine">
            <ShieldCheck className="w-3.5 h-3.5 text-cyanAccent" />
            <span className="text-textMuted">VPS ISOLATION:</span>
            <span className="text-textMain">ENFORCED</span>
          </div>
        </div>
      </div>

      {/* Grid Metrics & Capacity Cap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Capacity Constraint Metric */}
        <div className="bg-canvas p-3 border border-borderLine space-y-1">
          <div className="text-xs text-textMuted flex justify-between items-center">
            <span>SEED CAPACITY</span>
            <AlertCircle className="w-3 h-3 text-cyanAccent" />
          </div>
          <div className="text-lg font-bold text-cyanAccent">
            38 / 50 <span className="text-xs text-textMuted font-normal">SEATS</span>
          </div>
          <div className="w-full bg-borderLine h-1.5 mt-2">
            <div className="bg-cyanAccent h-1.5 w-[76%]"></div>
          </div>
          <div className="text-[10px] text-textMuted pt-1">
            HARD CAP TO PREVENT SLIPPAGE
          </div>
        </div>

        {/* System Latency */}
        <div className="bg-canvas p-3 border border-borderLine space-y-1">
          <div className="text-xs text-textMuted flex justify-between items-center">
            <span>API LATENCY</span>
            <Activity className="w-3 h-3 text-cyanAccent" />
          </div>
          <div className="text-lg font-bold text-textMain">
            12.4 <span className="text-xs text-textMuted font-normal">MS</span>
          </div>
          <div className="text-[10px] text-textMuted pt-1">
            DIRECT BINGX WEBSOCKET LOOP
          </div>
        </div>

        {/* Execution Engine */}
        <div className="bg-canvas p-3 border border-borderLine space-y-1">
          <div className="text-xs text-textMuted flex justify-between items-center">
            <span>EXEC ENGINE</span>
            <Cpu className="w-3 h-3 text-cyanAccent" />
          </div>
          <div className="text-lg font-bold text-textMain">
            live_main.py
          </div>
          <div className="text-[10px] text-textMuted pt-1">
            ISOLATED MARGIN / NO REQUOTES
          </div>
        </div>

        {/* Domain Endpoint */}
        <div className="bg-canvas p-3 border border-borderLine space-y-1">
          <div className="text-xs text-textMuted flex justify-between items-center">
            <span>ENDPOINT</span>
            <span className="text-[10px] text-cyanAccent">SSL ENCRYPTED</span>
          </div>
          <div className="text-lg font-bold text-textMain truncate">
            echelonquant.io
          </div>
          <div className="text-[10px] text-textMuted pt-1">
            CLOUDFLARE EDGE CDN
          </div>
        </div>
      </div>
    </header>
  );
}
