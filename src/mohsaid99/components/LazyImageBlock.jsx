import { useEffect, useRef, useState } from "react";

export default function LazyImageBlock({ event }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const imageSizeClass =
    event.size === "small"
      ? "md:max-w-[300px]"
      : event.size === "extra-small"
      ? "md:max-w-[250px]"
      : event.size === "normal"
      ? "md:w-full"
      : "";

  return (
    <div
      ref={containerRef}
      className="thumbnail mb-10"
      style={{
        backgroundImage: isVisible ? `url(${event.thumbnail})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "200px", // لمنع collapse
      }}
    >
      {isVisible && (
        <img
          src={event.content}
          className={`${event.size} ${imageSizeClass}`}
          alt=""
        />
      )}
    </div>
  );
}
