import React from 'react';
import { Code, Moon } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">OpenAI.fm</h1>
        <p className="text-gray-600 text-sm mt-1">
          An interactive demo for developers to try the<br />
          new text-to-speech model in the OpenAI API.
        </p>
        <button className="text-blue-600 text-sm mt-2 hover:underline">
          START BUILDING →
        </button>
      </div>
      
      <div className="flex items-center gap-3">
        <Code className="w-5 h-5 text-gray-600" />
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            id="theme-toggle"
          />
          <label
            htmlFor="theme-toggle"
            className="flex items-center cursor-pointer"
          >
            <div className="relative w-10 h-6 bg-gray-300 rounded-full transition-colors">
              <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
            </div>
            <Moon className="w-4 h-4 ml-2 text-gray-600" />
          </label>
        </div>
      </div>
    </header>
  );
};