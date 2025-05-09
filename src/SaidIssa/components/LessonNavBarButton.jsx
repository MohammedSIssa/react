import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function LessonNavBarButton({ isOpen, setIsOpen }) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="fixed top-3 left-3 w-12 lg:hidden h-12 bg-emerald-900 rounded-full flex items-center justify-center"
    >
      {isOpen || <GiHamburgerMenu color="#fff" />}
      {isOpen && <RxCross1 color="#fff" />}
    </button>
  );
}
