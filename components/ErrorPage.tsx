export const ErrorPage = () => {
  return (
    <div className="flex  flex-col items-center justify-center gap-4 rounded-2xl bg-white py-14 px-10">
      <h1 className="text-center text-2xl font-black ">Something went wrong</h1>
      <h3 className="text-center text-xl font-black ">
        {'Recipes cannot be dowloaded :('}
      </h3>
    </div>
  )
}
