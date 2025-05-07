import ChooseClassPage from "./ChooseClass"

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-5">
        الموقع الرسمي - أ.سعيد عيسى
      </h1>
      <ChooseClassPage />
    </div>
  )
}