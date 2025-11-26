import { Outlet } from "react-router-dom";
import MedicalWasteNavBar from "./MedicalWasteNavBar";

export default function MedicalWasteLayout() {
  return (
    <div>
      <MedicalWasteNavBar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
