interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignmentClasses = align === 'center' ? 'text-center' : 'text-left';
  const lineAlignment = align === 'center' ? 'mx-auto' : 'mr-auto';
  const textColor = light ? 'text-white' : 'text-foreground';
  const subtitleColor = light ? 'text-white/80' : 'text-foreground/70';

  return (
    <div className={`desktop:mb-12 mb-8 sm:mb-10 ${alignmentClasses}`}>
      <h2
        className={`desktop:text-5xl text-2xl font-bold sm:text-3xl ${textColor} mb-3 leading-tight sm:mb-4`}
      >
        {title}
      </h2>
      <div
        className={`bg-primary h-1 w-16 rounded-full sm:w-20 ${lineAlignment} mb-3 sm:mb-4`}
      />
      {subtitle && (
        <p
          className={`desktop:text-xl text-sm sm:text-base ${subtitleColor} max-w-2xl leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
