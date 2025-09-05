interface ArrowProps {
  onClick: () => void;
  direction: "prev" | "next";
}

export default function Arrow({ direction, onClick }: ArrowProps) {
  const directionClassName =
    direction === "prev"
      ? "slider--btn slider--btn__prev"
      : "slider--btn slider--btn__next";

  const path = direction === "prev" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6";

  return (
    <button className={directionClassName} onClick={onClick}>
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
        <path d={path} />
      </svg>
    </button>
  );
}
