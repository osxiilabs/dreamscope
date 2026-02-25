const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Record Your Dream",
      description: "Write down your dream as soon as you wake up. Include as many details as you can remember - emotions, colors, people, and events."
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our advanced AI processes your dream, identifying key symbols, themes, and emotional patterns using psychological frameworks."
    },
    {
      number: "03",
      title: "Get Insights",
      description: "Receive a detailed interpretation with personalized insights about what your dream might mean for your life and subconscious."
    },
    {
      number: "04",
      title: "Track Patterns",
      description: "Over time, discover recurring themes and patterns in your dreams to gain deeper self-understanding and awareness."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start interpreting your dreams in four simple steps
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 mt-24 w-0.5 h-12 bg-gradient-to-b from-purple-300 to-indigo-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Unlock Your Dreams?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are discovering the hidden meanings in their dreams every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition transform hover:scale-105 w-full sm:w-auto">
              Get Started Free
            </button>
            <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
