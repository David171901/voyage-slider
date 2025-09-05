import type { StatusSlide } from "../../types";

interface SlideInfoProps {
  title: string;
  subtitle: string;
  description: string;
  statusSlide: StatusSlide;
}

export default function SlideInfo({
  title,
  subtitle,
  description,
  statusSlide,
}: SlideInfoProps) {
  return (
    <div
      className="slide-info"
      data-current={statusSlide === "current" ? true : undefined}
      data-next={statusSlide === "next" ? true : undefined}
      data-previous={statusSlide === "previous" ? true : undefined}
    >
      <div className="slide-info__inner">
        <div className="slide-info--text__wrapper">
          <div data-title className="slide-info--text">
            <span>{title}</span>
          </div>
          <div data-subtitle className="slide-info--text">
            <span>{subtitle}</span>
          </div>
          <div data-description className="slide-info--text">
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
