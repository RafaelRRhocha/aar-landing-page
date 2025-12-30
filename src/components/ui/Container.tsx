import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`w-full mx-auto px-5 sm:px-8 desktop:px-12 max-w-7xl overflow-x-hidden ${className}`}
    >
      {children}
    </Component>
  );
}

