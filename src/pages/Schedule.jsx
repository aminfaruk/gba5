/* ─────────────────────────────────────────────────────────────
   SEASON 5 SCHEDULE — phased bento grid
───────────────────────────────────────────────────────────── */
const schedule = [
  {
    phase: 'Phase 01',
    title: 'Re-Signing Window',
    dates: 'Apr 13 – 15',
    icon: 'edit_document',
    borderColor: 'border-status-orange',
    description:
      'Teams and players exercise team or player options. No trades permitted, but open communication between GMs and players is encouraged.',
    events: [
      { date: 'Apr 13', label: 'Window opens' },
      { date: 'Apr 15', label: 'Unsigned players enter free agency' },
    ],
  },
  {
    phase: 'Phase 02',
    title: 'Free Agency',
    dates: 'Apr 16 – 18',
    icon: 'swap_horiz',
    borderColor: 'border-status-orange',
    description:
      'Trades between GMs are officially permitted. Tampering rules are reinstated when the window closes.',
    events: [
      { date: 'Apr 16', label: 'Free agency opens' },
      { date: 'Apr 18', label: 'Free agency closes · tampering reinstated' },
    ],
  },
  {
    phase: 'Phase 03',
    title: 'Regular Season',
    dates: 'Apr 19 – May 10',
    icon: 'sports_basketball',
    borderColor: 'border-status-green',
    description:
      'Four weeks of regular season action across the league. The trade deadline falls mid-season.',
    events: [
      { date: 'Apr 19', label: 'Week 1 tips off' },
      { date: 'May 6',  label: 'Trade deadline' },
      { date: 'May 10', label: 'Final regular season game' },
    ],
  },
  {
    phase: 'Phase 04',
    title: 'All-Star Break',
    dates: 'May 11 – 14',
    icon: 'star',
    borderColor: 'border-gold-500',
    description:
      'All-Star voting opens, rosters drop mid-week, and award voting kicks off ahead of the postseason.',
    events: [
      { date: 'May 11', label: 'All-Star voting opens' },
      { date: 'May 14', label: 'Rosters announced · award voting opens' },
    ],
  },
  {
    phase: 'Phase 05',
    title: 'Playoffs',
    dates: 'May 17 – 24',
    icon: 'military_tech',
    borderColor: 'border-status-red',
    description:
      'Play-in tournament and Finals Round 1. The 5 vs 6 winner plays the 4 seed for the final playoff spot.',
    events: [
      { date: 'May 17', label: 'Play-in begins (5 vs 6 → vs 4)' },
      { date: 'May 24', label: 'Finals Round 1 · award winners announced' },
    ],
  },
  {
    phase: 'Phase 06',
    title: 'Grand Finals',
    dates: 'May 31',
    icon: 'trophy',
    borderColor: 'border-gba-700',
    description:
      'Week 7 closes out Season 5. A new champion will be crowned.',
    events: [
      { date: 'May 31', label: 'GBA Grand Finals' },
    ],
  },
]

/* ─────────────────────────────────────────────────────────────
   SCHEDULE PAGE
───────────────────────────────────────────────────────────── */
export default function Schedule() {
  return (
    <main className="max-w-screen-2xl mx-auto px-3 sm:px-6 py-8 sm:py-14 space-y-10 sm:space-y-14">

      {/* ══════════════════════════════════════════════════════
          HERO HEADER
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gba-700 via-gba-600 to-gba-500 text-white p-6 sm:p-12">
        <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[200px] sm:text-[320px]">calendar_month</span>
        </div>

        <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-2 sm:mb-3">
              Official League Calendar
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight uppercase leading-none">
              Season 5<br />
              <span className="text-gold-400">Schedule</span>
            </h1>
          </div>

          <div className="flex flex-col sm:items-end gap-1">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-lg w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400" />
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                New Season
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-white/60">
              Subject to change · Commissioner Musa
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PHASES BENTO GRID
      ══════════════════════════════════════════════════════ */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {schedule.map((p) => (
            <div
              key={p.title}
              className={`relative group p-4 sm:p-8 bg-surface-low rounded-xl border-t-4 ${p.borderColor} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              <div className="absolute -right-3 -bottom-3 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none">
                <span className="material-symbols-outlined text-[72px] sm:text-[120px]">
                  {p.icon}
                </span>
              </div>

              <div className="flex justify-between items-start gap-3 mb-2 sm:mb-3 relative">
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-outline">
                  {p.phase}
                </p>
                <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-gba-700 bg-surface-highest px-2 py-0.5 rounded-full whitespace-nowrap">
                  {p.dates}
                </span>
              </div>

              <h3 className="text-base sm:text-2xl font-bold text-gba-700 font-headline relative leading-tight mb-2 sm:mb-3">
                {p.title}
              </h3>

              <p className="text-xs sm:text-sm font-medium text-on-surface-variant relative mb-3 sm:mb-4 leading-relaxed">
                {p.description}
              </p>

              <ul className="space-y-1.5 relative">
                {p.events.map((e, i) => (
                  <li key={i} className="flex items-baseline gap-2 text-[10px] sm:text-xs font-medium">
                    <span className="font-bold text-gba-700 tabular-nums shrink-0">{e.date}</span>
                    <span className="text-on-surface-variant">{e.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Upcoming games notice */}
        <div className="mt-6 sm:mt-8 flex items-center gap-4 p-4 sm:p-6 bg-surface-low rounded-xl border-2 border-dashed border-outline-variant">
          <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gba-700/10">
            <span className="material-symbols-outlined text-gba-700 text-xl sm:text-2xl">schedule</span>
          </div>
          <div>
            <p className="text-sm sm:text-base font-headline font-bold text-on-surface leading-tight">
              Weekly game schedules will be released soon.
            </p>
            <p className="text-[10px] sm:text-xs text-on-surface-variant mt-0.5 sm:mt-1">
              Check back closer to tip-off for matchups, tip times, and fixtures.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
