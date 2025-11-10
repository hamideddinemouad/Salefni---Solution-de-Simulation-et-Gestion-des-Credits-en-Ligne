import Header from "./Header/Header";
import ExportPdf from "./FeaturesItems/ExportPdf";
import FollowUp from "./FeaturesItems/FollowUp";
import Free from "./FeaturesItems/Free";
import LoanSimulator from "./FeaturesItems/LoanSimulator";
import MultipleTypes from "./FeaturesItems/MultipleTypes";
import SecuredData from "./FeaturesItems/SecuredData";

export default function Features() {
  return (
  <section class="bg-white py-20">
    <div class="max-w-6xl mx-auto px-4">
      <Header />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExportPdf />
        <FollowUp />
        <Free />
        <LoanSimulator />
        <MultipleTypes />
        <SecuredData />
    </div>
    </div>
    </section>
  );
}
