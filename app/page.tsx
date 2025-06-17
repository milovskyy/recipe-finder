import SearchPage from '@/components/SearchPage'

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center h-screen px-5 my-15">
        <h1 className="font-bold text-3xl mb-4">Recipe Finder App</h1>
        <SearchPage />
      </main>
    </>
  )
}
