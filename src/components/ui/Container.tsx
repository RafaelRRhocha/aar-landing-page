import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={`desktop:px-12 mx-auto w-full max-w-7xl overflow-x-hidden px-5 sm:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}
