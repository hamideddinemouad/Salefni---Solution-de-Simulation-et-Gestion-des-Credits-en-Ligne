export default function MultipleTypes() {
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
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-primary-main mb-2">
        Plusieurs Types
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Simulez tous types de crédits : automobile, consommation, immobilier et
        plus encore.
      </p>
    </div>
  );
}
