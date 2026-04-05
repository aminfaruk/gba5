import { Link } from 'react-router-dom'
import { teams } from '../data/teams'

const sorted = [...teams].sort((a, b) => b.total - a.total)

export default function Teams() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">GBA Franchises</p>
        <h1 className="text-3xl font-extrabold text-gba-900">Teams</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sorted.map((team, rank) => (
          <Link
            key={team.id}
            to={`/teams/${team.id}`}
            className="group bg-white border border-gray-200 rounded-lg p-5 hover:border-gba-500 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-bold text-gba-800 text-base group-hover:text-gba-600 leading-tight">
                  {team.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">GM {team.gm}</div>
              </div>
              <span className="text-xs text-gray-300 font-mono mt-0.5">#{rank + 1}</span>
            </div>

            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-extrabold text-gba-900 tabular-nums">{team.total}</span>
              <span className="text-xs text-gray-400">pts</span>
            </div>

            <div className="space-y-1.5">
              {team.players.map(p => (
                <div key={p.name} className="flex justify-between text-sm">
                  <span className="text-gray-600">{p.name}</span>
                  <span className="font-medium tabular-nums text-gba-700">{p.points}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
