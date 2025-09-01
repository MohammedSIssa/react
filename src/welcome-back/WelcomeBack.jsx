import Card from "./Card";

function WelcomeBack() {
  return (
    <div className="flex flex-col gap-10 h-dvh bg-zinc-900 text-zinc-200 p-10">
      <p className="text-4xl font-serif">Hello, My Name is Mohamed</p>
      <div className="flex w-full gap-4">
        <Card title={"React"} details={"lorem ipsum testing testing :/"} />
        <Card title={"NextJS"} details={"lorem ipsum testing testing :/"} />
        <Card title={"Express"} details={"lorem ipsum testing testing :/"} />
        <Card title={"PostgreSQL"} details={"lorem ipsum testing testing :/"} />
      </div>
    </div>
  );
}

export default WelcomeBack;
