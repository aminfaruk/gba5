import { useParams, Link } from 'react-router-dom'
import { teams } from '../data/teams'
import { seasons } from '../data/history'

export default function TeamDetail() {
  const { teamId } = useParams()
  const team = teams.find(t => t.id === teamId)

  if (!team) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-400 mb-4">Team not found.</p>
        <Link to="/teams" className="text-gba-600 hover:underline text-sm">← Back to teams</Link>
      </div>
    )
  }

  const sortedPlayers = [...team.players].sort((a, b) => b.points - a.points)
  const topPlayer = sortedPlayers[0]

  // Check if this team appears in history
  const historyMentions = seasons.flatMap(s => {
    const mentions = []
    if (s.finalsWinner.toLowerCase().includes(team.name.split(' ')[0].toLowerCase()) ||
        team.name.toLowerCase().includes(s.finalsWinner.split(' ')[0].toLowerCase())) {
      mentions.push({ season: s.season, role: 'Champions', detail: s.fmvp + ' (FMVP)' })
    }
    if (s.finalsRunnerUp.toLowerCase().includes(team.name.split(' ')[0].toLowerCase()) ||
        team.name.toLowerCase().includes(s.finalsRunnerUp.split(' ')[0].toLowerCase())) {
      mentions.push({ season: s.season, role: 'Finals Runner-Up', detail: s.finalsRunnerUpSeed })
    }
    return mentions
  })

  // Player awards from history
  const playerAwards = sortedPlayers.flatMap(player => {
    return seasons.flatMap(s => {
      const awards = []
      if (s.mvp === player.name) awards.push({ season: s.season, award: 'MVP' })
      if (s.dpoy === player.name) awards.push({ season: s.season, award: 'DPOY' })
      if (s.fmvp === player.name) awards.push({ season: s.season, award: 'Finals MVP' })
      if (s.firstTeamGBA?.includes(player.name)) awards.push({ season: s.season, award: '1st Team GBA' })
      return awards.map(a => ({ ...a, player: player.name }))
    })
  })

  const allTeams = [...teams].sort((a, b) => b.total - a.total)
  const rank = allTeams.findIndex(t => t.id === team.id) + 1

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link to="/teams" className="text-sm text-gray-400 hover:text-gba-600 mb-6 inline-block">← All teams</Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">GBA Franchise · Rank #{rank}</p>
            <h1 className="text-3xl font-extrabold text-gba-900 mb-1">{team.name}</h1>
            <p className="text-gray-400 text-sm">GM {team.gm}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-extrabold text-gba-900 tabular-nums">{team.total}</div>
            <div className="text-xs text-gray-400">total player points</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

        {/* Roster table */}
        <div className="sm:col-span-2">
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">Roster</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                  <th className="px-4 py-3 text-left">Player</th>
                  <th className="px-4 py-3 text-right">Player Points</th>
                  <th className="px-4 py-3 text-right">Share</th>
                </tr>
              </thead>
              <tbody>
                {sortedPlayers.map((p, i) => (
                  <tr key={p.name} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {i === 0 && <span className="text-xs text-gold-500">★</span>}
                        <span className={i === 0 ? 'font-semibold text-gba-800' : 'text-gray-700'}>{p.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums text-gba-800">{p.points}</td>
                    <td className="px-4 py-3 text-right text-gray-400 tabular-nums text-xs">
                      {Math.round((p.points / team.total) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 text-xs font-medium text-gray-500">Total</td>
                  <td className="px-4 py-3 text-right font-bold tabular-nums text-gba-900">{team.total}</td>
                  <td className="px-4 py-3 text-right text-gray-400 text-xs">100%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Sidebar stats */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">Key Stats</h2>
            <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-50">
              <StatRow label="Top Player" value={topPlayer.name} />
              <StatRow label="Top Player Points" value={topPlayer.points} />
              <StatRow label="Roster Size" value={`${team.players.length} players`} />
              <StatRow label="Avg per Player" value={Math.round(team.total / team.players.length)} />
            </div>
          </div>

          {historyMentions.length > 0 && (
            <div>
              <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">History</h2>
              <div className="space-y-2">
                {historyMentions.map((m, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                    <div className="text-xs text-gray-400 mb-0.5">Season {m.season}</div>
                    <div className="font-semibold text-gba-800 text-sm">{m.role}</div>
                    <div className="text-xs text-gray-400">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Player awards */}
      {playerAwards.length > 0 && (
        <div>
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">Player Awards</h2>
          <div className="flex flex-wrap gap-2">
            {playerAwards.map((a, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm">
                <span className="font-medium text-gba-800">{a.player}</span>
                <span className="text-gray-400 mx-1">·</span>
                <span className="text-gold-600">{a.award}</span>
                <span className="text-gray-400 ml-1">S{a.season}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function StatRow({ label, value }) {
  return (
    <div className="flex justify-between px-4 py-2.5 text-sm">
      <span className="text-gray-400">{label}</span>
      <span className="font-medium text-gba-800">{value}</span>
    </div>
  )
}
