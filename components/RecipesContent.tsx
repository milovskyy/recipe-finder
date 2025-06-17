import { getRecipes } from '@/utils/data-service'
import { ErrorPage } from './ErrorPage'
import { RecipeList } from './RecipeList'

type RecipesContentProps = {
  searchParams: {
    query?: string
    cuisine?: string
    maxReadyTime?: string
  }
}

export default async function RecipesContent({
  searchParams,
}: RecipesContentProps) {
  const { query, cuisine, maxReadyTime } = searchParams

  const result = await getRecipes({ query, cuisine, maxReadyTime })

  if (!result.success) {
    return <ErrorPage />
  }

  return <RecipeList recipes={result.data.results} />
}
