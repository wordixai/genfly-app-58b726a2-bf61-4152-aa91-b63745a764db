import React from 'react';
import { cn } from '@/lib/utils';

interface VibeButtonProps {
  name: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const VibeButton: React.FC<VibeButtonProps> = ({
  name,
  isSelected = false,
  onClick
}) => {
  return (
    <div
      className={cn(
        "aspect-4/3 sm:aspect-2/1 lg:aspect-2.5/1 min-h-[60px] max-h-[100px] flex flex-col items-start justify-between relative",
        "bg-white border border-gray-200 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md",
        isSelected && "border-orange-500 bg-orange-50"
      )}
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      <span className="break-words pr-1 text-sm font-medium text-gray-900">{name}</span>
      
      {/* LED indicator */}
      <div className="absolute left-[0.93rem] bottom-[0.93rem]">
        <span className={cn(
          "w-2 h-2 rounded-full block",
          isSelected ? "bg-orange-500" : "bg-gray-300"
        )}></span>
      </div>
    </div>
  );
};