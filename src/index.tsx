import { useQuery } from "@tanstack/react-query"
import { fetchMatch } from "./api/match"
import { useState } from "react";

function Main() {
  const [inputValue, setInputValue] = useState("")
  const [matchId, setMatchId] = useState("")
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['matchId', matchId],
    queryFn: () => fetchMatch(matchId),
    enabled: matchId !== ""
  })

  return (
    <>
      <section className="h-screen">
        <h1 className="text-3xl font-bold underline">Dota 2 Analyzer</h1>
        <div className="flex h-50 items-center justify-center">
          <input
            className="border py-1 px-2 rounded-md border-white"
            placeholder="Input your match ID here"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button
            className="ml-3 bg-red-500 py-1 px-2 rounded-md text-white hover:bg-red-700"
            onClick={() => setMatchId(inputValue)}
          >Find match</button>
        </div>
        <div>
          {isPending && <span>Loading match detail...</span>}
          {isError && <span>Error loading match: {error.message}</span>}
          {data && <span>{JSON.stringify(data)}</span>}
        </div>
      </section>
    </>
  )
}

export default Main