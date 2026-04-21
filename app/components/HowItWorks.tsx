"use client";

import { Smartphone, MessageSquare, Heart, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Open WhatsApp",
    description: "No downloads. No sign-ups. Just open WhatsApp on your phone.",
    color: "teal",
  },
  {
    icon: MessageSquare,
    title: "Start a Chat",
    description: "Send 'Hi Amani' to begin your health and wellness journey.",
    color: "sage",
  },
  {
    icon: Heart,
    title: "Get Support",
    description: "Share how you're feeling. Amani listens and guides you.",
    color: "teal",
  },
  {
    icon: Sparkles,
    title: "Feel Better",
    description: "Receive personalized guidance for your body and mind.",
    color: "sage",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3">
            Simple & Easy
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warm-900 mb-4">
            How It Works
          </h2>
          <p className="text-warm-600 text-lg max-w-2xl mx-auto">
            Getting support has never been easier. Four simple steps to a healthier you.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative text-center p-6 rounded-2xl bg-warm-50 hover:bg-teal-50 transition-colors duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                step.color === "teal" ? "bg-teal-100 text-teal-600" : "bg-sage-100 text-sage-600"
              } group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-warm-900 mb-2">
                {step.title}
              </h3>
              <p className="text-warm-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
