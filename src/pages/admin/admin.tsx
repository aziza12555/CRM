import WorkloadSection from "./cards/teachers-card";
import ChartsSection from "./_components/chart-section";

function Admin() {
  return (
    <div>
      <div className="flex-1  p-6 overflow-auto">
        <ChartsSection />
      </div>
      <WorkloadSection />
    </div>
  );
}

export default Admin;
