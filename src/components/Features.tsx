const Features = () => {
  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Analysis",
      description: "Our advanced AI algorithms analyze your dreams using psychology, symbolism, and pattern recognition."
    },
    {
      icon: "📖",
      title: "Dream Journal",
      description: "Keep track of all your dreams in one place. Discover patterns and recurring themes over time."
    },
    {
      icon: "🔮",
      title: "Symbol Dictionary",
      description: "Access our comprehensive database of dream symbols and their meanings across cultures."
    },
    {
      icon: "📊",
      title: "Insights & Trends",
      description: "Get personalized insights about your dream patterns, emotions, and subconscious themes."
    },
    {
      icon: "🌙",
      title: "Sleep Tracking",
      description: "Connect your sleep data to understand how your sleep quality affects your dreams."
    },
    {
      icon: "🤝",
      title: "Community Support",
      description: "Share and discuss your dreams with a supportive community of dream enthusiasts."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Dream Exploration
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand and interpret your dreams with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
