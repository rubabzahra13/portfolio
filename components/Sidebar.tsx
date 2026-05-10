'use client'

import { Plus, History, Code, Briefcase, Sparkles, MessageSquare, Home } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SidebarProps {
  onNewChat: () => void
  onFilterChange?: (filter: string) => void
  onNavigate?: () => void
}

export default function Sidebar({ onNewChat, onFilterChange, onNavigate }: SidebarProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects', icon: MessageSquare },
    { id: 'ai', label: 'AI Systems', icon: Sparkles },
    { id: 'fullstack', label: 'Full-Stack', icon: Code },
    { id: 'business', label: 'Business', icon: Briefcase },
  ]

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId)
    onFilterChange?.(filterId)
  }

  const close = () => onNavigate?.()

  return (
    <aside className="flex h-full w-full flex-col overflow-hidden bg-gradient-to-b from-surface via-[#1c2128] to-surface">
      <div className="border-b border-gray-800 bg-gradient-to-b from-[#1c2128] to-surface p-4 sm:p-6">
        <div className="mb-4 flex min-w-0 items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-accent/30 sm:h-12 sm:w-12">
            <Image src="/logo.svg" alt="Villi AI" fill className="object-contain p-1" sizes="48px" />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-lg font-bold text-white sm:text-xl">Villi AI</h2>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-1 text-sm text-gray-400">AI Receptionist</p>
          <p className="text-xs leading-relaxed text-gray-500">
            VelocTech&apos;s intelligent assistant
          </p>
        </div>
      </div>

      <div className="space-y-2 p-3 sm:p-4">
        <Link
          href="/"
          onClick={close}
          className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gray-800 py-2.5 text-sm font-medium text-white transition-all hover:bg-gray-700 sm:py-3 sm:text-base"
        >
          <Home className="h-5 w-5 shrink-0" />
          <span className="truncate">Back to Portfolio</span>
        </Link>

        <button
          type="button"
          onClick={() => {
            onNewChat()
            close()
          }}
          className="flex w-full items-center justify-center space-x-2 rounded-xl bg-accent py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl sm:py-3 sm:text-base"
        >
          <Plus className="h-5 w-5 shrink-0" />
          <span>New Chat</span>
        </button>
      </div>

      <div className="px-3 py-2 sm:px-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Explore</h3>
        </div>
        <div className="space-y-2">
          {filters.map((filter) => {
            const Icon = filter.icon
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => {
                  handleFilterClick(filter.id)
                  close()
                }}
                className={`flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-left transition-all sm:px-4 sm:py-2.5 ${
                  isActive
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="text-xs font-medium sm:text-sm">{filter.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-2 px-3 py-3 sm:px-4">
        <h3 className="mb-2 text-sm font-semibold text-white">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-center space-y-1 rounded-xl bg-gradient-to-br from-accent to-blue-600 p-2 shadow-lg transition-all hover:scale-[1.02] hover:from-accent/90 hover:to-blue-700 hover:shadow-xl sm:space-y-2"
          >
            <Code className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            <span className="text-center text-[10px] font-semibold text-white sm:text-xs">Tech Stack</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-center space-y-1 rounded-xl bg-gradient-to-br from-secondary to-green-600 p-2 shadow-lg transition-all hover:scale-[1.02] hover:from-secondary/90 hover:to-green-700 hover:shadow-xl sm:space-y-2"
          >
            <Briefcase className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            <span className="text-center text-[10px] font-semibold text-white sm:text-xs">Portfolio</span>
          </button>
        </div>
      </div>

      <div className="custom-scrollbar flex-1 overflow-y-auto px-3 py-3 sm:px-4">
        <div className="mb-3 flex items-center space-x-2">
          <History className="h-4 w-4 shrink-0 text-gray-400" />
          <h3 className="text-sm font-semibold text-white">History</h3>
        </div>
        <div className="space-y-2">
          <div className="text-sm italic text-gray-400">No chat history</div>
        </div>
      </div>

      <div className="border-t border-gray-800 bg-background p-3 sm:p-4">
        <Link href="/" onClick={close} className="text-xs text-gray-400 transition-colors hover:text-accent">
          Built by VelocTech Inc.
        </Link>
      </div>
    </aside>
  )
}
