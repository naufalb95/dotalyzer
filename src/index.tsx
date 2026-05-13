import { useQuery } from '@tanstack/react-query'
import { fetchMatch } from '@/api/match'
import { useState } from 'react'
import PlayerTable from '@/components/player-table'
import { fetchHeroResources } from '@/api/resource'

function Main() {
  const [inputValue, setInputValue] = useState('')
  const [matchId, setMatchId] = useState('')
  const {
    isPending: isMatchDataPending,
    isError: isMatchDataError,
    data: matchData,
    error: errorMatchData,
  } = useQuery({
    queryKey: ['match', matchId],
    queryFn: () => fetchMatch(matchId),
    enabled: matchId !== '',
  })
  const {
    isPending: isHeroResourcesPending,
    isError: isHeroResourcesError,
    data: heroResourcesData,
    error: errorHeroResources,
  } = useQuery({
    queryKey: ['heroes'],
    queryFn: fetchHeroResources,
  })

  const isPending = isMatchDataPending || isHeroResourcesPending
  const isError = isMatchDataError || isHeroResourcesError
  const errorMsg = errorMatchData?.message ?? errorHeroResources?.message ?? ''

  return (
    <section className="h-screen">
      <h1 className="text-3xl font-bold underline">Dota 2 Analyzer</h1>
      <div className="flex h-50 items-center justify-center">
        <input
          className="border py-1 px-2 rounded-md border-white"
          placeholder="Input your match ID here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="ml-3 bg-red-500 py-1 px-2 rounded-md text-white hover:bg-red-700"
          onClick={() => setMatchId(inputValue)}
        >
          Find match
        </button>
      </div>
      <div>
        {matchId && isPending && <span>Loading match table...</span>}
        {isError && <span>Error loading match: {errorMsg}</span>}
        {matchData && heroResourcesData && (
          <PlayerTable
            playerData={matchData.players}
            heroResourcesData={heroResourcesData}
          />
        )}
      </div>
    </section>
  )
}

export default Main
