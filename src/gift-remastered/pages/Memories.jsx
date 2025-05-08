import PageHeader from "../components/PageHeader";
import Memory from "../components/Memory";

import { memories } from "./memories";

export default function Memories() {
  return (
    <div className="flex flex-col min-h-screen gap-5 p-5 w-full z-50 din">
      <PageHeader text={"Memories"} />

      <div className="w-full h-full flex flex-col z-50 gap-5">
        {memories.map((memory) => (
          <Memory data={memory} key={memory.date} />
        ))}
      </div>
    </div>
  );
}
