'use client'

import Image from 'next/image'

// No time to make proper types
/* eslint-disable */
export const RecipeDetails = ({ details }: any) => {
  const ingredientsList = details.extendedIngredients
    .map((item: any) => item.name)
    .join(', ')

  return (
    <div className="flex flex-col items-center rounded-xl bg-stone-100 gap-4 p-12 cursor-pointer max-w-[900px]">
      <h3 className="text-2xl font-semibold">{details.title}</h3>
      <Image
        src={details.image}
        alt={details.title}
        width={300}
        height={240}
        className="rounded-md object-cover"
      />
      <div className="flex flex-col gap-3 justify-center items-center">
        <h3 className="font-bold text-lg">Ingredients</h3>
        {ingredientsList}
      </div>
      <div className="font-bold text-lg">
        Prepatation time: {details.readyInMinutes}min
      </div>
    </div>
  )
}
