'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Loader2, Sparkles, Menu } from 'lucide-react'
import ChatMessage from './ChatMessage'
import SuggestedActions from './SuggestedActions'
import LeadCaptureForm from './LeadCaptureForm'
import { sendMessage, ChatMessage as ChatMessageType } from '@/lib/api'

type ChatInterfaceProps = {
  onOpenSidebar?: () => void
}

export default function ChatInterface({ onOpenSidebar }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessageType[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [suggestedActions, setSuggestedActions] = useState<string[]>([])
  const [showLeadForm, setShowLeadForm] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const suggestedPrompts = [
    "Tell me about your AI projects and capabilities",
    "Show me examples of full-stack applications you've built",
    "What technologies and stacks do you specialize in?",
    "How can VelocTech help with my project idea?",
  ]

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: ChatMessageType = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setSuggestedActions([])

    try {
      const response = await sendMessage(input, messages)
      
      const assistantMessage: ChatMessageType = {
        role: 'assistant',
        content: response.message,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
      
      if (response.suggested_actions) {
        setSuggestedActions(response.suggested_actions)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      
      const errorMessage: ChatMessageType = {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleSuggestedAction = (action: string) => {
    setInput(action)
    inputRef.current?.focus()
  }

  // Empty state with greeting
  const isEmptyChat = messages.length === 0 && !isLoading

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header Bar */}
      <header className="flex shrink-0 items-center justify-between gap-2 border-b border-gray-800 bg-surface px-3 py-3 sm:px-6 sm:py-4">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="shrink-0 rounded-lg p-2 text-white hover:bg-gray-800 lg:hidden"
            aria-label="Open sidebar menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <h2 className="truncate text-base font-semibold text-white sm:text-lg">Chat with Villi AI</h2>
            <p className="truncate text-xs text-gray-400 sm:text-sm">Your AI guide to VelocTech&apos;s portfolio</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setShowLeadForm(true)}
          className="shrink-0 rounded-lg bg-accent px-3 py-2 text-xs font-medium text-white shadow-lg transition-colors hover:bg-accent/90 sm:px-4 sm:text-sm"
        >
          Book a Call
        </button>
      </header>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Greeting Screen */}
        {isEmptyChat ? (
          <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-3 py-8 sm:px-6 sm:py-12">
            <div className="max-w-3xl text-center">
              <h1 className="mb-2 text-2xl font-bold leading-tight sm:text-4xl md:text-5xl">
                <span className="text-white">Hey, it&apos;s </span>
                <span className="text-accent">Villi AI</span>
                <span className="ml-1 sm:ml-2" aria-hidden>
                  👋
                </span>
              </h1>
              <h2 className="mb-8 text-xl font-bold text-white sm:mb-12 sm:text-3xl md:text-4xl">How can I help?</h2>

              <div className="mb-6 grid grid-cols-1 gap-3 sm:mb-8 sm:gap-4 md:grid-cols-2">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setInput(prompt)
                      inputRef.current?.focus()
                    }}
                    className="rounded-xl border-2 border-gray-700 bg-surface p-4 text-left shadow-md transition-all group hover:border-accent hover:bg-accent hover:shadow-xl sm:p-6"
                  >
                    <p className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white sm:text-base">
                      {prompt}
                    </p>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 sm:text-sm">
                <Sparkles className="w-4 h-4" />
                <p>Or type your own question below</p>
              </div>
            </div>
          </div>
        ) : (
          /* Chat Messages Area */
          <div className="flex-1 space-y-4 overflow-y-auto px-3 py-4 sm:space-y-6 sm:px-6 sm:py-6">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[min(80%,24rem)] rounded-2xl border border-gray-700 bg-surface px-3 py-3 shadow-lg sm:max-w-[80%] sm:px-4">
                  <Loader2 className="w-5 h-5 text-accent animate-spin drop-shadow-lg" />
                </div>
              </div>
            )}
            
            {/* Suggested actions - inside scrollable area */}
            {suggestedActions.length > 0 && !isLoading && (
              <div className="mt-4">
                <SuggestedActions 
                  actions={suggestedActions} 
                  onActionClick={handleSuggestedAction}
                />
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input area */}
        <div className="shrink-0 border-t border-gray-800 bg-background p-3 sm:p-6">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-gray-700 bg-surface p-3 shadow-2xl sm:p-4">
              <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about VelocTech&apos;s work..."
                  disabled={isLoading}
                  className="min-w-0 flex-1 bg-transparent text-sm font-normal text-white outline-none placeholder:text-gray-500 focus:outline-none disabled:opacity-50 sm:text-base"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="shrink-0 rounded-lg bg-accent p-2.5 shadow-lg transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:bg-gray-700 sm:p-3"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Capture Form */}
      {showLeadForm && <LeadCaptureForm onClose={() => setShowLeadForm(false)} />}
    </div>
  )
}



