"use client";

/**
 * Static alternative to AI chatbot - provides a pre-filled ChatGPT prompt
 * that users can copy and paste into ChatGPT.
 * 
 * Use this when NEXT_PUBLIC_SHOW_CHAT=false (static deployment mode).
 */

import { useState } from 'react';

// TODO: Update for your community
const COMMUNITY_NAME = "{{COMMUNITY_NAME}}";
const STATE = "{{STATE}}";

const CHATGPT_PROMPT = `You are a helpful assistant for homeowners in ${COMMUNITY_NAME}. Help me understand my rights and obligations under our community's governing documents and ${STATE} state law.

I'll provide context about my situation, and you should:
1. Reference relevant sections of typical CC&Rs and Bylaws
2. Cite applicable ${STATE} state statutes for planned communities/HOAs
3. Explain my rights clearly and suggest appropriate next steps
4. Be balanced - acknowledge both homeowner rights and legitimate HOA authority

My question is: [PASTE YOUR QUESTION HERE]

Context about our community:
- We are a planned community in ${STATE}
- Our governing documents include CC&Rs, Bylaws, and architectural guidelines
- [Add any relevant context about your specific situation]`;

export default function ChatGPTPromptButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CHATGPT_PROMPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleOpenChatGPT = () => {
    handleCopy();
    window.open('https://chat.openai.com/', '_blank');
  };

  return (
    <div className="space-y-4">
      <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-4">
        <h3 className="font-semibold text-primary-900 dark:text-white mb-2">
          Get AI Assistance via ChatGPT
        </h3>
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">
          Click the button below to copy a pre-filled prompt and open ChatGPT. 
          Paste the prompt, then add your specific question.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleOpenChatGPT}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
            Open ChatGPT with Prompt
          </button>
          
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 px-4 py-2 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 font-medium rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
          >
            {copied ? (
              <>
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>
                Copy Prompt Only
              </>
            )}
          </button>
        </div>
      </div>
      
      <details className="text-sm">
        <summary className="cursor-pointer text-stone-600 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400">
          View prompt template
        </summary>
        <pre className="mt-2 p-3 bg-stone-100 dark:bg-stone-800 rounded text-xs overflow-x-auto whitespace-pre-wrap">
          {CHATGPT_PROMPT}
        </pre>
      </details>
    </div>
  );
}

