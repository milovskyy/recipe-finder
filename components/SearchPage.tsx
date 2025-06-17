'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { CUISINES } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'

function SearchPage() {
  const [selected, setSelected] = useState<string[]>([])

  const FormSchema = z.object({
    query: z.string(),
    maxReadyTime: z.string(),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query: '',
      maxReadyTime: '',
    },
  })

  const router = useRouter()

  const toggleCuisine = (checked: boolean, cuisine: string) => {
    const updated = checked
      ? [...selected, cuisine]
      : selected.filter((item) => item !== cuisine)
    setSelected(updated)
  }

  const { watch } = form
  const watchedQuery = watch('query')
  const watchedMaxReadyTime = watch('maxReadyTime')
  const isSubmitDisabled =
    !watchedQuery && !watchedMaxReadyTime && selected.length === 0

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const params = new URLSearchParams()

    if (data.query) params.append('query', data.query)
    if (selected.length > 0) params.append('cuisine', selected.join(','))
    if (data.maxReadyTime) params.append('maxReadyTime', data.maxReadyTime)

    router.push(`/recipes?${params.toString()}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 py-10 bg-stone-50 flex flex-col items-center justify-center sm:w-[600px]  w-full"
      >
        <h3 className="font-bold text-stone-700">Search for your recipe</h3>
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="min-w-[300px]">
              <FormLabel>Enter a recipe query</FormLabel>
              <FormControl>
                <Input placeholder="pasta" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="max-w-[300px]">
          <FormLabel className="mb-3">
            Please select your desired cousine
          </FormLabel>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="min-w-[300px] max-w-[300px] truncate text-left"
              >
                {selected.length > 0
                  ? selected.join(', ')
                  : 'Select cuisines...'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {CUISINES.map((cuisine) => (
                <DropdownMenuCheckboxItem
                  key={cuisine}
                  checked={selected.includes(cuisine)}
                  onCheckedChange={(checked) => toggleCuisine(checked, cuisine)}
                >
                  {cuisine}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <FormField
          control={form.control}
          name="maxReadyTime"
          render={({ field }) => (
            <FormItem className="min-w-[300px]">
              <FormLabel>Your maximum preparation time in minutes</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="30"
                  maxLength={4}
                  onKeyDown={(e) => {
                    if (['e', 'E', '+', '-', '.'].includes(e.key)) {
                      e.preventDefault()
                    }
                  }}
                  onInput={(e) => {
                    const input = e.target as HTMLInputElement
                    if (input.value.length > 4) {
                      input.value = input.value.slice(0, 4)
                      field.onChange(input.value)
                    }
                  }}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitDisabled}>
          Next
        </Button>
      </form>
    </Form>
  )
}

export default SearchPage
