import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex flex-row justify-between -mb-[1px] relative items-center gap-2">
      <div className="flex uppercase py-1 text-current/70 text-sm font-medium tracking-wider">
        {title}
      </div>
      <div className="flex flex-1 h-[1px] bg-foreground/8"></div>
    </div>
  );
};