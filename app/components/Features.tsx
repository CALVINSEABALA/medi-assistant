"use client";

import { Activity, Brain, Stethoscope, Smile, Shield, Clock, Users, Sparkles } from "lucide-react";

const healthFeatures = [
  {
    icon: Stethoscope,
    title: "Symptom Checker",
    description: "Describe your symptoms and get guidance on next steps. Not a diagnosis, but a helpful first step.",
  },
  {
    icon: Activity,
    title: "Health Tracking",
    description: "Monitor your daily wellness metrics and see patterns over time.",
  },
  {
    icon: Shield,
    title: "Triage Support",
    description: "Know when to self-care, see a pharmacist, or visit a doctor.",
  },
];

const mentalFeatures = [
  {
    icon: Brain,
    title: "Stress Management",
    description: "Learn techniques to manage work stress, anxiety, and overwhelm.",
  },
  {
    icon: Smile,
    title: "Mood Check-ins",
    description: "Regular emotional check-ins with Amani, your empathetic companion.",
  },
  {
    icon: Sparkles,
    title: "Guided Reflection",
    description: "Journaling prompts and mindfulness exercises for mental clarity.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3">
            Comprehensive Care
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warm-900 mb-4">
            Two Ways We Help
          </h2>
          <p className="text-warm-600 text-lg max-w-2xl mx-auto">
            Whether it's a physical concern or emotional support, Medi Assistant has you covered.
          </p>
        </div>

        {/* Health Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
              <Activity className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-warm-900">Physical Health</h3>
              <p className="text-warm-600">Guidance for your body</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {healthFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-warm-200 hover:border-teal-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                  <feature.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="text-lg font-semibold text-warm-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-warm-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mental Wellness Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center">
              <Brain className="w-6 h-6 text-sage-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-warm-900">Mental Wellness</h3>
              <p className="text-warm-600">Support for your mind</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mentalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-warm-200 hover:border-sage-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center mb-4 group-hover:bg-sage-100 transition-colors">
                  <feature.icon className="w-6 h-6 text-sage-600" />
                </div>
                <h4 className="text-lg font-semibold text-warm-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-warm-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
