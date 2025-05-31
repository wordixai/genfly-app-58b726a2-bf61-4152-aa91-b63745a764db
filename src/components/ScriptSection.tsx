import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';

export const ScriptSection: React.FC = () => {
  const [script, setScript] = useState(`Greetings, customer. You have selected the option for a sneaker return. Please provide your order number.

Thank you. Verifying order. 

Your return request has been processed successfully. The sneakers will be returned to our warehouse. A refund will be issued to your original payment method within 5 to 7 business days. 

For any further assistance, press 1. To speak with a human agent, press 2. Thank you for shopping with us.`);

  return (
    <div className="flex flex-1 flex-col shrink-0 mb-10">
      <SectionHeader title="Script" />
      <div className="flex flex-1 flex-col pt-3 rounded-md">
        <div className="relative flex flex-col h-full w-full">
          <textarea
            id="prompt"
            rows={8}
            maxLength={999}
            className="w-full h-full min-h-[220px] resize-none outline-none focus:outline-none bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-[16px] md:text-[14px]"
            value={script}
            onChange={(e) => setScript(e.target.value)}
          />
          <span className="absolute bottom-3 right-4 z-10 opacity-30 hidden sm:block text-sm">
            {script.length}
          </span>
        </div>
      </div>
    </div>
  );
};