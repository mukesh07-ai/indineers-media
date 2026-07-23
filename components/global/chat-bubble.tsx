"use client"

import * as React from "react"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function ChatBubble() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden animate-in zoom-in-95 origin-bottom-right">
          <div className="bg-navy p-4 text-white">
            <h4 className="font-bold">IMPL Support</h4>
            <p className="text-white/70 text-sm">We typically reply in a few minutes.</p>
          </div>
          <div className="p-4 h-64 flex flex-col">
            <div className="flex-1">
              <div className="bg-offwhite rounded-lg p-3 text-sm text-ink mb-4 w-11/12">
                Hello! How can we help you today? Are you a candidate, corporate, or institution?
              </div>
            </div>
            <div className="mt-auto border-t pt-3 flex gap-2">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 bg-offwhite border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-saffron"
              />
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 bg-saffron text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron",
          isOpen && "bg-navy"
        )}
        aria-label="Toggle Support Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}
