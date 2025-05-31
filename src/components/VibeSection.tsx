import React, { useState } from 'react';
import { VibeButton } from './VibeButton';
import { RefreshButton } from './RefreshButton';
import { SectionHeader } from './SectionHeader';

const vibes = [
  'Robot',
  'Cowboy',
  'Sincere',
  'Cheerleader',
  'Smooth Jazz DJ'
];

const allVibes = [
  'Robot', 'Cowboy', 'Sincere', 'Cheerleader', 'Smooth Jazz DJ',
  'Narrator', 'Pirate', 'Wizard', 'Detective', 'Teacher',
  'News Anchor', 'Comedian', 'Poet', 'Chef', 'Scientist'
];

export const VibeSection: React.FC = () => {
  const [selectedVibe, setSelectedVibe] = useState('Robot');
  const [currentVibes, setCurrentVibes] = useState(vibes);

  const handleVibeSelect = (vibeName: string) => {
    setSelectedVibe(vibeName);
  };

  const handleRefreshVibes = () => {
    const shuffled = [...allVibes].sort(() => 0.5 - Math.random());
    const newVibes = shuffled.slice(0, 5);
    setCurrentVibes(newVibes);
    if (!newVibes.includes(selectedVibe)) {
      setSelectedVibe(newVibes[0]);
    }
  };

  return (
    <div className="flex flex-1 flex-col shrink-0 mb-10">
      <SectionHeader title="Vibe" />
      <div className="flex flex-1 flex-col pt-3 rounded-md">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentVibes.map((vibe) => (
              <VibeButton
                key={vibe}
                name={vibe}
                isSelected={selectedVibe === vibe}
                onClick={() => handleVibeSelect(vibe)}
              />
            ))}
            <RefreshButton
              onClick={handleRefreshVibes}
              ariaLabel="Generate new list of vibes"
            />
          </div>
          <textarea
            id="input"
            rows={8}
            maxLength={999}
            className="w-full resize-none outline-none focus:outline-none bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-[16px] md:text-[14px]"
            required
            defaultValue="Identity: A robot

Affect: Monotone, mechanical, and neutral, reflecting the robotic nature of the customer service agent.

Tone: Efficient, direct, and formal, with a focus on delivering information clearly and without emotion.

Emotion: Neutral and impersonal, with no emotional inflection, as the robot voice is focused purely on functionality.

Pauses: Brief and purposeful, allowing for processing and separating key pieces of information, such as confirming the return and refund details.

Pronunciation: Clear, precise, and consistent, with each word spoken distinctly to ensure the customer can easily follow the automated process."
          />
        </div>
      </div>
    </div>
  );
};