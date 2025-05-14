import { cn } from "@/lib/utils";

type GradientTextProps = {
  text: string;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
};

export function GradientText({
  text,
  className,
  from = "purple-500",
  via = "pink-500",
  to = "cyan-500",
  as: Component = "span",
}: GradientTextProps) {
  const gradientClasses = `text-transparent bg-clip-text bg-gradient-to-r from-${from} via-${via} to-${to}`;

  return (
    <Component className={cn(gradientClasses, className)}>
      {text}
    </Component>
  );
}