import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full py-10 flex items-center justify-center">
      <button
        onClick={scrollToTop}
        className="text-white p-3 w-fit h-fit rounded-full shadow-lg hover:brightness-125 hover:cursor-pointer transition"
        aria-label="Scroll to top"
        style={{ backgroundColor: "var(--story-border-color)"}}
      >
        <FaArrowAltCircleUp size={20} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
