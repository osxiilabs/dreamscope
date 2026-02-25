const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with dream interpretation",
      features: [
        "5 dream interpretations per month",
        "Basic dream journal",
        "Symbol dictionary access",
        "Community forum access",
        "Email support"
      ],
      highlighted: false,
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "For serious dream explorers and enthusiasts",
      features: [
        "Unlimited dream interpretations",
        "Advanced dream journal with tags",
        "Full symbol dictionary",
        "Detailed insights & analytics",
        "Sleep tracking integration",
        "Priority email support",
        "Export your dream data"
      ],
      highlighted: true,
      cta: "Start Free Trial"
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "per month",
      description: "Ultimate dream analysis experience",
      features: [
        "Everything in Pro",
        "Personal dream coach sessions",
        "Custom dream reports",
        "Advanced pattern recognition",
        "API access for developers",
        "White-label options",
        "24/7 priority support",
        "Early access to new features"
      ],
      highlighted: false,
      cta: "Contact Sales"
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple,
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your dream interpretation journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-2xl transform scale-105'
                  : 'bg-gray-50 text-gray-900'
              } transition hover:shadow-xl`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`text-lg ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-sm ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className={`w-6 h-6 mr-3 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-purple-600'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={plan.highlighted ? 'text-purple-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition transform hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:shadow-xl'
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
