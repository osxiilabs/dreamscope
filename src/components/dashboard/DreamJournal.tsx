import { useState } from 'react'

interface Dream {
  id: number
  title: string
  date: string
  content: string
  mood: string
  tags: string[]
  analyzed: boolean
}

const DreamJournal = () => {
  const [dreams] = useState<Dream[]>([
    {
      id: 1,
      title: 'Flying Over Mountains',
      date: '2026-02-24',
      content: 'I was soaring above snow-capped mountains, feeling completely free and weightless...',
      mood: '😊',
      tags: ['Flying', 'Mountains', 'Freedom'],
      analyzed: true
    },
    {
      id: 2,
      title: 'Lost in a Maze',
      date: '2026-02-23',
      content: 'Walking through endless corridors, searching for an exit that seemed to keep moving...',
      mood: '😰',
      tags: ['Maze', 'Lost', 'Anxiety'],
      analyzed: true
    },
    {
      id: 3,
      title: 'Meeting an Old Friend',
      date: '2026-02-22',
      content: 'Reconnected with a childhood friend in a beautiful garden filled with colorful flowers...',
      mood: '🥰',
      tags: ['Friends', 'Garden', 'Nostalgia'],
      analyzed: false
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [filterMood, setFilterMood] = useState('all')

  const filteredDreams = dreams.filter(dream => {
    const matchesSearch = dream.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dream.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMood = filterMood === 'all' || dream.mood === filterMood
    return matchesSearch && matchesMood
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Dream Journal</h2>
          <p className="text-gray-600 mt-1">Your personal collection of dreams</p>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
          + New Dream Entry
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Dreams</p>
              <p className="text-3xl font-bold text-purple-600 mt-1">{dreams.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📖</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">This Week</p>
              <p className="text-3xl font-bold text-indigo-600 mt-1">3</p>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Analyzed</p>
              <p className="text-3xl font-bold text-green-600 mt-1">2</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Streak</p>
              <p className="text-3xl font-bold text-orange-600 mt-1">7 days</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search dreams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <select
            value={filterMood}
            onChange={(e) => setFilterMood(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
          >
            <option value="all">All Moods</option>
            <option value="😊">😊 Happy</option>
            <option value="😰">😰 Anxious</option>
            <option value="🥰">🥰 Loving</option>
            <option value="😢">😢 Sad</option>
          </select>
        </div>
      </div>

      {/* Dream List */}
      <div className="space-y-4">
        {filteredDreams.map((dream) => (
          <div key={dream.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{dream.mood}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{dream.title}</h3>
                    <p className="text-sm text-gray-500">{new Date(dream.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-3 line-clamp-2">{dream.content}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {dream.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 ml-4">
                {dream.analyzed && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    ✓ Analyzed
                  </span>
                )}
                <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDreams.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No dreams found matching your criteria</p>
        </div>
      )}
    </div>
  )
}

export default DreamJournal
