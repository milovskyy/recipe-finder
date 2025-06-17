import { Suspense } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import RecipeDetailsContent from '@/components/RecipeDetailsContent'

type RecipeDetailsPageType = {
  params: { id: string }
}

export default function RecipeDetailsPage({ params }: RecipeDetailsPageType) {
  return (
    <div className="flex flex-col items-center justify-center my-15 text-center mx-3 ">
      <Suspense
        fallback={
          <p className="text-3xl font-semibold">Loading recipe details...</p>
        }
      >
        <RecipeDetailsContent id={params.id} />
      </Suspense>

      <Link href="/" className="mt-10">
        <Button>Go back home</Button>
      </Link>
    </div>
  )
}
