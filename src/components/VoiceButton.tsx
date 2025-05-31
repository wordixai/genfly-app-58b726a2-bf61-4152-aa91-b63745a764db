import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VoiceButtonProps {
  name: string;
  isSelected?: boolean;
  hasPremium?: boolean;
  onClick?: () => void;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({
  name,
  isSelected = false,
  hasPremium = false,
  onClick
}) => {
  return (
    <div
      className={cn(
        "aspect-4/3 sm:aspect-2/1 lg:aspect-2.5/1 xl:aspect-square min-h-[60px] max-h-[100px] flex flex-col items-start justify-between relative",
        "bg-white border border-gray-200 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md",
        isSelected && "border-orange-500 bg-orange-50"
      )}
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      <span className="text-sm font-medium text-gray-900">{name}</span>
      
      {/* LED indicator */}
      <div className="absolute left-[0.93rem] bottom-[0.93rem]">
        <span className={cn(
          "w-2 h-2 rounded-full block",
          isSelected ? "bg-orange-500" : "bg-gray-300"
        )}></span>
      </div>
      
      {/* Premium star icon */}
      {hasPremium && (
        <div className="absolute right-[13px] bottom-[10.5px]">
          <Sparkles className="w-[12px] h-[12px] text-gray-600" fill="currentColor" />
        </div>
      )}
    </div>
  );
};