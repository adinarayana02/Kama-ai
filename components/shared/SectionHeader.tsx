import { AnimatedWrapper } from "./AnimatedWrapper";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  highlightText?: string;
};

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
  highlightText,
}: SectionHeaderProps) {
  // Split the title if there's highlight text
  let titleParts: (string | JSX.Element)[] = [title];
  
  if (highlightText && title.includes(highlightText)) {
    const parts = title.split(highlightText);
    titleParts = [
      parts[0],
      <span key="highlight" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
        {highlightText}
      </span>,
      parts[1],
    ];
  }

  return (
    <AnimatedWrapper
      className={cn(
        "mb-12",
        centered ? "text-center" : "",
        className
      )}
      delay={0.1}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
        {titleParts}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mt-4">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mt-6 mb-4 rounded-full">
        &nbsp;
      </div>
    </AnimatedWrapper>
  );
}