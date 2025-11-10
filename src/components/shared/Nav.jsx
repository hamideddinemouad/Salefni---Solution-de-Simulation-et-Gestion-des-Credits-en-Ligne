export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary-main flex items-center justify-center text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M2 12h20M7 9.5h10v5H7z"></path>
              </svg>
            </div>
            <span className="text-xl font-bold text-primary-main">Salefni</span>
          </div>

          <div className="flex gap-3 items-center">
            <button className="px-6 py-2 border-2 border-primary-main text-primary-main font-semibold rounded-lg hover:bg-primary-light transition-colors">
              Connexion
            </button>
            <button className="px-6 py-2 bg-accent-action text-white font-semibold rounded-lg hover:bg-accent-hover transition-all hover:-translate-y-0.5 shadow-md">
              Commencer
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
