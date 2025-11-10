export default function Products() {
  return(
  <div>
    <h4 className="font-bold text-primary-main mb-4">Produits</h4>
    <ul className="space-y-2">
      <li>
        <a
          href="#"
          className="text-gray-600 text-sm hover:text-primary-main transition-colors"
        >
          Simulateur
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-600 text-sm hover:text-primary-main transition-colors"
        >
          Demande de crédit
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-600 text-sm hover:text-primary-main transition-colors"
        >
          Admin
        </a>
      </li>
    </ul>
  </div>);
}
