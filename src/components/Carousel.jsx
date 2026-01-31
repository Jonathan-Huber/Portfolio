import { useRef, useState } from "react";

function Carousel({ images, projectTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(null);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Swipe mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextImage() : prevImage();
    startX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  };

  return (
    <>
      <div
        className="relative w-full overflow-hidden rounded-lg shadow-md"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={`Galerie d’images du projet ${projectTitle}`}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={images[currentIndex].width}
          height={images[currentIndex].height}
          className="w-full object-contain select-none"
        />

        {/* Overlays desktop */}
        <div
          className="hidden lg:block absolute top-0 left-0 h-full w-1/2 cursor-left"
          onClick={prevImage}
        />
        <div
          className="hidden lg:block absolute top-0 right-0 h-full w-1/2 cursor-right"
          onClick={nextImage}
        />

        {/* Live region pour lecteur d’écran */}
        <div className="sr-only" aria-live="polite">
          Image {currentIndex + 1} sur {images.length}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Image ${i + 1} sur ${images.length}`}
            aria-current={i === currentIndex ? "true" : "false"}
            className={`h-4 w-4 sm:h-4 sm:w-4 rounded-full transition ${
              i === currentIndex ? "bg-cyan-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
}

export default Carousel;
