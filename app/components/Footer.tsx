"use client";

import { Heart, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const whatsappLink = "https://wa.me/1234567890?text=Hi%20Amani";

  return (
    <footer className="bg-warm-900 text-warm-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-teal-400" />
              <span className="text-xl font-bold text-white">
                Medi Assistant <span className="text-teal-400">with Amani</span>
              </span>
            </div>
            <p className="text-warm-400 mb-4 max-w-md">
              One assistant for your body and mind. Available 24/7 on WhatsApp, free to start, always private.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-teal-400 transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-teal-400 transition-colors">Features</a></li>
              <li><a href="#why-different" className="hover:text-teal-400 transition-colors">Why Different</a></li>
              <li><a href={whatsappLink} className="hover:text-teal-400 transition-colors">Start Chat</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@mediassistant.co.za" className="hover:text-teal-400 transition-colors">hello@mediassistant.co.za</a>
              </li>
              <li>Based in South Africa</li>
              <li>Serving globally</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-warm-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-warm-500">
          <p>© {new Date().getFullYear()} Medi Assistant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-xs text-warm-600 text-center">
          Medi Assistant provides general wellness support and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.
        </div>
      </div>
    </footer>
  );
}
