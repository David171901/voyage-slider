import { useEffect, useState } from "react";
import "./App.css";
import Arrow from "./components/Arrow/Arrow";
import Slide from "./components/Slide/Slide";
import SlideInfo from "./components/Slide/SlideInfo";
import type { StatusSlide } from "./types";
import { CountUp } from "./components/CountUp";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [statusSlide1, setStatusSlide1] = useState<StatusSlide>("current");
  const [statusSlide2, setStatusSlide2] = useState<StatusSlide>("next");
  const [statusSlide3, setStatusSlide3] = useState<StatusSlide>("previous");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleChange = (direction: number) => {
    if (direction === 1) {
      setStatusSlide1(statusSlide2);
      setStatusSlide2(statusSlide3);
      setStatusSlide3(statusSlide1);
    } else if (direction === -1) {
      setStatusSlide1(statusSlide3);
      setStatusSlide2(statusSlide1);
      setStatusSlide3(statusSlide2);
    }
  };

  return (
    <>
      <div className="slider">
        <Arrow direction="prev" onClick={() => handleChange(1)} />

        <div className="slides__wrapper">
          <div className="slides">
            {/* <!-- slide 1 --> */}
            <Slide
              image="https://devloop01.github.io/voyage-slider/images/scotland-mountains.jpg"
              backgroundImage="url(https://devloop01.github.io/voyage-slider/images/scotland-mountains.jpg)"
              altText="Image 1"
              statusSlide={statusSlide1}
            />

            {/* <!-- slide 2 --> */}
            <Slide
              image="https://devloop01.github.io/voyage-slider/images/machu-pichu.jpg"
              backgroundImage="url(https://devloop01.github.io/voyage-slider/images/machu-pichu.jpg)"
              altText="Image 2"
              statusSlide={statusSlide2}
            />

            {/* <!-- slide 3 --> */}
            <Slide
              image="https://devloop01.github.io/voyage-slider/images/chamonix.jpg"
              backgroundImage="url(https://devloop01.github.io/voyage-slider/images/chamonix.jpg)"
              altText="Image 3"
              statusSlide={statusSlide3}
            />
          </div>
          <div className="slides--infos">
            {/* <!-- Slide Info 1 --> */}
            <SlideInfo
              title="Highlands"
              subtitle="Scotland"
              description="The mountains are calling"
              statusSlide={statusSlide1}
            />

            {/* <!-- Slide Info 2 --> */}
            <SlideInfo
              title="Machu Pichu"
              subtitle="Peru"
              description="Adventure is never far away"
              statusSlide={statusSlide2}
            />

            {/* <!-- Slide Info 3 --> */}
            <SlideInfo
              title="Chamonix"
              subtitle="France"
              description="Let your dreams come true"
              statusSlide={statusSlide3}
            />
          </div>
        </div>

        <Arrow direction="next" onClick={() => handleChange(-1)} />
      </div>

      {isLoading && (
        <div className="loader">
          <CountUp initial={0} final={100} decimals={1} duration={1000} />
        </div>
      )}

      <div className="support">
        <a href="https://twitter.com/DevLoop01" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
        <a href="https://github.com/devloop01/voyage-slider" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
      </div>
    </>
  );
}

export default App;
