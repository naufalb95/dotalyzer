import { matchDuration, getGameMode, getEndTime, getRegion } from '@/utils'
import MatchMetadata from '@/components/matches/metadata'

import type { MatchData } from '@/types/match'
import type { ResourceGameMode, ResourceRegion } from '@/types/resource'

function MatchHeader({
  matchData,
  gameModeData,
  regionData,
}: {
  matchData: MatchData
  gameModeData?: ResourceGameMode
  regionData?: ResourceRegion
}) {
  return (
    <div className="flex justify-between w-full h-32">
      <div className="flex-1 h-full">
        <span>Radiant Win!</span>
      </div>
      <div className="flex justify-center h-full mx-5">
        <div className="flex flex-col justify-center">
          <span className="text-5xl text-green-500 font-bold">
            {matchData.radiant_score}
          </span>
        </div>
        <div className="flex flex-col justify-center h-full px-10">
          <div>
            <span className="text-xl">
              {getGameMode(matchData.game_mode, gameModeData)}
            </span>
          </div>
          <div>
            <span className="text-xl font-bold">
              {matchDuration(matchData.duration)}
            </span>
          </div>
          <div>
            <span className="text-l font-light">
              {getEndTime(matchData.start_time)}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full p-2">
          <span className="text-5xl text-red-500 font-medium">
            {matchData.dire_score}
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center h-full">
        <MatchMetadata
          matchId={matchData.match_id}
          region={getRegion(matchData.region, regionData)}
        />
      </div>
    </div>
  )
}

export default MatchHeader
