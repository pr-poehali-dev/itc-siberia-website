import React from 'react';
import type { LucideProps } from 'lucide-react';
import { iconRegistry } from './icon-registry';

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const registry = iconRegistry as unknown as Record<string, React.FC<LucideProps>>;

const Icon: React.FC<IconProps> = ({ name, fallback = 'CircleAlert', ...props }) => {
  const IconComponent = registry[name] || registry[fallback];

  if (!IconComponent) {
    return <span className="text-xs text-gray-400">[icon]</span>;
  }

  return <IconComponent {...props} />;
};

export default Icon;
