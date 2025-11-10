import Legal from "./Elements/Legal";
import Products from "./Elements/Products";
import Simulation from "./Elements/Simulation";
import Support from "./Elements/Support";
// import Logo from "./Elements/Logo";
export default function Footer() {
  return (
    <footer class="bg-white border-t border-gray-200 py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <Simulation />
          <Products />
          <Legal />
          <Support />
        </div>
        <div class="border-t border-gray-200 pt-8 text-center">
          <p class="text-gray-600 text-sm">
            &copy; 2025 Salefni. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
