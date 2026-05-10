'use client'

import { Sparkles } from 'lucide-react'

interface SuggestedActionsProps {
  actions: string[]
  onActionClick: (action: string) => void
}

export default function SuggestedActions({ actions, onActionClick }: SuggestedActionsProps) {
  return (
    <div className="mb-4 animate-slide-up">
      <div className="flex items-center space-x-2 mb-3">
        <Sparkles className="w-4 h-4 text-secondary drop-shadow-lg" />
        <p className="text-sm text-white font-semibold">Suggested actions:</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => onActionClick(action)}
            className="max-w-full break-words rounded-xl border-2 border-gray-700 bg-surface px-3 py-2.5 text-left text-xs font-semibold text-gray-300 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:border-accent hover:bg-accent hover:text-white hover:shadow-xl sm:px-5 sm:py-3 sm:text-sm"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  )
}



