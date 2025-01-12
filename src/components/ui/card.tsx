export type CardSize = "sm" | "md" | "lg" | "xl";
export type CardColor = "primary" | "secondary" | "tertiary" | "accent";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: CardSize;
  color?: CardColor;
  className?: string;
}

const sizeClasses: Record<CardSize, string> = {
  sm: "px-3 py-2 text-sm w-fit ",
  md: "px-4 py-4 text-base w-[50%] min-h-[100px]",
  lg: "px-6 py-6 text-lg w-[80%] min-h-[200px]",
  xl: "px-6 py-10 text-xl w-[95%] min-h-[400px]",
};

const colorClasses: Record<CardColor, string> = {
  primary: "bg-primary-400 text-black",
  secondary: "bg-secondary-500 text-black",
  tertiary: "bg-tertiary-500 text-black",
  accent: "bg-accent-500 text-black",
};

export function Card({
  children,
  size = "md",
  color = "primary",
  className = "",
  ...props
}: CardProps) {
  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[color];
  const baseClasses =
    "flex items-center justify-center rounded-md font-content border-2 border-black border-b-8 border-r-4 shadow-lg";

  return (
    <div
      className={`${baseClasses} ${sizeClass} ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
