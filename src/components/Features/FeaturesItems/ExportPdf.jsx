export default function ExportPdf() {
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
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-primary-main mb-2">Export PDF</h3>
      <p className="text-gray-600 leading-relaxed">
        Téléchargez vos simulations et demandes au format PDF pour les partager
        ou les consulter plus tard.
      </p>
    </div>
  );
}
