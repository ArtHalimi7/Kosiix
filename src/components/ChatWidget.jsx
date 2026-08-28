import { useState, useRef, useEffect } from 'react';

const quickPrompts = [
  'Scope squad',
  'IP Peering',
  'Pricing',
  'Book call',
];

const initialMessages = [
  {
    id: 1,
    sender: 'agent',
    author: 'Marc S.',
    time: 'Online',
    text: 'Hello. I am Marc from the Kosiix solutions team in Zurich. How can we assist your technology requirements today?',
  },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      author: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const replyMessage = {
        id: Date.now() + 1,
        sender: 'agent',
        author: 'Marc S.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `Understood. I have flagged your inquiry regarding "${text.slice(0, 35)}..." for our senior team. Would you prefer a direct 15-minute briefing or follow up via email?`,
      };
      setMessages((prev) => [...prev, replyMessage]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <aside aria-label="Live concierge support" className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 select-none">
      {/* ── Chat Window (Compact Apple-like Minimalist Monochromatic UI) ── */}
      {isOpen && (
        <div
          data-lenis-prevent="true"
          className="fixed sm:absolute bottom-4 right-4 sm:bottom-0 sm:right-0 w-[calc(100vw-32px)] max-w-[340px] sm:w-[350px] h-[480px] max-h-[75vh] sm:h-[500px] bg-[#07070a] border border-white/[0.14] rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-[#050507] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center font-mono text-[0.68rem] text-white font-medium">
                  MS
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border-2 border-[#050507]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-syne font-bold text-[0.88rem] text-white tracking-tight">
                    Marc S.
                  </span>
                  <span className="font-mono text-[0.58rem] text-white/40 uppercase">
                    // Zurich
                  </span>
                </div>
                <span className="font-inter text-[0.68rem] text-white/40 block font-light">
                  Solutions Architect // Online
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/[0.04] hover:bg-white/[0.12] border border-white/10 text-white/60 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close live chat"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="1.8">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages Stream */}
          <div
            data-lenis-prevent="true"
            className="flex-1 p-4 overflow-y-auto overscroll-contain space-y-3 scroll-smooth bg-[#07070a]"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-center gap-1.5 mb-1 px-1">
                  <span className="font-mono text-[0.58rem] text-white/35 uppercase tracking-wider">
                    {msg.author}
                  </span>
                  <span className="font-mono text-[0.55rem] text-white/20">{msg.time}</span>
                </div>

                <div
                  className={`max-w-[88%] px-3.5 py-2.5 rounded-xl text-[0.8rem] font-inter leading-[1.55] ${
                    msg.sender === 'user'
                      ? 'bg-white text-black font-medium rounded-br-xs shadow-sm'
                      : 'bg-white/[0.04] text-white/90 border border-white/[0.08] rounded-bl-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-white/40 bg-white/[0.04] border border-white/[0.08] px-3 py-2 rounded-xl w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Prompts: 2x2 Compact Grid */}
          <div className="p-2.5 border-t border-white/[0.08] bg-[#050507]">
            <div className="grid grid-cols-2 gap-1.5">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/25 text-[0.68rem] font-inter text-white/70 hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer"
                >
                  <span className="line-clamp-1 leading-snug">{prompt}</span>
                  <span className="text-[10px] text-white/30 group-hover:text-white/90 transition-colors ml-1 shrink-0">
                    ↗
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#050507] border-t border-white/[0.08]">
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.12] focus-within:border-white/40 rounded-lg px-3 py-1.5 transition-colors">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-white text-[0.8rem] font-inter placeholder:text-white/30 focus:outline-none"
              />

              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className="p-1.5 rounded-md bg-white disabled:bg-white/10 text-black disabled:text-white/20 hover:bg-white/90 transition-all cursor-pointer disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3 h-3 stroke-current fill-none"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating Launcher ── */}
      {!isOpen && (
        <>
          {/* Mobile: Sleek Circular Icon-Only Launcher */}
          <button
            onClick={() => setIsOpen(true)}
            className="sm:hidden relative w-12 h-12 rounded-full bg-[#0a0b12]/90 border border-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.35)] backdrop-blur-xl flex items-center justify-center text-white active:scale-90 transition-transform cursor-pointer"
            aria-label="Open chat"
          >
            {/* Top glass reflection */}
            <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.2] to-transparent pointer-events-none rounded-t-full" />

            {/* Pulsing Beacon Badge */}
            <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#050507]" />

            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          {/* Desktop & Tablet: Full Glary Glassmorphic Pill */}
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex group relative items-center gap-3.5 px-5 py-3.5 bg-[#0a0b12]/80 hover:bg-[#12131f]/90 border border-white/25 hover:border-white/50 rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.35),0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
            aria-label="Open live architecture consultation"
          >
            {/* Glary Glass Top Reflection */}
            <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.18] to-transparent pointer-events-none rounded-t-full" />

            {/* Pulsing Beacon */}
            <div className="relative flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 relative" />
            </div>

            <span className="relative z-10 font-mono text-[0.74rem] tracking-[0.14em] uppercase text-white font-medium drop-shadow-xs group-hover:text-white transition-colors">
              Consult an Architect
            </span>

            {unreadCount > 0 && (
              <span className="relative z-10 w-4 h-4 rounded-full bg-white text-black font-mono font-bold text-[0.58rem] flex items-center justify-center -ml-1">
                {unreadCount}
              </span>
            )}

            <div className="relative z-10 w-6 h-6 rounded-full bg-white/[0.08] group-hover:bg-white/[0.18] text-white/80 group-hover:text-white flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2.2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
          </button>
        </>
      )}
    </aside>
  );
};

export default ChatWidget;
