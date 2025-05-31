import React from 'react';
import { Download, Share, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ActionButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-8">
      <Button
        variant="outline"
        className="flex-1 bg-gray-600 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-700"
      >
        <Download className="w-4 h-4 mr-2" />
        DOWNLOAD
      </Button>
      
      <Button
        variant="outline"
        className="flex-1 bg-gray-800 text-white border-gray-800 hover:bg-gray-900 hover:border-gray-900"
      >
        <Share className="w-4 h-4 mr-2" />
        SHARE
      </Button>
      
      <Button
        className="flex-1 bg-orange-500 text-white hover:bg-orange-600"
      >
        <Play className="w-4 h-4 mr-2" />
        PLAY
      </Button>
    </div>
  );
};