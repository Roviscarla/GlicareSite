import ISvg from "@/app/models/svg.interface";

export default function IconFaq({ className }: ISvg) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="3" />

      <path
        d="M20 14v6M20 24h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
