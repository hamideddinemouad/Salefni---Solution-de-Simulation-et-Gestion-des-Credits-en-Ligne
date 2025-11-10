export default function Cta() {
  return (
    <section className="bg-primary-main py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à simuler votre crédit ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui ont déjà trouvé le crédit
            idéal avec Salefni.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-accent-action text-white font-semibold rounded-lg hover:bg-accent-hover transition-all hover:-translate-y-1 shadow-lg">
            <span>Commencer la simulation</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
