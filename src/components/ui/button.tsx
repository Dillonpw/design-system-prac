export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonColor = "primary" | "secondary" | "tertiary" | "accent";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  className?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-[32px] px-3 py-1.5 text-sm font-content",
  md: "min-h-[40px] px-4 py-2 text-base font-content",
  lg: "min-h-[48px] px-6 py-3 text-lg font-content",
  xl: "min-h-[64px] px-12 py-4 text-xl font-title font-bold",
};

const colorClasses: Record<ButtonColor, string> = {
  primary: "bg-primary-400 hover:bg-primary-300 text-black",
  secondary: "bg-secondary-500 hover:bg-secondary-400 text-black",
  tertiary: "bg-tertiary-500 hover:bg-tertiary-400 text-black",
  accent: "bg-accent-500 hover:bg-accent-400 text-black",
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
    "flex items-center justify-center rounded-md border-2 border-black border-b-8 border-r-4 shadow-lg transition-all hover:translate-y-1 hover:border-r-2 hover:border-b-4 hover:border-t-2 active:scale-95 active:border-t-2 active:border-l-2";

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