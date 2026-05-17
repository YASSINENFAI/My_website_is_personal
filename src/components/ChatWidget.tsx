import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const { t, lang } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(true)
    if (messages.length === 0) {
      setMessages([{ role: 'assistant', content: t('chat_welcome') }])
    }
  }

  const handleSend = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const history = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      })

      if (!res.ok) throw new Error('Network error')

      const data = await res.json()
      let reply: string = data.reply || t('chat_error')

      const commandRegex = /\[\[CMD:(.*?)\|(.*?)\]\]/g
      reply = reply.replace(commandRegex, '').trim()

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: t('chat_error') },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      handleSend()
    }
  }

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={() => (isOpen ? setIsOpen(false) : handleOpen())}
        className="fixed bottom-6 right-6 z-[9998] w-14 h-14 rounded-full bg-vermillion text-white shadow-lg hover:shadow-[0_8px_30px_rgba(255,61,0,0.4)] transition-all flex items-center justify-center"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-[9998] w-[340px] max-h-[480px] bg-surface border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2 bg-elevated">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-bold text-bone">{t('chat_title')}</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px] max-h-[340px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                      msg.role === 'user'
                        ? 'bg-vermillion text-white'
                        : 'bg-elevated text-bone border border-white/5'
                    }`}
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-elevated border border-white/5 px-4 py-2 rounded-lg flex gap-1">
                    <span className="w-2 h-2 bg-ash rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-ash rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-ash rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-white/10 flex gap-2 bg-elevated">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={t('chat_placeholder')}
                className="flex-1 bg-void border border-white/10 text-bone text-sm px-3 py-2 rounded-md outline-none focus:border-vermillion/50 placeholder:text-ash/50"
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
                autoComplete="off"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="w-9 h-9 flex items-center justify-center bg-vermillion text-white rounded-md disabled:opacity-40 hover:bg-vermillion/80 transition-colors"
                aria-label="Send message"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
