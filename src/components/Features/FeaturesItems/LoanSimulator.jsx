export default function LoanSimulator() {
  return (
    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all">
      <div className="w-12 h-12 rounded-lg bg-primary-main text-white flex items-center justify-center mb-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M12 2v20M2 12h20M7 9.5h10v5H7z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-primary-main mb-2">
        Simulation Rapide
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Remplissez un simple formulaire et obtenez instantanément les résultats
        : mensualité, coût total et échéancier complet.
      </p>
    </div>
  );
}
