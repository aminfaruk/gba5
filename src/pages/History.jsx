import { useState } from 'react'
import { seasons, awards } from '../data/history'

const reversedSeasons = [...seasons].reverse()

export default function History() {
  const [openSeason, setOpenSeason] = useState(seasons[seasons.length - 1].season)

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">League Records</p>
        <h1 className="text-3xl font-extrabold text-gba-900">History</h1>
        <p className="text-gray-400 text-sm mt-2">{seasons.length} seasons played since founding.</p>
      </div>

      {/* Champions timeline */}
      <div className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Champions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {seasons.map(s => (
            <button
              key={s.season}
              onClick={() => setOpenSeason(s.season)}
              className={`text-left rounded-lg border p-4 transition-all ${
                openSeason === s.season
                  ? 'border-gba-500 bg-gba-900 text-white'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className={`text-xs font-semibold mb-1 ${openSeason === s.season ? 'text-gold-400' : 'text-gray-400'}`}>
                Season {s.season}
              </div>
              <div className={`font-bold text-sm leading-tight ${openSeason === s.season ? 'text-white' : 'text-gba-800'}`}>
                {s.finalsWinner}
              </div>
              <div className={`text-xs mt-0.5 ${openSeason === s.season ? 'text-white/50' : 'text-gray-400'}`}>
                {s.finalsWinnerSeed}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Season detail */}
      {seasons.map(s => s.season === openSeason && (
        <div key={s.season} className="mb-12">
          <div className="flex items-baseline gap-3 mb-6">
            <h2 className="text-xl font-extrabold text-gba-900">Season {s.season}</h2>
            <span className="text-sm text-gray-400">{s.playersCount} players · {s.teamsCount} teams</span>
          </div>

          {/* Finals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gba-900 text-white rounded-lg p-5">
              <div className="text-xs text-gold-400 font-semibold mb-1">🏆 Champions</div>
              <div className="font-extrabold text-lg mb-0.5">{s.finalsWinner}</div>
              <div className="text-white/50 text-xs mb-3">{s.finalsWinnerSeed} · {s.finalsWinnerRoster}</div>
              <div className="text-xs text-white/60">Finals MVP: <span className="text-gold-400 font-semibold">{s.fmvp}</span></div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="text-xs text-gray-400 font-semibold mb-1">Runner-Up</div>
              <div className="font-extrabold text-lg text-gba-900 mb-0.5">{s.finalsRunnerUp}</div>
              <div className="text-gray-400 text-xs">{s.finalsRunnerUpSeed} · {s.finalsRunnerUpRoster}</div>
            </div>
          </div>

          {/* Awards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <AwardCard label="MVP" winner={s.mvp} note={s.mvpVoting ? `Voting: ${s.mvpVoting}` : null} highlight />
            <AwardCard label="DPOY" winner={s.dpoy} note={s.dpoyVoting ? `Voting: ${s.dpoyVoting}` : null} />
            {s.roty && <AwardCard label="Rookie of the Year" winner={s.roty} note={s.rotyVoting ? `Voting: ${s.rotyVoting}` : null} />}
            {s.mip && <AwardCard label="Most Improved" winner={s.mip} note={s.mipVoting ? `Voting: ${s.mipVoting}` : null} />}
            {s.bestGM && <AwardCard label="Best GM" winner={s.bestGM} note={s.bestGMVoting ? `Voting: ${s.bestGMVoting}` : null} />}
            {s.mostClutch && <AwardCard label="Most Clutch" winner={s.mostClutch} note={s.mostClutchVoting ? `Voting: ${s.mostClutchVoting}` : null} />}
            {s.mostRespected && <AwardCard label="Most Respected" winner={s.mostRespected} note={s.mostRespectedVoting ? `Voting: ${s.mostRespectedVoting}` : null} />}
            {s.mostUnderrated && <AwardCard label="Most Underrated" winner={s.mostUnderrated} note={s.mostUnderratedVoting ? `Voting: ${s.mostUnderratedVoting}` : null} />}
          </div>

          {/* All-GBA teams */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <TeamList title="1st Team GBA" players={s.firstTeamGBA} accent />
            <TeamList title="2nd Team GBA" players={s.secondTeamGBA} />
            <TeamList title="3rd Team GBA" players={s.thirdTeamGBA} />
          </div>

          {/* All-Stars */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">All-Stars</h3>
            <div className="flex flex-wrap gap-2">
              {s.allStars.map(name => (
                <span key={name} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm text-gba-800 font-medium">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Awards point value reference */}
      <div className="border-t border-gray-200 pt-10">
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Award Point Values</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                <th className="px-4 py-3 text-left">Award</th>
                <th className="px-4 py-3 text-right">Bonus Player Points</th>
              </tr>
            </thead>
            <tbody>
              {awards.map(a => (
                <tr key={a.award} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-3 text-gray-700">{a.award}</td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums text-gba-800">+{a.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100">
            Player points capped at 10 per player per season.
          </div>
        </div>
      </div>
    </div>
  )
}

function AwardCard({ label, winner, note, highlight }) {
  return (
    <div className={`rounded-lg border p-4 ${highlight ? 'border-gold-400 bg-gold-400/5' : 'border-gray-200 bg-white'}`}>
      <div className={`text-xs font-semibold mb-1 ${highlight ? 'text-gold-600' : 'text-gray-400'}`}>{label}</div>
      <div className="font-bold text-gba-900 leading-tight">{winner}</div>
      {note && <div className="text-xs text-gray-400 mt-1 leading-snug">{note}</div>}
    </div>
  )
}

function TeamList({ title, players, accent }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className={`text-xs font-semibold mb-3 ${accent ? 'text-gold-600' : 'text-gray-400'}`}>{title}</div>
      <ul className="space-y-1.5">
        {players?.map(name => (
          <li key={name} className="text-sm text-gba-800 font-medium">{name}</li>
        ))}
      </ul>
    </div>
  )
}
