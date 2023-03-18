export const categories = [
    ["Random", "🎲"],
    ["Arts & Literature", "🎨"],
    ["Film & TV", "🎥"],
    ["Food & Drink", "🍕"],
    ["General Knowledge", "❓"],
    ["Geography", "🗺️"],
    ["History", "📜"],
    ["Music", "🎵"],
    ["Science", "🧪"],
    ["Society & Culture", "👨‍👨‍👧‍👧"],
    ["Sport & Leisure", "⚽"],
  ]

export const QUESTIONS_PER_CATEGORY = 10


export const parseCategoryString = category => (
    category = category.toLowerCase().replaceAll(' ', '_').replaceAll('&', 'and')
)

const difficultyLookup = {
    'easy': 0,
    'medium': 1,
    'hard': 2
}

export const sortByDifficulty = questions => {
    questions.sort((a, b) => difficultyLookup[a.difficulty] - difficultyLookup[b.difficulty]);
}

export const fetchQuestions = async(category) => {
    const url = `https://the-trivia-api.com/api/questions?categories=${category}&limit=${QUESTIONS_PER_CATEGORY}`
    const response = await fetch(url)
    const json = await response.json()
    return json
}