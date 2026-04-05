import { useState } from 'react'
import { Link } from 'react-router-dom'
import { teams, freeAgents } from '../data/teams'

const allRosteredPlayers = teams
  .flatMap(t => t.players.map(p => ({ ...p, team: t.name, teamId: t.id, status: 'rostered' })))
  .sort((a, b) => b.points - a.points)

const allFreeAgents = freeAgents
  .map(p => ({ ...p, team: 'Free Agent', teamId: null, status: 'free-agent' }))
  .sort((a, b) => b.points - a.points)

const teamsSorted = [...teams].sort((a, b) => b.total - a.total)

export default function Stats() {
  const [tab, setTab] = useState('players')

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">League Overview</p>
        <h1 className="text-3xl font-extrabold text-gba-900">Stats</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b border-gray-200">
        {['players', 'teams', 'free-agents'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors capitalize ${
              tab === t
                ? 'border-gba-700 text-gba-800'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {t === 'free-agents' ? 'Free Agents' : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === 'players' && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                <th className="px-4 py-3 text-left w-8">#</th>
                <th className="px-4 py-3 text-left">Player</th>
                <th className="px-4 py-3 text-left">Team</th>
                <th className="px-4 py-3 text-right">Player Points</th>
              </tr>
            </thead>
            <tbody>
              {allRosteredPlayers.map((p, i) => (
                <tr key={`${p.name}-${p.teamId}`} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-300 font-mono text-xs">{i + 1}</td>
                  <td className="px-4 py-3 font-semibold text-gba-800">{p.name}</td>
                  <td className="px-4 py-3">
                    <Link to={`/teams/${p.teamId}`} className="text-gray-500 hover:text-gba-600 hover:underline">
                      {p.team}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums text-gba-800">{p.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'teams' && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                <th className="px-4 py-3 text-left w-8">#</th>
                <th className="px-4 py-3 text-left">Team</th>
                <th className="px-4 py-3 text-left">GM</th>
                <th className="px-4 py-3 text-right">Players</th>
                <th className="px-4 py-3 text-right">Total Pts</th>
                <th className="px-4 py-3 text-right">Avg</th>
              </tr>
            </thead>
            <tbody>
              {teamsSorted.map((team, i) => (
                <tr key={team.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-300 font-mono text-xs">{i + 1}</td>
                  <td className="px-4 py-3">
                    <Link to={`/teams/${team.id}`} className="font-semibold text-gba-800 hover:text-gba-600">
                      {team.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{team.gm}</td>
                  <td className="px-4 py-3 text-right text-gray-500">{team.players.length}</td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums text-gba-800">{team.total}</td>
                  <td className="px-4 py-3 text-right text-gray-400 tabular-nums">
                    {Math.round(team.total / team.players.length)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'free-agents' && (
        <div>
          <p className="text-sm text-gray-400 mb-4">Players currently without a team.</p>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                  <th className="px-4 py-3 text-left w-8">#</th>
                  <th className="px-4 py-3 text-left">Player</th>
                  <th className="px-4 py-3 text-right">Career Player Points</th>
                </tr>
              </thead>
              <tbody>
                {allFreeAgents.map((p, i) => (
                  <tr key={p.name} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-3 text-gray-300 font-mono text-xs">{i + 1}</td>
                    <td className="px-4 py-3 font-medium text-gray-700">{p.name}</td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums text-gba-800">{p.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
