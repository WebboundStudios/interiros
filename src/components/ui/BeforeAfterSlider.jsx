import React, { useState, useRef, useCallback } from 'react';

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "ORIGINAL STATE",
  afterLabel = "TRANSFORMED INTERIOR"
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      className="relative w-full aspect-[16/9] max-h-[600px] overflow-hidden rounded-[10px] select-none bg-[#EFECE6] border border-[#E8E2D8]"
    >
      {/* Before Image (Bottom Layer) */}
      <img
        src={beforeImage}
        alt={beforeLabel}
        className="absolute inset-0 w-full h-full object-cover luxury-image-filter"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-[10px] z-10">
        {beforeLabel}
      </div>

      {/* After Image (Clipped Top Layer) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover luxury-image-filter"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-[#8C6D46] backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-[10px] z-10">
          {afterLabel}
        </div>
      </div>

      {/* Slider Divider Handle Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-2xl"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white text-[#1F1F1F] rounded-full shadow-lg flex items-center justify-center border border-[#E8E2D8]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3m0 0l3 3m-3-3h14M16 9l3 3m0 0l-3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
