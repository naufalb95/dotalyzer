function Main() {
  return (
    <>
      <section className="h-screen">
        <h1 className="text-3xl font-bold underline">Dota 2 Analyzer</h1>
        <div className="flex h-50 items-center justify-center">
          <input className="border py-1 px-2 rounded-md border-white" placeholder="Input your match ID here" />
          <button className="ml-3 bg-red-950 py-1 px-2 rounded-md text-white">Find match</button>
        </div>
      </section>
    </>
  )
}

export default Main