import React, { useState } from 'react';
import { VoiceButton } from './VoiceButton';
import { RandomButton } from './RandomButton';
import { SectionHeader } from './SectionHeader';

const voices = [
  { name: 'Alloy', hasPremium: false },
  { name: 'Ash', hasPremium: true },
  { name: 'Ballad', hasPremium: true },
  { name: 'Coral', hasPremium: true },
  { name: 'Echo', hasPremium: false },
  { name: 'Fable', hasPremium: false },
  { name: 'Onyx', hasPremium: false },
  { name: 'Nova', hasPremium: false },
  { name: 'Sage', hasPremium: true },
  { name: 'Shimmer', hasPremium: false },
  { name: 'Verse', hasPremium: true },
];

export const VoiceSection: React.FC = () => {
  const [selectedVoice, setSelectedVoice] = useState('Coral');

  const handleVoiceSelect = (voiceName: string) => {
    setSelectedVoice(voiceName);
  };

  const handleRandomVoice = () => {
    const randomVoice = voices[Math.floor(Math.random() * voices.length)];
    setSelectedVoice(randomVoice.name);
  };

  return (
    <div className="flex flex-1 flex-col shrink-0 mb-10">
      <SectionHeader title="Voice" />
      <div className="flex flex-1 flex-col pt-3 rounded-md">
        <div className="grid grid-cols-12 gap-3">
          {voices.map((voice) => (
            <div key={voice.name} className="col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1 relative">
              <VoiceButton
                name={voice.name}
                isSelected={selectedVoice === voice.name}
                hasPremium={voice.hasPremium}
                onClick={() => handleVoiceSelect(voice.name)}
              />
            </div>
          ))}
          <div className="col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1">
            <RandomButton
              onClick={handleRandomVoice}
              ariaLabel="Select random voice"
            />
          </div>
        </div>
      </div>
    </div>
  );
};