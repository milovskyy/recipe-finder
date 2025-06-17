type RecipesProps = {
  query?: string
  cuisine?: string
  maxReadyTime?: string
}

const API_KEY = process.env.SPOONACULAR_API_KEY

export async function getRecipeInformation(id: string) {
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`

  const res = await fetch(url, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    return { success: false, message: 'Failed to fetch recipes' }
  }

  const data = await res.json()

  return { success: true, data }
}

export async function getRecipes({
  query,
  cuisine,
  maxReadyTime,
}: RecipesProps) {
  const params = [
    query ? `query=${encodeURIComponent(query)}` : '',
    cuisine ? `cuisine=${encodeURIComponent(cuisine)}` : '',
    maxReadyTime
      ? `maxReadyTime=${encodeURIComponent(maxReadyTime.toString())}`
      : '',
  ]
    .filter(Boolean)
    .join('&')

  const url = `https://api.spoonacular.com/recipes/complexSearch?${params}&apiKey=${API_KEY}`

  const res = await fetch(url, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    return { success: false, message: 'Failed to fetch recipes' }
  }

  const data = await res.json()

  return { success: true, data }
}
