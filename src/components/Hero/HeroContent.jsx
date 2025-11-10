export default function HeroContent(){
    return <div>
  <h1 className="text-5xl lg:text-6xl font-bold text-primary-main mb-6 leading-tight">
    Simulez vos crédits en quelques clics
  </h1>
  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
    Découvrez les conditions de vos crédits (auto, consommation, immobilier) et
    obtenez une estimation complète avec échéancier.
  </p>
  <div className="flex flex-col sm:flex-row gap-4">
    <button className="flex items-center justify-center gap-2 px-8 py-4 bg-accent-action text-white font-semibold rounded-lg hover:bg-accent-hover transition-all hover:-translate-y-1 shadow-lg">
      <span>Simuler maintenant</span>
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
    <button className="px-8 py-4 border-2 border-primary-main text-primary-main font-semibold rounded-lg hover:bg-primary-light transition-colors">
      En savoir plus
    </button>
  </div>
</div>
}
