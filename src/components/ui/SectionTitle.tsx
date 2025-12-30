interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignmentClasses = align === "center" ? "text-center" : "text-left";
  const lineAlignment =
    align === "center" ? "mx-auto" : "mr-auto";
  const textColor = light ? "text-white" : "text-foreground";
  const subtitleColor = light ? "text-white/80" : "text-foreground/70";

  return (
    <div className={`mb-8 sm:mb-10 desktop:mb-12 ${alignmentClasses}`}>
      <h2
        className={`text-2xl sm:text-3xl desktop:text-5xl font-bold ${textColor} mb-3 sm:mb-4 leading-tight`}
      >
        {title}
      </h2>
      <div
        className={`w-16 sm:w-20 h-1 bg-primary rounded-full ${lineAlignment} mb-3 sm:mb-4`}
      />
      {subtitle && (
        <p
          className={`text-sm sm:text-base desktop:text-xl ${subtitleColor} max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

