import { useEffect, useRef, useState } from "react";

export default function LazyImageBlock({ event }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const imgSize = event.size ? event.size : "normal"
  const imgThumbnail = event.thumbnail ? event.thumbnail : "https://i.imgur.com/jhwRHip.png"

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
    imgSize === "small"
      ? "md:max-w-[300px]"
      : imgSize === "extra-small"
      ? "md:max-w-[250px]"
      : "";

  return (
    <div
      ref={containerRef}
      className="thumbnail mb-10"
      style={{
        backgroundImage: isVisible ? `url(${imgThumbnail})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "200px", // لمنع collapse
      }}
    >
      {isVisible && (
        <img
          src={event.content}
          className={`${imgSize} ${imageSizeClass}`}
          alt=""
        />
      )}
    </div>
  );
}
