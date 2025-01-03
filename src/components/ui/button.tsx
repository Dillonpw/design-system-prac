export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonColor = "primary" | "secondary" | "tertiary" | "accent";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  className?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-12 py-4 text-xl",
};

const colorClasses: Record<ButtonColor, string> = {
  primary: "bg-primary-400 hover:bg-primary-400/80 text-black",
  secondary: "bg-secondary-500 hover:bg-secondary-500/80 text-black",
  tertiary: "bg-tertiary-500 hover:bg-tertiary-500/80 text-black",
  accent: "bg-accent-500 hover:bg-accent-500/80 text-black",
};

export function Button({
  children,
  size = "md",
  color = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[color];
  const baseClasses =
    "flex items-center justify-center border-2 border-black border-b-8 border-r-4 shadow-lg transition-all active:scale-95 active:border-4 active:border-t-2 active:border-l-2";

  return (
    <button
      className={`${baseClasses} ${sizeClass} ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
