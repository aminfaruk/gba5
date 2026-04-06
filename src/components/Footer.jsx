export default function Footer() {
  return (
    <footer className="bg-surface-low mt-16">
      <div className="max-w-screen-2xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-body text-sm font-medium text-on-surface-variant">
          {new Date().getFullYear()} Granville Basketball Association
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Contact Us', 'Sponsorship'].map((t) => (
            <a
              key={t}
              href="#"
              className="font-body text-sm font-medium text-on-surface-variant hover:text-gba-700 transition-colors"
            >
              {t}
            </a>
          ))}
        </div>
        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-800">
          <span className="material-symbols-outlined">sports_basketball</span>
        </div>
      </div>
    </footer>
  )
}
