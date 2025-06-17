import { Suspense } from 'react'

import RecipesContent from '@/components/RecipesContent'

type RecipesProps = {
  searchParams: {
    query?: string
    cuisine?: string
    maxReadyTime?: string
  }
}

export default function RecipesPage({ searchParams }: RecipesProps) {
  return (
    <div className="flex flex-col items-center justify-center my-15 mx-3">
      <Suspense
        fallback={<p className="text-3xl font-semibold">Loading recipes...</p>}
      >
        <RecipesContent searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
