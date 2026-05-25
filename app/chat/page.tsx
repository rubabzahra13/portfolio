'use client'

import { useState, useEffect } from 'react'
import ChatInterface from '@/components/ChatInterface'
import Sidebar from '@/components/Sidebar'
import Background from '@/components/Background'

export default function ChatPage() {
  const [mounted, setMounted] = useState(false)
  const [, setFilter] = useState('all')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const sync = () => {
      if (mq.matches) setSidebarOpen(false)
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const handleNewChat = () => {
    window.location.reload()
  }

  if (!mounted) {
    return (
      <main className="flex min-h-[100dvh] min-w-0 items-center justify-center overflow-hidden bg-background">
        <div className="h-8 w-8 animate-pulse rounded-full bg-accent/30" aria-hidden />
      </main>
    )
  }

  return (
    <main className="relative flex min-h-[100dvh] w-full min-w-0 max-w-[100vw] overflow-hidden bg-background">
      <Background />
      <div className="relative z-10 flex h-[100dvh] max-h-[100dvh] w-full min-w-0">
        {sidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            aria-label="Close navigation menu"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div
          className={`fixed inset-y-0 left-0 z-50 flex h-full w-[min(20rem,calc(100vw-2.5rem))] max-w-full shrink-0 transform border-r border-gray-800 bg-gradient-to-b from-surface via-[#1c2128] to-surface transition-transform duration-200 ease-out lg:static lg:z-auto lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <Sidebar
            onNewChat={handleNewChat}
            onFilterChange={setFilter}
            onNavigate={() => setSidebarOpen(false)}
          />
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <ChatInterface onOpenSidebar={() => setSidebarOpen(true)} />
        </div>
      </div>
    </main>
  )
}
