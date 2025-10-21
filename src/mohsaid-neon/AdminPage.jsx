import AddWeekForm from "./AddWeekForm";
import AddWeekEventForm from "./AddWeekEvent";
import UpdateWeekForm from "./UpdateWeekForm";

import "./custom.css";

export const AdminPage = () => {
  return (
    <div className="w-full min-h-dvh p-10 flex flex-col lg:flex-row gap-5 items-center justify-center bg-zinc-950 text-zinc-50">
      <AddWeekForm />
      <AddWeekEventForm />
      <UpdateWeekForm />
    </div>
  );
};
