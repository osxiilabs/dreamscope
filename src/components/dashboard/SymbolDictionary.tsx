import { useState } from 'react'

interface Symbol {
  id: number
  name: string
  category: string
  meaning: string
  interpretation: string
}

const SymbolDictionary = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const symbols: Symbol[] = [
    {
      id: 1,
      name: 'Flying',
      category: 'Actions',
      meaning: 'Freedom, transcendence, escape',
      interpretation: 'Flying in dreams often represents a desire for freedom, the ability to rise above problems, or a sense of liberation from constraints in your waking life.'
    },
    {
      id: 2,
      name: 'Water',
      category: 'Elements',
      meaning: 'Emotions, subconscious, cleansing',
      interpretation: 'Water symbolizes your emotional state and subconscious mind. Calm water suggests peace, while turbulent water may indicate emotional turmoil.'
    },
    {
      id: 3,
      name: 'Falling',
      category: 'Actions',
      meaning: 'Loss of control, anxiety, insecurity',
      interpretation: 'Falling dreams often reflect feelings of losing control in some aspect of your life, fear of failure, or anxiety about a situation.'
    },
    {
      id: 4,
      name: 'House',
      category: 'Places',
      meaning: 'Self, psyche, different aspects of personality',
      interpretation: 'A house represents your sense of self. Different rooms can symbolize different aspects of your personality or life experiences.'
    },
    {
      id: 5,
      name: 'Snake',
      category: 'Animals',
      meaning: 'Transformation, healing, hidden fears',
      interpretation: 'Snakes can represent transformation and renewal, but also hidden fears or threats. The context and your feelings in the dream are important.'
    },
    {
      id: 6,
      name: 'Death',
      category: 'Events',
      meaning: 'Endings, transformation, new beginnings',
      interpretation: 'Death in dreams rarely predicts actual death. Instead, it symbolizes endings, major life changes, or the conclusion of one phase before a new beginning.'
    }
  ]

  const categories = ['all', 'Actions', 'Elements', 'Places', 'Animals', 'Events']

  const filteredSymbols = symbols.filter(symbol => {
    const matchesSearch = symbol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         symbol.meaning.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || symbol.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Symbol Dictionary</h2>
        <p className="text-gray-600 mt-1">Explore the meanings of common dream symbols</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search symbols..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Symbols */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-lg font-bold text-gray-900 mb-3">🌟 Most Searched Symbols</h3>
        <div className="flex flex-wrap gap-2">
          {['Flying', 'Water', 'Falling', 'Snake', 'Death', 'House'].map((symbol) => (
            <button
              key={symbol}
              onClick={() => setSearchTerm(symbol)}
              className="px-4 py-2 bg-white text-purple-700 rounded-full text-sm font-semibold hover:shadow-md transition"
            >
              {symbol}
            </button>
          ))}
        </div>
      </div>

      {/* Symbol Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredSymbols.map((symbol) => (
          <div key={symbol.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{symbol.name}</h3>
                <span className="inline-block mt-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                  {symbol.category}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Quick Meaning:</h4>
                <p className="text-gray-600">{symbol.meaning}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Interpretation:</h4>
                <p className="text-gray-600">{symbol.interpretation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSymbols.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No symbols found matching your criteria</p>
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('all')
            }}
            className="mt-4 text-purple-600 hover:text-purple-700 font-semibold"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Help Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3">💡 How to Use the Symbol Dictionary</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">•</span>
            <span>Search for symbols that appeared in your dreams</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">•</span>
            <span>Filter by category to explore related symbols</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">•</span>
            <span>Remember that personal context matters - these are general interpretations</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">•</span>
            <span>Use insights from symbols to enhance your dream journal entries</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SymbolDictionary
