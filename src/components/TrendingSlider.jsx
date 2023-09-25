import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import TrendingSliderItems from "./TrendingSliderItems";

function TrendingSlider() {
  const [scrollX, setScrollX] = useState({
    side: "",
  });
  const scrollLeftRef = useRef();
  const handleScroll = ({ side }) => {
    setScrollX((prev) => ({ ...prev, side: side }));
  };
  useEffect(() => {
    if (scrollX.side === "right") {
      scrollLeftRef.current.scrollLeft += 240;
    } else {
      scrollLeftRef.current.scrollLeft -= 240;
    }
  }, [scrollX]);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-semibold sm:text-3xl">Trending Now</h3>
        <div className="flex items-center justify-center gap-2">
          <button
            className="flex h-10 w-10 items-center justify-center bg-black text-xl text-white"
            onClick={() => handleScroll({ side: "left" })}
          >
            <AiOutlineLeft />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center bg-black text-xl text-white"
            onClick={() => handleScroll({ side: "right" })}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>

      <div
        className="no-scrollbar flex items-center justify-start gap-4 overflow-y-hidden overflow-x-scroll scroll-smooth whitespace-nowrap"
        ref={scrollLeftRef}
      >
        <TrendingSliderItems />
      </div>
    </div>
  );
}

export default TrendingSlider;
