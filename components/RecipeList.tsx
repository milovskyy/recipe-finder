'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { RecipeType } from '@/types/types'
import { Button } from './ui/button'

type PropsType = {
  recipes: RecipeType[]
}

export const RecipeList = ({ recipes }: PropsType) => {
  const router = useRouter()
  return (
    <>
      <h1 className="font-bold text-2xl mb-10">Your results</h1>
      {recipes.length === 0 && (
        <h3 className="font-bold text-2xl">No recipes found</h3>
      )}
      {recipes.length > 0 && (
        <ul className="grid grid-cols-2 gap-5">
          {recipes.map(({ id, title, image }) => (
            <li
              key={id}
              className="flex flex-col items-center rounded-xl bg-stone-100 gap-2 p-3 sm:p-4 cursor-pointer text-center"
              onClick={() => router.push(`/recipes/${id}`)}
            >
              <Image
                src={image}
                alt={title}
                width={150}
                height={70}
                className="rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">{title}</h3>
            </li>
          ))}
        </ul>
      )}

      <Link href="/" className="mt-10">
        <Button>Go back home</Button>
      </Link>
    </>
  )
}
