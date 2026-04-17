import { cn } from "@/lib/utils";

type BadgeVariant = "dark" | "blue" | "gold" | "white";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const badgeVariants: Record<BadgeVariant, string> = {
  dark: "bg-on-primary-fixed text-white",
  blue: "bg-primary text-white",
  gold: "bg-secondary-container text-on-secondary-container",
  white: "bg-white text-on-primary-fixed border-2 border-on-primary-fixed",
};

export function Badge({
  children,
  variant = "dark",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-4 py-1 text-xs font-black uppercase tracking-widest font-headline",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
