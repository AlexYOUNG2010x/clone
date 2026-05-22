import OlympiadMap from '@/components/OlympiadMap';
import RegionTable from '@/components/RegionTable';
import { regions, DISTRICT_COLORS, District } from '@/data/olympiad-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Победители ВСОШ по регионам России',
  description: 'Интерактивная карта и статистика победителей Всероссийской олимпиады школьников по регионам',
};

const totalWinners = regions.reduce((s, r) => s + r.winners, 0);
const totalGold = regions.reduce((s, r) => s + r.gold, 0);
const totalRegions = regions.length;

const sorted = [...regions].sort((a, b) => b.winners - a.winners);
const topRegion = sorted[0];

const subjectCounts: Record<string, number> = {};
regions.forEach(r => r.topSubjects.forEach(s => {
  subjectCounts[s] = (subjectCounts[s] || 0) + 1;
}));
const topSubject = Object.entries(subjectCounts).sort((a, b) => b[1] - a[1])[0][0];

const districtTotals = regions.reduce<Record<string, number>>((acc, r) => {
  acc[r.district] = (acc[r.district] || 0) + r.winners;
  return acc;
}, {});

const topDistrict = Object.entries(districtTotals).sort((a, b) => b[1] - a[1]);

interface StatCardProps {
  value: string;
  label: string;
  sub?: string;
  icon: string;
}

function StatCard({ value, label, sub, icon }: StatCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 flex flex-col gap-2">
      <span className="text-3xl">{icon}</span>
      <p className="text-2xl md:text-3xl font-black leading-tight">{value}</p>
      <p className="text-sm font-semibold text-blue-100">{label}</p>
      {sub && <p className="text-xs text-blue-200">{sub}</p>}
    </div>
  );
}

export default function OlympiadPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero header */}
      <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <p className="text-blue-300 text-sm mb-6 font-medium tracking-wide uppercase">
            Статистика · ВСОШ
          </p>

          <h1 className="text-3xl md:text-5xl font-black mb-3 leading-tight">
            Победители ВСОШ<br />
            <span className="text-amber-400">по регионам России</span>
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl mb-10">
            Всероссийская олимпиада школьников — ежегодное соревнование по&nbsp;24 предметам.
            Данные агрегированы за несколько последних лет.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon="🏅"
              value={totalWinners.toLocaleString('ru-RU')}
              label="Всего победителей"
              sub="дипломы I–III степени"
            />
            <StatCard
              icon="🥇"
              value={totalGold.toLocaleString('ru-RU')}
              label="Золотых дипломов"
              sub="I степень"
            />
            <StatCard
              icon="📍"
              value={String(totalRegions)}
              label="Регионов в рейтинге"
              sub="субъектов РФ"
            />
            <StatCard
              icon="🏆"
              value={topRegion.name}
              label="Абсолютный лидер"
              sub={`${topRegion.winners} победителей`}
            />
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">

        {/* District summary strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {topDistrict.map(([district, count]) => (
            <div
              key={district}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-center gap-3"
            >
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: DISTRICT_COLORS[district as District] }}
              />
              <div className="min-w-0">
                <p className="text-xs text-gray-500 truncate">{district}</p>
                <p className="text-lg font-black text-gray-900">{count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Интерактивная карта
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
                Размер круга пропорционален числу победителей
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-xs text-gray-400">Топ предмет</p>
              <p className="font-bold text-gray-800">{topSubject}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <OlympiadMap />
          </div>
        </section>

        {/* Top-5 podium */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Топ-5 регионов</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {sorted.slice(0, 5).map((region, i) => {
              const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
              const bgColors = [
                'from-amber-50 to-yellow-100 border-amber-200',
                'from-slate-50 to-gray-100 border-gray-200',
                'from-orange-50 to-amber-100 border-orange-200',
                'from-white to-gray-50 border-gray-100',
                'from-white to-gray-50 border-gray-100',
              ];
              return (
                <div
                  key={region.id}
                  className={`bg-gradient-to-b ${bgColors[i]} border rounded-2xl p-4 text-center shadow-sm`}
                >
                  <div className="text-3xl mb-2">{medals[i]}</div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">{region.name}</p>
                  <p className="text-2xl font-black text-gray-900 mt-2">{region.winners}</p>
                  <p className="text-xs text-gray-500">победителей</p>
                  <div className="mt-2 flex justify-center gap-1.5 text-xs">
                    <span>🥇{region.gold}</span>
                    <span>🥈{region.silver}</span>
                    <span>🥉{region.bronze}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Full table */}
        <section>
          <div className="flex items-baseline gap-3 mb-4">
            <h2 className="text-xl font-bold text-gray-900">Полный рейтинг регионов</h2>
            <span className="text-sm text-gray-400">{totalRegions} регионов</span>
          </div>
          <RegionTable />
        </section>
      </main>

      {/* Footer strip */}
      <div className="border-t border-gray-200 bg-white mt-10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-gray-400 text-center">
          Данные основаны на открытых материалах ВСОШ. Статистика носит ознакомительный характер.
        </div>
      </div>
    </div>
  );
}
