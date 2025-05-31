import React from 'react';
import { Header } from '@/components/Header';
import { VoiceSection } from '@/components/VoiceSection';
import { VibeSection } from '@/components/VibeSection';
import { ScriptSection } from '@/components/ScriptSection';
import { ActionButtons } from '@/components/ActionButtons';

const Index = () => {
  return (
    <div className="antialiased min-h-screen bg-gray-50">
      <div className="flex flex-col gap-x-3 min-h-screen px-5 pt-6 pb-32 md:pb-24 selection:bg-primary/20">
        <main className="flex-1 flex flex-col gap-x-3 w-full max-w-7xl mx-auto">
          <Header />
          
          <div className="flex flex-row">
            <VoiceSection />
          </div>
          
          <div className="flex flex-col md:flex-row gap-3">
            <VibeSection />
            <ScriptSection />
          </div>
          
          <ActionButtons />
        </main>
      </div>
    </div>
  );
};

export default Index;