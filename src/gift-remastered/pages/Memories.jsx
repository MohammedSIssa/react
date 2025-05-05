import PageHeader from "../components/PageHeader";
import Memory from "../components/Memory";

const memoriesData = [
  {
    title: "اليوم الأول",
    date: "2024/08/11",
    time: "2:00PM",
    story:
      "تاريخ أول يوم النا مع بعضينا، اكيد تاريخ مهم في شريط ذكرياتنا الحلو",
  },
  {
    title: "أول رسالة",
    date: "2024/09/01",
    time: "7:36PM",
    story:
      " بتذكر كيف لما قلدتك وحاولت اطعمي العصافير والحمام متلك وفشلت فشل ذريع",
  },
];

export default function Memories() {
  return (
    <div className="flex flex-col min-h-screen gap-5 p-5 w-full z-50 din">
      <PageHeader text={"Memories"} />

      <div className="w-full h-full flex flex-col z-50 gap-5">
        {memoriesData.map((memory) => (
          <Memory data={memory} key={memory.date} />
        ))}
      </div>
    </div>
  );
}
