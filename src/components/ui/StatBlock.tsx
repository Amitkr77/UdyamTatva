import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  accentColor?: string;
  className?: string;
}

export function StatBlock({
  value,
  label,
  accentColor = "border-primary",
  className,
}: StatBlockProps) {
  return (
    <div className={cn("border-l-4 pl-4", accentColor, className)}>
      <div className="text-4xl font-black text-primary font-headline">
        {value}
      </div>
      <div className="text-sm font-bold uppercase tracking-wider text-on-surface-variant mt-1">
        {label}
      </div>
    </div>
  );
}
