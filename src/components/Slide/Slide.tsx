import type { StatusSlide } from "../../types";

interface SlideProps {
  image: string;
  backgroundImage: string;
  altText: string;
  statusSlide: StatusSlide;
}

//  "--dir: 0"

export default function Slide({
  image,
  backgroundImage,
  altText,
  statusSlide,
}: SlideProps) {
  return (
    <>
      <div
        className="slide"
        data-current={statusSlide === "current" ? true : undefined}
        data-next={statusSlide === "next" ? true : undefined}
        data-previous={statusSlide === "previous" ? true : undefined}
      >
        <div className="slide__inner">
          <div className="slide--image__wrapper">
            <img className="slide--image" src={image} alt={altText} />
          </div>
        </div>
      </div>
      <div
        className="slide__bg"
        style={{
          backgroundImage,
        }}
        data-current={statusSlide === "current" ? true : undefined}
        data-next={statusSlide === "next" ? true : undefined}
        data-previous={statusSlide === "previous" ? true : undefined}
      ></div>
    </>
  );
}
