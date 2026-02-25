import { useState } from 'react'

const DreamAnalysis = () => {
  const [dreamText, setDreamText] = useState('')
  const [mood, setMood] = useState('')
  const [analyzing, setAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<any>(null)

  const handleAnalyze = () => {
    setAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis({
        summary: 'Your dream reflects a desire for freedom and escape from current constraints.',
        themes: ['Freedom', 'Transformation', 'Self-discovery'],
        symbols: [
          { symbol: 'Flying', meaning: 'Desire for freedom, overcoming obstacles, or rising above problems' },
          { symbol: 'Mountains', meaning: 'Challenges, goals, or obstacles you need to overcome' },
          { symbol: 'Sky', meaning: 'Unlimited potential, aspirations, and spiritual growth' }
        ],
        emotions: ['Joy', 'Liberation', 'Excitement'],
        interpretation: 'This dream suggests you are experiencing or seeking a breakthrough in your life. The act of flying represents your desire to transcend current limitations and reach new heights. The mountains below symbolize challenges you\'ve overcome or are currently facing. Overall, this is a positive dream indicating personal growth and the courage to pursue your aspirations.',
        recommendations: [
          'Reflect on areas in your life where you feel restricted',
          'Consider what goals or aspirations you\'ve been postponing',
          'Take small steps toward greater independence or freedom'
        ]
      })
      setAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">New Dream Analysis</h2>
        <p className="text-gray-600 mt-1">Describe your dream and get AI-powered insights</p>
      </div>

      {!analysis ? (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          {/* Dream Input */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Dream Title
              </label>
              <input
                type="text"
                placeholder="Give your dream a title..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Describe Your Dream
              </label>
              <textarea
                value={dreamText}
                onChange={(e) => setDreamText(e.target.value)}
                placeholder="Write down everything you remember about your dream... Include details about people, places, emotions, colors, and any significant events."
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none resize-none"
              />
              <p className="text-sm text-gray-500 mt-2">{dreamText.length} characters</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                How did you feel?
              </label>
              <div className="grid grid-cols-5 gap-3">
                {['😊', '😰', '🥰', '😢', '😡'].map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => setMood(emoji)}
                    className={`p-4 text-4xl rounded-lg border-2 transition ${
                      mood === emoji
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Add Tags (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., flying, water, family..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!dreamText || analyzing}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {analyzing ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing your dream...
                </span>
              ) : (
                '🔮 Analyze Dream'
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Analysis Results */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">✨</span>
              <h3 className="text-2xl font-bold text-gray-900">Dream Analysis Complete</h3>
            </div>
            <p className="text-lg text-gray-700">{analysis.summary}</p>
          </div>

          {/* Key Themes */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-4">🎯 Key Themes</h4>
            <div className="flex flex-wrap gap-2">
              {analysis.themes.map((theme: string, index: number) => (
                <span key={index} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold">
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Symbols */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-4">🔮 Symbol Meanings</h4>
            <div className="space-y-4">
              {analysis.symbols.map((item: any, index: number) => (
                <div key={index} className="border-l-4 border-purple-600 pl-4">
                  <h5 className="font-bold text-gray-900">{item.symbol}</h5>
                  <p className="text-gray-600 mt-1">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emotions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-4">💭 Emotional Landscape</h4>
            <div className="flex flex-wrap gap-2">
              {analysis.emotions.map((emotion: string, index: number) => (
                <span key={index} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold">
                  {emotion}
                </span>
              ))}
            </div>
          </div>

          {/* Interpretation */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-4">📖 Detailed Interpretation</h4>
            <p className="text-gray-700 leading-relaxed">{analysis.interpretation}</p>
          </div>

          {/* Recommendations */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-4">💡 Recommendations</h4>
            <ul className="space-y-3">
              {analysis.recommendations.map((rec: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={() => setAnalysis(null)}
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Analyze Another Dream
            </button>
            <button className="flex-1 bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
              Save to Journal
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DreamAnalysis
