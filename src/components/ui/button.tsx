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
  primary: "bg-primary-400 hover:bg-primary-400/80 text-white",
  secondary: "bg-secondary-500 hover:bg-secondary-500/80 text-white",
  tertiary: "bg-tertiary-500 hover:bg-tertiary-600 text-white",
  accent: "bg-accent-500 hover:bg-accent-500/80 text-white",
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
    "flex items-center justify-center  shadow-lg transition-all hover:scale-105";

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
