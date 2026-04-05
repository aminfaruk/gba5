import { Link } from 'react-router-dom'
import { teams } from '../data/teams'
import { seasons } from '../data/history'

const sorted = [...teams].sort((a, b) => b.total - a.total)
const topScorers = teams
  .flatMap(t => t.players.map(p => ({ ...p, team: t.name })))
  .sort((a, b) => b.points - a.points)
  .slice(0, 5)

const latest = seasons[seasons.length - 1]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Hero */}
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase mb-2">Granville Basketball Association</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gba-900 leading-tight mb-4">GBA</h1>
        <p className="text-gray-500 max-w-xl text-base leading-relaxed">
          A competitive recreational basketball league based in Granville.
          {' '}Season 4 complete. {latest.teamsCount} teams, {latest.playersCount} players.
          {' '}Tracking stats, standings, and history since Season 1.
        </p>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
        <Link
          to="/teams"
          className="group border border-gray-200 bg-white rounded-lg p-5 hover:border-gba-500 hover:shadow-sm transition-all"
        >
          <div className="text-2xl mb-2">🏀</div>
          <div className="font-semibold text-gba-800 group-hover:text-gba-600 mb-1">Teams</div>
          <div className="text-sm text-gray-400">{teams.length} active franchises</div>
        </Link>
        <Link
          to="/stats"
          className="group border border-gray-200 bg-white rounded-lg p-5 hover:border-gba-500 hover:shadow-sm transition-all"
        >
          <div className="text-2xl mb-2">📊</div>
          <div className="font-semibold text-gba-800 group-hover:text-gba-600 mb-1">Stats</div>
          <div className="text-sm text-gray-400">Player & team rankings</div>
        </Link>
        <Link
          to="/history"
          className="group border border-gray-200 bg-white rounded-lg p-5 hover:border-gba-500 hover:shadow-sm transition-all"
        >
          <div className="text-2xl mb-2">🏆</div>
          <div className="font-semibold text-gba-800 group-hover:text-gba-600 mb-1">History</div>
          <div className="text-sm text-gray-400">{seasons.length} seasons of records</div>
        </Link>
      </div>

      {/* Last season highlight */}
      <div className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Season {latest.season} Awards</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <AwardCard label="MVP" value={latest.mvp} />
          <AwardCard label="DPOY" value={latest.dpoy} />
          <AwardCard label="Champions" value={latest.finalsWinner} sub={latest.finalsWinnerSeed} />
          <AwardCard label="Finals MVP" value={latest.fmvp} />
        </div>
      </div>

      {/* Team standings */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Current Team Player Points</h2>
          <Link to="/teams" className="text-sm text-gba-600 hover:underline">View all →</Link>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                <th className="px-4 py-3 text-left w-6">#</th>
                <th className="px-4 py-3 text-left">Team</th>
                <th className="px-4 py-3 text-left">GM</th>
                <th className="px-4 py-3 text-right">Player Points</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((team, i) => (
                <tr key={team.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-300 font-mono text-xs">{i + 1}</td>
                  <td className="px-4 py-3">
                    <Link to={`/teams/${team.id}`} className="font-semibold text-gba-800 hover:text-gba-600">
                      {team.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{team.gm}</td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums">{team.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top scorers */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Top Scorers</h2>
          <Link to="/stats" className="text-sm text-gba-600 hover:underline">Full list →</Link>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                <th className="px-4 py-3 text-left w-6">#</th>
                <th className="px-4 py-3 text-left">Player</th>
                <th className="px-4 py-3 text-left">Team</th>
                <th className="px-4 py-3 text-right">Player Points</th>
              </tr>
            </thead>
            <tbody>
              {topScorers.map((p, i) => (
                <tr key={p.name} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-3 text-gray-300 font-mono text-xs">{i + 1}</td>
                  <td className="px-4 py-3 font-semibold text-gba-800">{p.name}</td>
                  <td className="px-4 py-3 text-gray-500">{p.team}</td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums">{p.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

function AwardCard({ label, value, sub }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="text-xs text-gray-400 font-medium mb-1">{label}</div>
      <div className="font-bold text-gba-800 leading-tight">{value}</div>
      {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
    </div>
  )
}
