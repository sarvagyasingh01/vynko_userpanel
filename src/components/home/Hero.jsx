import { useEffect, useState, useRef } from "react";
import API from "../../util/API"; // adjust path if needed

const AUTO_SLIDE_DELAY = 4500;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [desktopImages, setDesktopImages] = useState([]);
  const [mobileImages, setMobileImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const touchStartX = useRef(null);

  /* ---------------- FETCH BANNER ---------------- */
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await API.get("/fetch-banner");
        const banner = response.data;

        setDesktopImages((banner.desktopImage || []).map((img) => img.url));
        setMobileImages((banner.mobileImage || []).map((img) => img.url));
      } catch (error) {
        console.error("Failed to fetch banner images", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  const totalSlides = desktopImages.length;

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    if (loading || isHovered || totalSlides === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [loading, isHovered, totalSlides]);

  /* ---------------- SWIPE ---------------- */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    } else if (diff < -50) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }

    touchStartX.current = null;
  };

  /* ---------------- RENDER ---------------- */
  if (loading) {
    return (
      <div className="flex justify-center items-center py-16 space-x-1">
        {["V", "Y", "N", "K", "O"].map((letter, i) => (
          <span
            key={i}
            className="text-2xl font-bold text-gray-700 animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    );
  }

  if (totalSlides === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <style>{`
        @keyframes heroFade {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* DESKTOP */}
      <img
        key={currentSlide}
        src={desktopImages[currentSlide]}
        alt="Hero slide"
        className="w-full h-auto object-cover hidden md:block"
        style={{ animation: "heroFade 0.7s ease-in-out forwards" }}
      />

      {/* MOBILE */}
      <img
        key={`mobile-${currentSlide}`}
        src={mobileImages[currentSlide] || desktopImages[currentSlide]}
        alt="Hero slide"
        className="w-full h-auto object-cover block md:hidden"
        style={{ animation: "heroFade 0.7s ease-in-out forwards" }}
      />

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {desktopImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300
              ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
