export default function SimulationCard (){
    return(
<div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
  <div className="bg-gray-100 p-4 rounded-lg mb-6">
    <p className="text-sm text-gray-600 font-medium mb-1">Type de crédit</p>
    <p className="text-lg font-semibold text-primary-main">Crédit automobile</p>
  </div>
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-sm text-gray-600 font-medium mb-1">Montant</p>
      <p className="text-2xl font-bold text-primary-main">25 000 €</p>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-sm text-gray-600 font-medium mb-1">Durée</p>
      <p className="text-2xl font-bold text-primary-main">60 mois</p>
    </div>
  </div>
  <div className="bg-accent-action/10 border-2 border-accent-action p-4 rounded-lg">
    <p className="text-sm text-gray-600 font-medium mb-1">Mensualité estimée</p>
    <p className="text-3xl font-bold text-accent-action">456 €</p>
  </div>
</div>)
}