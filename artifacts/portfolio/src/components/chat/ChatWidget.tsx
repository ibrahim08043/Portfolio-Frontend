import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { ChatMessage, ChatState } from "@/lib/types";

const ChatWidget = () => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isOpen: false,
    isLoading: false,
  });

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Suggested quick reply buttons
  const suggestions = [
    "How are you?",
    "How much do you charge for one project?",
    "What's your experience?",
    "Tell me about your React.js projects",
    "What technologies do you use?",
  ];

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (state.isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [state.isOpen]);

  const toggleChat = () => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  // Send message
  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || state.isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: messageText.trim(),
      timestamp: new Date(),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));

    setInput("");

    try {
      const history = state.messages.map(({ role, content }) => ({ role, content }));

      const response = await apiRequest<{ response: string }>(
        "https://portfoliobackend-9tgn.onrender.com/api/chat",
        {
          method: "POST",
          body: JSON.stringify({
            message: userMessage.content,
            history,
          }),
        }
      );

      if (response) {
        const aiMessage: ChatMessage = {
          role: "assistant",
          content: response.response,
          timestamp: new Date(),
        };

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, aiMessage],
          isLoading: false,
        }));
      }
    } catch (error) {
      console.error("Error sending message:", error);

      const errorMessage: ChatMessage = {
        role: "assistant",
        content: "Sorry, I couldn't process your request. Please try again later.",
        timestamp: new Date(),
      };

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isLoading: false,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReply = (text: string) => {
    sendMessage(text);
  };

  return (
    <div className="fixed bottom-7 right-7 z-50">
      {/* Toggle button */}
      <motion.button
        className="w-12 h-12 rounded-full bg-[#B5FF4D] text-[#090909] flex items-center justify-center
                   shadow-[0_4px_24px_rgba(181,255,77,0.35)] hover:bg-[#CAFF6B] transition-colors duration-200"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={toggleChat}
        aria-label={state.isOpen ? "Close chat" : "Open chat"}
      >
        {state.isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 w-80 md:w-96 h-[520px] flex flex-col overflow-hidden
                       bg-[#111] border border-[#2C2C2C] rounded shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
            style={{ borderTopColor: "#B5FF4D", borderTopWidth: "2px" }}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#2C2C2C]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#B5FF4D]/15 flex items-center justify-center">
                  <span className="font-mono text-[10px] font-bold text-[#B5FF4D]">MI</span>
                </div>
                <div>
                  <p className="text-sm font-display font-bold text-white leading-none">Muhammad Ibrahim</p>
                  <p className="text-[10px] font-mono text-[#B5FF4D] mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse inline-block" />
                    AI Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="w-7 h-7 rounded border border-[#2C2C2C] flex items-center justify-center
                           text-[#555] hover:text-white hover:border-[#444] transition-all"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {state.messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-10 h-10 rounded-full bg-[#B5FF4D]/10 flex items-center justify-center mb-3">
                    <MessageCircle className="w-5 h-5 text-[#B5FF4D]" />
                  </div>
                  <p className="text-[#EFEFEF] text-sm font-medium mb-1">Hey there! 👋</p>
                  <p className="text-[#555] text-xs leading-relaxed">
                    Ask me anything about Muhammad Ibrahim's skills, experience, or projects.
                  </p>
                </div>
              )}

              {state.messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#B5FF4D] text-[#090909] font-medium"
                        : "bg-[#1A1A1A] text-[#EFEFEF] border border-[#2C2C2C]"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {state.isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded px-3 py-2 flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 text-[#B5FF4D] animate-spin" />
                    <span className="text-xs text-[#555]">Thinking…</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Buttons - Single Horizontal Scroll Line */}
            <div className="px-4 py-3 border-t border-[#2C2C2C] bg-[#0A0A0A]">
              <div className="flex gap-2 overflow-x-auto pb-1 hide-scroll">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(suggestion)}
                    disabled={state.isLoading}
                    className="flex-shrink-0 text-xs bg-[#1A1A1A] hover:bg-[#252525] border border-[#2C2C2C] hover:border-[#B5FF4D]/40 
                               text-[#B5FF4D] px-4 py-2 rounded-full whitespace-nowrap transition-all active:scale-95 disabled:opacity-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 py-3 border-t border-[#2C2C2C]"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                className="flex-1 bg-[#1A1A1A] border border-[#2C2C2C] rounded px-3 py-2 text-sm text-white
                           placeholder-[#444] focus:border-[#B5FF4D]/40 focus:outline-none transition-colors"
                disabled={state.isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || state.isLoading}
                className={`w-9 h-9 rounded flex items-center justify-center transition-all duration-200 ${
                  input.trim() && !state.isLoading
                    ? "bg-[#B5FF4D] text-[#090909] hover:bg-[#CAFF6B]"
                    : "bg-[#1A1A1A] border border-[#2C2C2C] text-[#444] cursor-not-allowed"
                }`}
                aria-label="Send"
              >
                {state.isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;