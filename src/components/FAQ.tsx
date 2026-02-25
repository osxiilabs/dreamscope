import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does AI-powered dream interpretation work?",
      answer: "Our AI analyzes your dream description using advanced natural language processing and a comprehensive database of dream symbols, psychological frameworks, and cultural interpretations. It identifies key themes, emotions, and symbols to provide personalized insights into what your dreams might mean."
    },
    {
      question: "Is my dream data private and secure?",
      answer: "Absolutely! We take your privacy seriously. All your dream entries are encrypted and stored securely. We never share your personal dream data with third parties. You have full control over your data and can export or delete it at any time."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no questions asked. If you cancel, you'll continue to have access to premium features until the end of your current billing period. We also offer a 14-day money-back guarantee on all paid plans."
    },
    {
      question: "How accurate are the dream interpretations?",
      answer: "Our AI has been trained on thousands of dream interpretations and psychological research, achieving a 95% user satisfaction rate. However, dream interpretation is subjective and personal. We provide insights and possibilities rather than definitive answers, encouraging you to reflect on what resonates with your personal experience."
    },
    {
      question: "Do I need to remember every detail of my dream?",
      answer: "Not at all! Even fragments or general impressions of your dreams can provide valuable insights. The more details you can remember, the more comprehensive the interpretation, but our AI is designed to work with whatever information you can provide."
    },
    {
      question: "Can I track recurring dreams and patterns?",
      answer: "Yes! Our dream journal automatically identifies recurring themes, symbols, and patterns across your dreams. The Pro and Premium plans include advanced analytics that visualize these patterns over time, helping you understand deeper trends in your subconscious."
    },
    {
      question: "Is there a mobile app available?",
      answer: "We currently offer a fully responsive web application that works beautifully on all devices. Native iOS and Android apps are in development and will be available soon. Premium subscribers will get early access to the mobile apps."
    },
    {
      question: "What makes DreamScape different from other dream apps?",
      answer: "DreamScape combines cutting-edge AI technology with psychological research and cultural wisdom. Unlike simple symbol dictionaries, we provide contextual, personalized interpretations. Plus, our community features, sleep tracking integration, and pattern recognition tools offer a comprehensive dream exploration experience."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about DreamScape
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
