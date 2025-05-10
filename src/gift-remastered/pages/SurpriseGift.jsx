import PageHeader from "../components/PageHeader";
import GiftBox from "../components/GiftBox";

export default function SurpriseGift() {
  return (
    <div className="flex flex-col p-5 min-h-screen">
      <PageHeader text="Surprise Gift" />
      <GiftBox />
    </div>
  );
}
