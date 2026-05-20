import PlayerTable from '@/components/player-table'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { fetchMatch } from '@/api/match'
import { fetchHeroResources, fetchGameModeResources } from '@/api/resource'
import Navbar from '@/components/navbar'
import MatchHeader from '@/components/match-header'

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
  const {
    isPending: isGameModeResourcesPending,
    isError: isGameModeResourcesError,
    data: GameModeResourcesData,
    error: errorGameModeResources,
  } = useQuery({
    queryKey: ['gameMode'],
    queryFn: fetchGameModeResources,
  })

  const isPending =
    isMatchDataPending || isHeroResourcesPending || isGameModeResourcesPending
  const isError =
    isMatchDataError || isHeroResourcesError || isGameModeResourcesError
  const errorMsg =
    errorMatchData?.message ??
    errorHeroResources?.message ??
    errorGameModeResources?.message ??
    ''
  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center items-center">
        {matchId && isPending && <span>Loading match table...</span>}
        {isError && <span>Error loading match: {errorMsg}</span>}
        {matchData && heroResourcesData && (
          <div className="flex flex-col">
            <MatchHeader
              matchData={matchData}
              gameModeData={GameModeResourcesData}
            />
            <PlayerTable
              playerData={matchData.players}
              heroResourcesData={heroResourcesData}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default MatchData
