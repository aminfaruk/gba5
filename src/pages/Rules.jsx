import { useState, useEffect, useRef } from 'react'

const sections = [
  {
    id: 'mission',
    title: '1. League Mission & Vision',
    short: 'Mission & Vision',
    content: (
      <div>
        <h3 className="font-bold text-gba-800 mb-2">1.1 Mission</h3>
        <p className="text-gray-600 mb-5">The GBA exists to provide structured, competitive, high-level community basketball with professionalism, integrity, and entertainment value.</p>
        <h3 className="font-bold text-gba-800 mb-2">1.2 Vision</h3>
        <p className="text-gray-600 mb-5">To become Sydney's premier structured community basketball league and evolve into a sustainable semi-professional basketball platform.</p>
        <h3 className="font-bold text-gba-800 mb-2">1.3 Core Values</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Integrity</li>
          <li>Competitive Excellence</li>
          <li>Accountability</li>
          <li>Entertainment</li>
          <li>Brotherhood</li>
          <li>Structure over chaos</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'structure',
    title: '2. League Structure',
    short: 'League Structure',
    content: (
      <div>
        <h3 className="font-bold text-gba-800 mb-2">2.1 Teams</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>7 teams (expandable)</li>
          <li>5 players per team</li>
          <li>35 total players</li>
          <li>Expansion teams approved by the Commissioner</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">2.2 Season Format</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>4–5 week regular season (3–4 hour venue booking)</li>
          <li>2 Weeks of GBA Playoff Basketball</li>
          <li>8+ games per session</li>
          <li>1 court (2 if required)</li>
          <li>First to 7, win by 2</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">2.3 Playoff & Play-In Format</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>Top 4 teams qualify for playoffs (Seeds 1–3 automatically qualify)</li>
          <li>Seeds 4 & 5 play a 3-game series</li>
          <li>Playoffs and Championship Final: Best of 5</li>
        </ul>
        <div className="bg-gba-50 border border-gba-200 rounded-lg p-4 mb-5">
          <p className="text-xs font-semibold text-gba-700 uppercase tracking-widest mb-2">📜 GBA Playoff Rule: Late Arrival / Injury Procedure</p>
          <ol className="list-decimal list-inside text-gray-600 space-y-1.5 text-sm">
            <li>The other playoff series will be played back-to-back until Game 2 is completed.</li>
            <li>After Game 2, the delayed series is expected to begin immediately.</li>
            <li>If the missing player is still absent, the game is recorded as a forfeit.</li>
            <li>Game 3 of the alternate series will then be played.</li>
            <li>After Game 3, the delayed series is again expected to begin.</li>
            <li>If still unable to play, another forfeit is recorded and Game 4 begins.</li>
            <li>This sequence continues until the delayed series begins or the alternate series is completed.</li>
          </ol>
          <p className="text-sm text-gray-600 mt-3"><strong>Injury Exception:</strong> If the delay is due to injury, the injured player is eligible to enter at any time. Once present and able to play, the forfeiture process stops.</p>
        </div>
        <h3 className="font-bold text-gba-800 mb-2">2.4 All-Star Weekend</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>All-Star Game</li>
          <li>1v1 Tournament</li>
          <li>3-Point Contest</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'governance',
    title: '3. Governance & Authority',
    short: 'Governance',
    content: (
      <div>
        <h3 className="font-bold text-gba-800 mb-2">3.1 Commissioner Powers</h3>
        <p className="text-gray-600 mb-2">The Commissioner:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>Oversees all league operations</li>
          <li>Has final ruling on disputes</li>
          <li>May veto trades (with valid reasoning)</li>
          <li>Approves team expansions</li>
          <li>Enforces discipline</li>
          <li>Maintains the rule book</li>
          <li>Adjusts format when necessary</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">3.2 Conflict of Interest Policy</h3>
        <p className="text-gray-600 mb-2">The Commissioner may play in the league but:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Must follow the same rule book</li>
          <li>Cannot override written rules for personal gain</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'registration',
    title: '4. Player Registration & Payments',
    short: 'Registration',
    content: (
      <div>
        <h3 className="font-bold text-gba-800 mb-2">4.1 Registration</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>All players must register $110 prior to the season start</li>
          <li>Payment must be completed before eligibility</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">4.2 Payment Enforcement</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>No trades or movement permitted until payments are complete</li>
          <li>Failure to pay may result in suspension or removal</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'gamerules',
    title: '5. Game Rules',
    short: 'Game Rules',
    content: (
      <div>
        <h3 className="font-bold text-gba-800 mb-2">5.1 Match Format</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>First to 7 (may change to 9 or 11 in Play-Ins and Playoffs). Win by 2.</li>
          <li>No free wins. Only from forfeits. All games must be played!</li>
          <li>If a team does not have 5 active players, games may start 5v4</li>
          <li>If a team is missing 2 or more players, the game is forfeited 7–0</li>
          <li>Teams may play 3–5 players if 1 or 2 players have fouled out</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">5.2 Fouls</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
          <li>4 Team fouls</li>
          <li>On the 5th foul, the player who committed it sits out for 2 minutes</li>
          <li>Fouls then alternate:</li>
        </ul>
        <ul className="list-none ml-8 text-gray-600 space-y-1 mb-5 text-sm">
          <li>○ 6th foul – no foul out</li>
          <li>○ 7th foul – foul out</li>
          <li>○ 8th foul – no foul out</li>
          <li>○ 9th foul – foul out, etc.</li>
        </ul>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>Repeated misconduct = suspension</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">5.3 Suspensions</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Suspensions apply only to scheduled official GBA games</li>
          <li>Missed games due to personal reasons do NOT automatically count toward suspension unless ruled by the Commissioner</li>
          <li>Racism or any altercation that harms, threatens, or violates another player may result in suspension</li>
          <li>Unethical or discriminatory public behaviour outside of the GBA may result in suspension</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'conduct',
    title: '6. Discipline & Conduct',
    short: 'Conduct',
    content: (
      <div>
        <h3 className="font-bold text-gba-800 mb-2">6.1 Code of Conduct</h3>
        <p className="text-gray-600 mb-2">Players must:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>Respect referees and scorekeepers</li>
          <li>Respect opposing teams</li>
          <li>Avoid public slander</li>
          <li>Maintain sportsmanship</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">6.2 Unsportsmanlike Conduct</h3>
        <p className="text-gray-600 mb-2">Includes:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
          <li>Excessive complaining</li>
          <li>Disrespect toward the league</li>
          <li>Tampering with players</li>
          <li>Undermining league structure</li>
        </ul>
        <p className="text-gray-600 mb-2">Penalties may include:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Warning</li>
          <li>Game suspension</li>
          <li>Donation to charity</li>
          <li>Multi-game suspension</li>
          <li>Removal from the league</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'trades',
    title: '7. Trades & Free Agency',
    short: 'Trades & FA',
    content: (
      <div>
        <h3 className="font-bold text-gba-800 mb-2">Salary Cap System</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>Each team has a <strong>370-point salary cap</strong> (with a 20-point trade threshold)</li>
          <li>Once a player enters the free agent pool, their team permanently loses re-signing rights</li>
          <li>To qualify as a re-signing, a player must never enter the free agent pool</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">Player Point Values (Draft Round)</h3>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-5">
          <table className="w-full text-sm">
            <thead><tr className="bg-gba-50 border-b border-gray-100 text-gba-700 text-xs font-semibold"><th className="px-4 py-2 text-left">Round</th><th className="px-4 py-2 text-right">Player Points</th></tr></thead>
            <tbody>
              {[['1st Round Pick', '100'],['2nd Round Pick', '80'],['3rd Round Pick', '60'],['4th Round Pick', '40']].map(([r, p]) => (
                <tr key={r} className="border-b border-gray-50 last:border-0"><td className="px-4 py-2 text-gray-600">{r}</td><td className="px-4 py-2 text-right font-semibold text-gba-800">{p} pts</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="font-bold text-gba-800 mb-2">Roster Requirements</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>Minimum and maximum of 5 players before season begins</li>
          <li>Teams may not sign free agents if doing so exceeds the 370-point cap</li>
          <li>Teams may exceed the cap only through re-signing their own players</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">Contract Rules</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>Players may sign 1, 2, or 3-season contracts</li>
          <li>Contracts of 2+ seasons must include a Player Option (PO) or Team Option (TO)</li>
          <li>Multiple players cannot share the same point contract unless both qualify for Supermax</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">Trading Rules</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>Teams over the 470-point cap may only trade within 20 points above or to reduce cap</li>
          <li>If a GM wishes to re-trade a player, it must happen within 5 hours of the original trade</li>
          <li>After 5 hours, the player must play at least 1 game before being traded again</li>
          <li>A player cannot be traded back to their original team immediately. Must play 2 games first.</li>
          <li>Players with season-ending injuries are ineligible for trade unless within 1 hour of announcement</li>
          <li>Fabricated injuries result in suspensions, fines, draft pick loss, and/or removal</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">Draft Pick Trades</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>Only the bottom 3 teams are awarded first-round draft picks</li>
          <li>A first-round pick allows signing of an external player without cap restriction</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">Violations</h3>
        <p className="text-gray-600 mb-2">Intentional cap dodging, tampering, or manipulation may result in:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Fines</li>
          <li>Suspensions</li>
          <li>Trade veto</li>
          <li>Additional penalties by the Commissioner</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'tampering',
    title: 'Tampering Rules',
    short: 'Tampering',
    content: (
      <div>
        <h3 className="font-bold text-gba-800 mb-2">Definition</h3>
        <p className="text-gray-600 mb-5">Tampering is any unauthorized attempt to recruit, influence, negotiate with, or persuade a player under contract with another GBA team. GMs and players may only discuss contracts from the first Monday of the final week of GBA Finals until free agency closes.</p>
        <h3 className="font-bold text-gba-800 mb-2">What Counts as Tampering</h3>
        <div className="space-y-4 mb-5">
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">Direct Contact</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
              <li>Messaging a contracted player about joining your team</li>
              <li>Discussing contracts before free agency</li>
              <li>Offering points, promises, or roles</li>
              <li>Suggesting trades directly</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">Indirect Contact</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
              <li>Using another player to recruit</li>
              <li>Using group chats to influence</li>
              <li>Public hints about future signings</li>
              <li>Sending outside individuals to pressure</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">Public Pressure</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
              <li>Posting content implying departure</li>
              <li>Creating destabilising narratives</li>
              <li>Undermining a GM</li>
            </ul>
          </div>
        </div>
        <h3 className="font-bold text-gba-800 mb-2">Investigation Process</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-5">
          <li>Complaint submitted to Commissioner</li>
          <li>Evidence required</li>
          <li>Review of both parties</li>
          <li>Final ruling by Commissioner</li>
        </ul>
        <h3 className="font-bold text-gba-800 mb-2">Penalties</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Warning</li>
          <li>Loss of signing rights</li>
          <li>Deduction of Free Agency points</li>
          <li>Suspension</li>
          <li>Draft pick or cap penalty</li>
          <li>Contract void</li>
          <li>Extreme cases: GM removal</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'salarycap',
    title: '8. Salary Cap / Point System',
    short: 'Salary Cap',
    content: (
      <div>
        <h3 className="font-bold text-gba-800 mb-3">Contract Limits</h3>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gba-50 border-b border-gray-100 text-gba-700 text-xs font-semibold">
                <th className="px-4 py-3 text-left">Duration</th>
                <th className="px-4 py-3 text-right">Min Points</th>
                <th className="px-4 py-3 text-right">Max Points</th>
              </tr>
            </thead>
            <tbody>
              {[['1 Season', '3 pts', '14 pts'], ['2 Seasons', '10 pts', '26 pts'], ['3 Seasons', '20 pts', '33 pts']].map(([d, min, max]) => (
                <tr key={d} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-3 font-medium text-gray-700">{d}</td>
                  <td className="px-4 py-3 text-right text-gray-500">{min}</td>
                  <td className="px-4 py-3 text-right font-semibold text-gba-800">{max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">Points must be split as whole numbers only.</p>
      </div>
    ),
  },
  {
    id: 'allstar',
    title: '9. All-Star Voting System',
    short: 'All-Star Voting',
    content: (
      <div>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>35% Public Fans</li>
          <li>65% Players</li>
          <li>Anonymous voting</li>
          <li>Fraudulent votes may be removed</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'media',
    title: '10. Statistics & Media',
    short: 'Stats & Media',
    content: (
      <div>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Teams not playing may ref, record, or keep stats</li>
          <li>Highlights and AI graphics on Instagram & TikTok channels</li>
          <li>All league trades, free agency moves, news, and drama are posted on Telegram and Instagram only. Anything posted elsewhere is not legitimate.</li>
          <li>Players have the right to private conversations regarding trades. Saying "Private conversation" protects the identity of the source. This right does not apply one week before or after the trade deadline.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'awards',
    title: '11. Awards',
    short: 'Awards',
    content: (
      <div>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
          <li>MVP</li>
          <li>DPOY</li>
          <li>MIP</li>
          <li>Finals MVP</li>
          <li>All-GBA Teams</li>
          <li>All-GBA Defensive Teams</li>
          <li>Scoring Leader</li>
        </ul>
        <p className="text-gray-600 text-sm">Players must compete in 3 of 4 regular season weeks to qualify (except All-Star selections). Players who do not register and vote are not eligible to win awards.</p>
      </div>
    ),
  },
  {
    id: 'expansion',
    title: '12. Expansion Policy',
    short: 'Expansion',
    content: (
      <div>
        <p className="text-gray-600 mb-2">New teams must demonstrate:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Committed players</li>
          <li>Financial viability</li>
          <li>Competitive balance</li>
          <li>Approved leadership</li>
          <li>0–2 teams may be added per season</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'final',
    title: '15. Final Clause',
    short: 'Final Clause',
    content: (
      <div>
        <blockquote className="border-l-4 border-gba-600 pl-4 italic text-gba-800 font-medium text-lg mb-5">
          "The GBA exists because of structure.<br />
          Structure creates competition.<br />
          Competition creates legacy."
        </blockquote>
        <p className="text-gray-600">All players agree to abide by this rule book upon registration. Failure to comply may result in removal from the Granville Basketball Association.</p>
      </div>
    ),
  },
]

export default function Rules() {
  const [active, setActive] = useState(sections[0].id)
  const contentRef = useRef(null)

  const scrollTo = (id) => {
    setActive(id)
    const el = document.getElementById(`rule-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id.replace('rule-', ''))
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    sections.forEach((s) => {
      const el = document.getElementById(`rule-${s.id}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Official</p>
        <h1 className="text-3xl font-extrabold text-gba-900">Rule Book</h1>
        <p className="text-gray-400 text-sm mt-1">Granville Basketball Association · Established 2025 · Sydney, Australia</p>
      </div>

      <div className="flex gap-8 items-start">
        {/* Sticky sidebar */}
        <aside className="hidden md:block w-52 shrink-0 sticky top-6">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">Contents</p>
          <nav className="space-y-0.5">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  active === s.id
                    ? 'bg-gba-100 text-gba-800 font-semibold'
                    : 'text-gray-500 hover:text-gba-700 hover:bg-gba-50'
                }`}
              >
                {s.short}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div ref={contentRef} className="flex-1 min-w-0 space-y-12">
          {sections.map((s) => (
            <div key={s.id} id={`rule-${s.id}`} className="scroll-mt-6">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gba-100">
                <h2 className="text-xl font-extrabold text-gba-900">{s.title}</h2>
              </div>
              <div className="text-sm leading-relaxed">{s.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
