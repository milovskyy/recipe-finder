import { getRecipeInformation } from '@/utils/data-service'
import { RecipeDetails } from '@/components/RecipeDetails'
import { ErrorPage } from '@/components/ErrorPage'

type Props = {
  id: string
}

export default async function RecipeDetailsContent({ id }: Props) {
  const result = await getRecipeInformation(id)

  if (!result.success) return <ErrorPage />

  return <RecipeDetails details={result.data} />
}
