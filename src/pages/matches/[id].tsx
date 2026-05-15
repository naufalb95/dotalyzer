import PlayerTable from '@/components/player-table'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { fetchMatch } from '@/api/match'
import { fetchHeroResources } from '@/api/resource'
import Navbar from '@/components/navbar'

function MatchData() {
  const { id: matchId } = useParams()

  if (!matchId) return <span>Invalid match ID</span>

  const {
    isPending: isMatchDataPending,
    isError: isMatchDataError,
    data: matchData,
    error: errorMatchData,
  } = useQuery({
    queryKey: ['match', matchId],
    queryFn: () => fetchMatch(matchId),
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
    <>
      <Navbar />
      <div className="flex w-full justify-center items-center">
        {matchId && isPending && <span>Loading match table...</span>}
        {isError && <span>Error loading match: {errorMsg}</span>}
        {matchData && heroResourcesData && (
          <PlayerTable
            playerData={matchData.players}
            heroResourcesData={heroResourcesData}
          />
        )}
      </div>
    </>
  )
}

export default MatchData
