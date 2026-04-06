import { Link } from 'react-router-dom'
import { teams } from '../data/teams'
import { seasons } from '../data/history'

const sorted = [...teams].sort((a, b) => b.total - a.total)
const latest = seasons[seasons.length - 1]

/* ─────────────────────────────────────────────────────────────
   STANDINGS — derived from teams data, sorted by win%
───────────────────────────────────────────────────────────── */
const standings = [...teams]
  .filter((t) => t.standings)
  .sort((a, b) => {
    const aPct = a.standings.w / (a.standings.gp || 1)
    const bPct = b.standings.w / (b.standings.gp || 1)
    return bPct - aPct
  })
  .map((t, i) => ({
    rank: i + 1,
    team: t.name,
    id: t.id,
    gp: t.standings.gp,
    w: t.standings.w,
    l: t.standings.l,
    status: t.standings.status,
  }))

const statusColors = {
  green:  { border: '#2e7d32', bg: 'rgba(46,125,50,0.06)' },
  orange: { border: '#ed6c02', bg: 'rgba(237,108,2,0.06)' },
  red:    { border: '#d32f2f', bg: 'rgba(211,47,47,0.06)' },
}

/* ─────────────────────────────────────────────────────────────
   AWARDS DATA — Season 4
───────────────────────────────────────────────────────────── */
const awards = [
  {
    label: 'Most Valuable Player',
    winner: latest.mvp,
    detail: `Ressurection`,
    icon: 'stars',
    borderColor: 'border-gba-700',
  },
  {
    label: 'Defensive Player',
    winner: latest.dpoy,
    detail: `Flight Crew`,
    icon: 'shield',
    borderColor: 'border-secondary',
  },
  {
    label: 'League Champions',
    winner: latest.finalsWinner,
    detail: `${latest.finalsWinnerSeed}`,
    icon: 'trophy',
    borderColor: 'border-gba-700',
  },
  {
    label: 'Finals MVP',
    winner: latest.fmvp,
    detail: `Ressurection`,
    icon: 'military_tech',
    borderColor: 'border-secondary',
  },
]

/* ─────────────────────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-20">

      {/* ══════════════════════════════════════════════════════
          SECTION 1: STANDINGS LEADERBOARD (Hero)
      ══════════════════════════════════════════════════════ */}
      <section id="standings">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-8 gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface uppercase">
            Season 4 Final Standings
          </h1>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-low rounded-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-status-green" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
              Live Update
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl bg-surface-lowest shadow-[0_20px_40px_rgba(28,27,27,0.06)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-highest">
                <th className="px-4 sm:px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-outline w-16">#</th>
                <th className="px-4 sm:px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-outline">Team Name</th>
                <th className="px-4 sm:px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-outline text-center">GP</th>
                <th className="px-4 sm:px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-outline text-center">W</th>
                <th className="px-4 sm:px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-outline text-center">L</th>
                <th className="px-4 sm:px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-outline text-right">Win%</th>
              </tr>
            </thead>
            <tbody className="font-body">
              {standings.map((row, i) => {
                const colors = statusColors[row.status]
                const winPct = row.gp > 0 ? (row.w / row.gp).toFixed(3) : '.000'
                const isEven = i % 2 === 0

                return (
                  <tr
                    key={row.rank}
                    className={`group transition-colors duration-200 hover:bg-gba-50/60 ${isEven ? 'bg-surface-lowest' : 'bg-surface-low'}`}
                    style={{ borderLeft: `6px solid ${colors.border}` }}
                  >
                    <td className="px-4 sm:px-6 py-4 font-headline font-bold text-lg text-gba-700 tabular-nums">
                      {String(row.rank).padStart(2, '0')}
                    </td>
                    <td className="px-4 sm:px-6 py-4 font-headline font-bold text-base sm:text-lg text-on-surface">
                      {row.team}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center font-medium tabular-nums text-on-surface-variant">
                      {row.gp}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center font-semibold tabular-nums text-on-surface">
                      {row.w}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center font-medium tabular-nums text-on-surface-variant">
                      {row.l}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-right font-bold tabular-nums text-on-surface">
                      {winPct}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-6 sm:gap-8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-status-green" />
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              Clinched Playoffs
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-status-orange" />
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              Play-In Tournament
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-status-red" />
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              Eliminated
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2: SEASON AWARDS
      ══════════════════════════════════════════════════════ */}
      <section id="awards" className="space-y-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-extrabold tracking-tight text-on-surface">
          Season {latest.season} Awards
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.map((a) => (
            <div
              key={a.label}
              className={`relative group p-7 sm:p-8 bg-surface-low rounded-xl border-t-4 ${a.borderColor} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Background icon */}
              <div className="absolute -right-3 -bottom-3 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-300">
                <span className="material-symbols-outlined text-[100px] sm:text-[120px]">
                  {a.icon}
                </span>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-3 relative">
                {a.label}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-gba-700 font-headline relative leading-tight">
                {a.winner}
              </h3>
              <p className="mt-3 text-sm font-medium text-on-surface-variant relative">
                {a.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3: TEAM PLAYER POINTS
      ══════════════════════════════════════════════════════ */}
      <section id="player-points" className="bg-surface-low p-6 sm:p-8 rounded-2xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface">
            Current Team Player Points
          </h2>
          <Link
            to="/teams"
            className="group flex items-center gap-1.5 text-gba-700 font-bold text-sm tracking-wide transition-all hover:gap-2.5"
          >
            View all
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="bg-surface-lowest rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(28,27,27,0.04)]">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-highest/50">
                <th className="px-4 sm:px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-outline w-12">#</th>
                <th className="px-4 sm:px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-outline">Team</th>
                <th className="px-4 sm:px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-outline text-center">GM</th>
                <th className="px-4 sm:px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-outline text-right">Player Points</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((team, i) => (
                <tr
                  key={team.id}
                  className="hover:bg-gba-50/40 transition-colors duration-150"
                  style={{
                    borderBottom: i < sorted.length - 1 ? '1px solid #eae7e7' : 'none',
                  }}
                >
                  <td className="px-4 sm:px-6 py-4 font-bold tabular-nums text-on-surface-variant">
                    {i + 1}
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <Link
                      to={`/teams/${team.id}`}
                      className="font-semibold text-on-surface hover:text-gba-700 transition-colors"
                    >
                      {team.name}
                    </Link>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-center tabular-nums text-on-surface-variant">
                    {team.gm}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-right font-extrabold text-gba-700 tabular-nums">
                    {team.total.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
