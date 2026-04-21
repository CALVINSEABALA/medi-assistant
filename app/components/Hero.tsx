"use client";

import { MessageCircle, Heart, Shield } from "lucide-react";

export default function Hero() {
  const whatsappLink = "https://wa.me/1234567890?text=Hi%20Amani%2C%20I'd%20like%20to%20learn%20more%20about%20Medi%20Assistant";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-warm-50 to-sage-50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              Available 24/7 on WhatsApp
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            <span className="text-warm-900">Medi Assistant</span>
            <br />
            <span className="text-teal-600">with Amani</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-warm-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            One assistant for your <span className="text-teal-600 font-semibold">body</span> and{" "}
            <span className="text-sage-600 font-semibold">mind</span> — available instantly on WhatsApp.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 text-warm-600 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-teal-500" />
              <span className="text-sm font-medium">Private & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-sage-500" />
              <span className="text-sm font-medium">Empathetic Support</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-teal-500" />
              <span className="text-sm font-medium">Instant Responses</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25 hover:-translate-y-1 whatsapp-pulse"
            >
              <MessageCircle className="w-6 h-6" />
              Start on WhatsApp
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-warm-300 text-warm-700 hover:border-teal-500 hover:text-teal-600 font-semibold rounded-full transition-all duration-300"
            >
              See How It Works
            </a>
          </div>

          {/* Trust indicators */}
          <p className="mt-8 text-sm text-warm-500 animate-fade-in-up">
            Free to start • No app download needed • End-to-end encrypted
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 whatsapp-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
    </section>
  );
}
