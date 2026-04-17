import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shadow?: boolean;
  icon?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-on-primary-fixed transition-none font-headline font-black uppercase tracking-tighter",
  outline:
    "border-4 border-on-primary-fixed text-on-primary-fixed hover:bg-surface-container-high transition-none font-headline font-black uppercase tracking-tighter",
  ghost:
    "text-primary font-headline font-black uppercase tracking-widest border-b-4 border-primary pb-1 hover:text-on-primary-fixed transition-none",
  gold: "bg-secondary-container text-on-secondary-container hover:opacity-90 transition-none font-headline font-black uppercase tracking-tighter",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-5 text-lg",
  xl: "px-12 py-6 text-xl md:text-2xl",
};

export function Button({
  variant = "primary",
  size = "md",
  shadow = false,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        variants[variant],
        sizes[size],
        shadow && "shadow-brutal-gold btn-press",
        "inline-flex items-center gap-2 cursor-pointer",
        className
      )}
      {...props}
    >
      {icon && (
        <span className="material-symbols-outlined text-xl">{icon}</span>
      )}
      {children}
    </button>
  );
}
