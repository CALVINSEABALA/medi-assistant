"use client";

import { MessageCircle } from "lucide-react";

export default function WhyDifferent() {
  const whatsappLink = "https://wa.me/1234567890?text=Hi%20Amani%2C%20I'm%20ready%20to%20start";

  return (
    <section id="why-different" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warm-900 mb-4">
            Why It's Different
          </h2>
          <p className="text-warm-600 text-lg max-w-2xl mx-auto">
            Not just another health app. Not just a chatbot. Something genuinely new.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Apps */}
          <div className="p-8 rounded-2xl bg-warm-100">
            <h3 className="text-xl font-bold text-warm-700 mb-6 flex items-center gap-2">
              <span className="text-2xl">📱</span> Traditional Health Apps
            </h3>
            <ul className="space-y-4">
              {[
                "Download required",
                "Separate apps for physical & mental health",
                "Generic advice",
                "Another password to remember",
                "Cold, clinical interface",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-warm-600">
                  <span className="text-red-500 font-bold">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Medi Assistant */}
          <div className="p-8 rounded-2xl bg-teal-50 border-2 border-teal-200">
            <h3 className="text-xl font-bold text-teal-800 mb-6 flex items-center gap-2">
              <span className="text-2xl">💚</span> Medi Assistant with Amani
            </h3>
            <ul className="space-y-4">
              {[
                "No download needed - just WhatsApp",
                "Body & mind in one place",
                "Personalized, empathetic responses",
                "No account or password",
                "Warm, human connection",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-warm-700">
                  <span className="text-teal-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "24/7", label: "Available" },
            { number: "100%", label: "Private" },
            { number: "0", label: "Downloads Needed" },
            { number: "R0", label: "To Start" },
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl font-bold text-teal-600 mb-1">
                {stat.number}
              </div>
              <div className="text-warm-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
