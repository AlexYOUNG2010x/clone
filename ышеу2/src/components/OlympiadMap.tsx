'use client';

import React, { useRef, useState } from 'react';
import { regions, RegionData } from '@/data/olympiad-data';

const MAX_WINNERS = 892;

// Simplified Russia outline (equirectangular projection, viewBox 0 0 900 510)
// lon: 19°→191° mapped to x: 0→900   lat: 41°→82° mapped to y: 0→500
const RUSSIA_PATH = [
  'M 58,248',
  'L 62,213',
  'L 72,153',
  'L 92,157',
  'L 112,167',
  'L 148,174',
  'L 208,169',
  'L 254,113',
  'L 262,143',
  'L 308,153',
  'L 392,63',
  'L 452,73',
  'L 562,98',
  'L 702,143',
  'L 882,193',
  'L 842,283',
  'L 792,343',
  'L 742,408',
  'L 702,443',
  'L 642,453',
  'L 596,473',
  'L 566,458',
  'L 532,423',
  'L 506,413',
  'L 466,428',
  'L 416,413',
  'L 382,403',
  'L 357,415',
  'L 312,403',
  'L 262,393',
  'L 228,383',
  'L 202,408',
  'L 182,453',
  'L 162,478',
  'L 142,496',
  'L 122,473',
  'L 110,448',
  'L 97,426',
  'L 83,398',
  'L 79,373',
  'L 71,348',
  'L 61,313',
  'L 53,283',
  'L 57,253',
  'Z',
].join(' ');

// Kaliningrad exclave
const KALININGRAD_PATH = 'M 16,326 L 24,320 L 30,330 L 22,338 Z';

function getColor(winners: number): string {
  if (winners >= 400) return '#dc2626';
  if (winners >= 100) return '#f97316';
  if (winners >= 50) return '#f59e0b';
  if (winners >= 25) return '#16a34a';
  return '#2563eb';
}

function getRadius(winners: number): number {
  return 4 + (Math.sqrt(winners) / Math.sqrt(MAX_WINNERS)) * 26;
}

interface TooltipState {
  region: RegionData;
  x: number;
  y: number;
}

interface Props {
  onSelect?: (region: RegionData | null) => void;
}

export default function OlympiadMap({ onSelect }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleMouseEnter = (e: React.MouseEvent, region: RegionData) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setTooltip({ region, x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!tooltip || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setTooltip(t => t ? { ...t, x: e.clientX - rect.left, y: e.clientY - rect.top } : null);
  };

  const handleClick = (region: RegionData) => {
    const next = selectedId === region.id ? null : region.id;
    setSelectedId(next);
    onSelect?.(next ? region : null);
  };

  // Render small bubbles first, large ones on top
  const sortedAsc = [...regions].sort((a, b) => a.winners - b.winners);

  return (
    <div ref={wrapperRef} className="relative w-full select-none" onMouseMove={handleMouseMove}>
      <svg viewBox="0 0 900 510" className="w-full h-auto" onMouseLeave={() => setTooltip(null)}>
        {/* Ocean / background */}
        <rect width="900" height="510" fill="#e8f4fd" />

        {/* Russia mainland */}
        <path
          d={RUSSIA_PATH}
          fill="#dde8f5"
          stroke="#93aec9"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Kaliningrad */}
        <path d={KALININGRAD_PATH} fill="#dde8f5" stroke="#93aec9" strokeWidth="1" />

        {/* Region bubbles */}
        {sortedAsc.map(region => {
          const r = getRadius(region.winners);
          const color = getColor(region.winners);
          const isSelected = selectedId === region.id;

          return (
            <g key={region.id} className="cursor-pointer" onClick={() => handleClick(region)}>
              {/* Glow ring for top regions */}
              {region.winners >= 100 && (
                <circle
                  cx={region.x}
                  cy={region.y}
                  r={r + 5}
                  fill={color}
                  fillOpacity={0.15}
                  className="pointer-events-none"
                />
              )}
              <circle
                cx={region.x}
                cy={region.y}
                r={r}
                fill={color}
                fillOpacity={isSelected ? 1 : 0.82}
                stroke={isSelected ? '#fff' : color}
                strokeWidth={isSelected ? 2.5 : 1}
                strokeOpacity={isSelected ? 1 : 0.5}
                onMouseEnter={e => handleMouseEnter(e, region)}
                onMouseLeave={() => setTooltip(null)}
              />
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute pointer-events-none z-20 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 text-sm"
          style={{
            left: tooltip.x + 14,
            top: tooltip.y - 14,
            minWidth: 210,
            transform: tooltip.x > 680 ? 'translateX(calc(-100% - 28px))' : undefined,
          }}
        >
          <p className="font-bold text-gray-900 text-base leading-tight">{tooltip.region.name}</p>
          <p className="text-xs text-gray-400 mb-3">{tooltip.region.district}</p>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-black text-gray-900">{tooltip.region.winners}</span>
            <span className="text-gray-500 text-xs">победителей</span>
          </div>

          <div className="flex gap-3 text-sm mb-3">
            <span>🥇 {tooltip.region.gold}</span>
            <span>🥈 {tooltip.region.silver}</span>
            <span>🥉 {tooltip.region.bronze}</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {tooltip.region.topSubjects.map(s => (
              <span
                key={s}
                className="bg-blue-50 text-blue-700 rounded-full px-2 py-0.5 text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 text-xs border border-gray-200 shadow-sm">
        <p className="font-semibold text-gray-600 mb-2">Победители</p>
        {[
          { color: '#dc2626', label: '400+' },
          { color: '#f97316', label: '100–399' },
          { color: '#f59e0b', label: '50–99' },
          { color: '#16a34a', label: '25–49' },
          { color: '#2563eb', label: '< 25' },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />
            <span className="text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Hint */}
      <p className="absolute bottom-3 left-3 text-xs text-gray-400 bg-white/80 rounded px-2 py-1">
        Наведите или нажмите на регион
      </p>
    </div>
  );
}
