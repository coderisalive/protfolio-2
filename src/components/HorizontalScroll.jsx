import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HorizontalScroll = ({ children, className = '' }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative group/carousel">
      {/* Scroll Left Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950 text-white shadow-lg flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:scale-110 transition-all duration-200 border border-slate-700"
        aria-label="Scroll Left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className={`flex space-x-6 overflow-x-auto pb-4 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar ${className}`}
      >
        {children}
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950 text-white shadow-lg flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:scale-110 transition-all duration-200 border border-slate-700"
        aria-label="Scroll Right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HorizontalScroll;
