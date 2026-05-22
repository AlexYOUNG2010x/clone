'use client';

import { useMemo, useState } from 'react';
import { regions, DISTRICTS, DISTRICT_COLORS, District } from '@/data/olympiad-data';

const MAX_WINNERS = Math.max(...regions.map(r => r.winners));

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <span className="text-2xl leading-none">🥇</span>;
  if (rank === 2) return <span className="text-2xl leading-none">🥈</span>;
  if (rank === 3) return <span className="text-2xl leading-none">🥉</span>;
  return (
    <span className="text-sm font-bold text-gray-400 w-8 text-center inline-block">
      #{rank}
    </span>
  );
}

export default function RegionTable() {
  const [filter, setFilter] = useState<District | 'all'>('all');
  const [search, setSearch] = useState('');

  const allSorted = useMemo(
    () => [...regions].sort((a, b) => b.winners - a.winners),
    []
  );

  const globalRanks = useMemo(() => {
    const map: Record<string, number> = {};
    allSorted.forEach((r, i) => { map[r.id] = i + 1; });
    return map;
  }, [allSorted]);

  const filtered = useMemo(() =>
    allSorted
      .filter(r => filter === 'all' || r.district === filter)
      .filter(r => r.name.toLowerCase().includes(search.toLowerCase())),
    [allSorted, filter, search]
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 items-center p-4 border-b border-gray-100 bg-gray-50">
        <input
          type="search"
          placeholder="Поиск региона..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-200 bg-white rounded-xl px-3 py-2 text-sm w-52 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filter}
          onChange={e => setFilter(e.target.value as District | 'all')}
          className="border border-gray-200 bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Все федеральные округа</option>
          {DISTRICTS.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <span className="text-sm text-gray-500 ml-auto">
          {filtered.length} из {regions.length} регионов
        </span>
      </div>

      {/* Column headers */}
      <div className="hidden md:grid grid-cols-[3rem_1fr_auto_auto_auto] gap-4 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400 border-b border-gray-100">
        <div className="text-center">#</div>
        <div>Регион</div>
        <div className="text-right w-24">Победители</div>
        <div className="w-28 text-center">Медали</div>
        <div className="w-36">Прогресс</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-50">
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12 text-sm">Ничего не найдено</p>
        )}
        {filtered.map(region => {
          const rank = globalRanks[region.id];
          const pct = (region.winners / MAX_WINNERS) * 100;
          const barColor =
            pct >= 40 ? '#dc2626' :
            pct >= 15 ? '#f97316' :
            pct >= 8  ? '#f59e0b' :
                        '#3b82f6';

          return (
            <div
              key={region.id}
              className="px-5 py-4 hover:bg-gray-50 transition-colors group"
            >
              <div className="grid md:grid-cols-[3rem_1fr_auto_auto_auto] gap-4 items-center">
                {/* Rank */}
                <div className="flex justify-center">
                  <RankBadge rank={rank} />
                </div>

                {/* Name + district */}
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 truncate group-hover:text-blue-700 transition-colors">
                    {region.name}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: DISTRICT_COLORS[region.district] }}
                    />
                    <span className="text-xs text-gray-400 truncate">{region.district}</span>
                  </div>
                </div>

                {/* Winner count */}
                <div className="text-right w-24">
                  <span className="text-xl font-black text-gray-900">{region.winners}</span>
                  <p className="text-xs text-gray-400">побед.</p>
                </div>

                {/* Medal breakdown */}
                <div className="hidden md:flex gap-2 text-sm w-28 justify-center">
                  <span title="Золото">🥇{region.gold}</span>
                  <span title="Серебро">🥈{region.silver}</span>
                  <span title="Бронза">🥉{region.bronze}</span>
                </div>

                {/* Progress bar */}
                <div className="hidden md:block w-36">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, background: barColor }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{Math.round(pct)}% от лидера</p>
                </div>
              </div>

              {/* Subjects */}
              <div className="flex flex-wrap gap-1 mt-2.5 md:pl-[3rem] pl-0">
                {region.topSubjects.map(s => (
                  <span
                    key={s}
                    className="text-xs bg-blue-50 text-blue-700 rounded-full px-2.5 py-0.5 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-400">
        * Данные приведены в обобщённом виде на основе открытых материалов ВСОШ за несколько лет.
      </div>
    </div>
  );
}
