interface ArrowDownProps {
  id: string;
  className: string;
}
export default function ArrowDown({ id, className }: ArrowDownProps) {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={className}
    >
      <path d="M0.5 1L4 4.5L7.5 1" stroke="white" />
    </svg>
  );
}
