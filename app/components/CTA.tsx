"use client";

import { MessageCircle, ShieldCheck } from "lucide-react";

export default function CTA() {
  const whatsappLink = "https://wa.me/1234567890?text=Hi%20Amani%2C%20I'm%20ready%20to%20start%20my%20wellness%20journey";

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-teal-600 via-teal-700 to-sage-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to Feel Better?
        </h2>
        
        <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
          Start your conversation with Amani today. No commitment, no cost, just support when you need it.
        </p>

        {/* CTA Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-teal-700 font-bold rounded-full hover:bg-teal-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-lg"
        >
          <MessageCircle className="w-6 h-6" />
          Start Chatting on WhatsApp
        </a>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-teal-200 text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>End-to-end encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>No data shared with third parties</span>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="mt-12 text-lg italic text-teal-100 border-l-4 border-teal-400 pl-6 text-left max-w-2xl mx-auto">
          "The bravest thing you can do is begin. Amani is here when you're ready."
        </blockquote>
      </div>
    </section>
  );
}
