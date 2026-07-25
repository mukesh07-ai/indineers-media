"use client"

import * as React from "react"
import { MessageCircle, Send, X } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: number
  text: string
  isUser: boolean
}

const INITIAL_MESSAGES: Message[] = [
  { id: 1, text: "Hello! Welcome to Indianeers Media.", isUser: false },
  { id: 2, text: "How can we help you today?", isUser: false },
  { id: 3, text: "I'm looking for corporate training programs.", isUser: true },
  { id: 4, text: "Great! We offer customized training solutions tailored for various industries.", isUser: false },
]

const DUMMY_REPLIES = [
  "Thanks for reaching out! Our team will look into this and get back to you.",
  "That's a great question. We have several skill development programs that fit.",
  "Could you provide a few more details so we can assist you better?",
  "We'd love to connect you with one of our experts. Please leave your email.",
  "You can find more information about this on our 'What We Do' page.",
  "Absolutely! Our vocational courses are designed exactly for that.",
]

export function ChatBubble() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen, isTyping])

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now(),
      text: inputValue.trim(),
      isUser: true,
    }

    setMessages((prev) => [...prev, newMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate auto-reply delay
    setTimeout(() => {
      const randomReply = DUMMY_REPLIES[Math.floor(Math.random() * DUMMY_REPLIES.length)]
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: randomReply, isUser: false },
      ])
      setIsTyping(false)
    }, 1500 + Math.random() * 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] sm:w-[360px] h-[450px] bg-white/70 dark:bg-slate-900/90 backdrop-blur-2xl rounded-2xl shadow-2xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/50 dark:border-white/10 overflow-hidden animate-in zoom-in-95 origin-bottom-right flex flex-col">
          {/* Header */}
          <div className="bg-navy/80 dark:bg-slate-800/80 backdrop-blur-md p-4 text-white border-b border-white/10 flex justify-between items-center shrink-0">
            <div>
              <h4 className="font-bold">IMPL Support</h4>
              <p className="text-white/70 text-xs mt-0.5">We typically reply in a few minutes.</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 custom-scrollbar">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={cn(
                  "px-4 py-2.5 text-sm rounded-2xl max-w-[85%] shadow-sm",
                  msg.isUser 
                    ? "bg-saffron text-white self-end rounded-br-sm" 
                    : "bg-white/80 dark:bg-slate-800/80 border border-white/40 dark:border-white/10 text-ink dark:text-slate-200 self-start rounded-bl-sm"
                )}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="bg-white/80 dark:bg-slate-800/80 border border-white/40 dark:border-white/10 self-start rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex gap-1 items-center h-[42px]">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="border-t border-black/5 dark:border-white/10 p-3 bg-white/50 dark:bg-slate-800/50 flex gap-2 shrink-0">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..." 
              className="flex-1 bg-white/80 dark:bg-slate-900/80 border border-black/5 dark:border-white/10 rounded-full px-4 py-2 text-sm text-ink dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-saffron"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className="w-10 h-10 bg-saffron text-white rounded-full flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-saffron/90 transition-colors"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 bg-saffron text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron",
          isOpen && "bg-navy scale-95 hover:scale-100"
        )}
        aria-label="Toggle Support Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  )
}
