"use client";

import { useState, useEffect } from "react";
import { User, Bot, Send } from "lucide-react";

const conversation = [
  {
    sender: "user",
    message: "Hi Amani, I've been feeling really anxious about work lately...",
    delay: 0,
  },
  {
    sender: "amani",
    message: "Hi there, I'm here for you. It takes courage to reach out. 💚",
    delay: 1000,
  },
  {
    sender: "amani",
    message: "Can you tell me more about what's been happening at work?",
    delay: 2000,
  },
  {
    sender: "user",
    message: "Deadlines are piling up and I can't sleep properly anymore.",
    delay: 4000,
  },
  {
    sender: "amani",
    message: "That sounds really stressful. Poor sleep can make everything feel harder.",
    delay: 5500,
  },
  {
    sender: "amani",
    message: "Would you like to try a quick breathing exercise to help you relax?",
    delay: 7000,
  },
  {
    sender: "user",
    message: "Yes, please. That would help.",
    delay: 9000,
  },
  {
    sender: "amani",
    message: "Great. Let's do this together. Take a deep breath in for 4 counts... hold for 4... and slowly exhale for 6. 🌿",
    delay: 10500,
  },
];

export default function DemoChat() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    conversation.forEach((msg, index) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, index]);
        if (msg.sender === "amani" && index < conversation.length - 1) {
          setShowTyping(true);
          setTimeout(() => setShowTyping(false), 800);
        }
      }, msg.delay);
    });
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-teal-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-teal-300 font-semibold tracking-wider uppercase text-sm mb-3">
            Meet Amani
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            A Conversation with Care
          </h2>
          <p className="text-teal-200 text-lg max-w-2xl mx-auto">
            See how Amani provides empathetic, judgment-free support when you need it most.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
          {/* Chat Header */}
          <div className="bg-teal-600 px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Amani</h3>
              <p className="text-teal-200 text-xs">Online now</p>
            </div>
            <div className="ml-auto flex gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto bg-gray-50">
            {conversation.map(
              (msg, index) =>
                visibleMessages.includes(index) && (
                  <div
                    key={index}
                    className={`flex gap-3 animate-slide-in ${
                      msg.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.sender === "user"
                          ? "bg-warm-200"
                          : "bg-teal-100"
                      }`}
                    >
                      {msg.sender === "user" ? (
                        <User className="w-4 h-4 text-warm-700" />
                      ) : (
                        <Bot className="w-4 h-4 text-teal-700" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.sender === "user"
                          ? "bg-teal-600 text-white rounded-br-md"
                          : "bg-white text-warm-800 shadow-sm border border-warm-200 rounded-bl-md"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                )
            )}

            {/* Typing Indicator */}
            {showTyping && (
              <div className="flex gap-3 animate-slide-in">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-teal-700" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-warm-200">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="px-4 py-3 bg-white border-t border-warm-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full bg-warm-100 text-warm-800 placeholder-warm-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                disabled
              />
              <button className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white hover:bg-teal-700 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-teal-200 mb-4">
            Ready to start your own conversation?
          </p>
          <a
            href="https://wa.me/+27768105472?text=Hi%20Amani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-900 font-semibold rounded-full hover:bg-teal-50 transition-colors"
          >
            Chat with Amani Now
          </a>
        </div>
      </div>
    </section>
  );
}
