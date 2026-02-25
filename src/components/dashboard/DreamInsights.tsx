const DreamInsights = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dream Insights</h2>
        <p className="text-gray-600 mt-1">Discover patterns and trends in your dreams</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
          <h3 className="text-lg font-semibold mb-2">Most Common Theme</h3>
          <p className="text-3xl font-bold mb-1">Flying</p>
          <p className="text-purple-100">Appeared in 8 dreams</p>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-xl text-white">
          <h3 className="text-lg font-semibold mb-2">Dominant Emotion</h3>
          <p className="text-3xl font-bold mb-1">Joy 😊</p>
          <p className="text-indigo-100">65% of dreams</p>
        </div>
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-xl text-white">
          <h3 className="text-lg font-semibold mb-2">Dream Frequency</h3>
          <p className="text-3xl font-bold mb-1">5.2/week</p>
          <p className="text-pink-100">Above average</p>
        </div>
      </div>

      {/* Recurring Themes */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🔄 Recurring Themes</h3>
        <div className="space-y-4">
          {[
            { theme: 'Flying', count: 8, percentage: 40 },
            { theme: 'Water', count: 6, percentage: 30 },
            { theme: 'Family', count: 4, percentage: 20 },
            { theme: 'Travel', count: 2, percentage: 10 }
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-900">{item.theme}</span>
                <span className="text-gray-600">{item.count} dreams</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emotional Patterns */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">💭 Emotional Patterns</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { emoji: '😊', label: 'Happy', count: 13 },
            { emoji: '😰', label: 'Anxious', count: 5 },
            { emoji: '🥰', label: 'Loving', count: 8 },
            { emoji: '😢', label: 'Sad', count: 2 },
            { emoji: '😡', label: 'Angry', count: 1 }
          ].map((emotion, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-2">{emotion.emoji}</div>
              <div className="font-semibold text-gray-900">{emotion.label}</div>
              <div className="text-sm text-gray-600">{emotion.count} times</div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📅 Weekly Dream Activity</h3>
        <div className="grid grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-gray-600 mb-2">{day}</div>
              <div className={`h-20 rounded-lg ${
                index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-400'
              }`}></div>
              <div className="text-xs text-gray-600 mt-1">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights & Recommendations */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Personalized Insights</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">•</span>
            <p className="text-gray-700">Your dreams show a strong desire for freedom and exploration. Consider pursuing new experiences.</p>
          </div>
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">•</span>
            <p className="text-gray-700">Water appears frequently in your dreams, suggesting emotional processing and cleansing.</p>
          </div>
          <div className="flex items-start">
            <span className="text-purple-600 mr-2">•</span>
            <p className="text-gray-700">Your dream recall is excellent! Keep maintaining your dream journal habit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DreamInsights
