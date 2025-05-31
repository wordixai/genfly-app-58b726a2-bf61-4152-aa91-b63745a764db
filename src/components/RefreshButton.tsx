import React from 'react';
import { RotateCcw } from 'lucide-react';

interface RefreshButtonProps {
  onClick?: () => void;
  ariaLabel?: string;
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({ onClick, ariaLabel }) => {
  return (
    <div
      className="aspect-4/3 sm:aspect-2/1 lg:aspect-2.5/1 min-h-[60px] max-h-[100px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:bg-gray-200"
      role="button"
      tabIndex={0}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <RotateCcw className="w-9 h-9 text-gray-600" />
    </div>
  );
};