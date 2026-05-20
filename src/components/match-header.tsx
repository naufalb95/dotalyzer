import type { MatchData } from '@/types/match'
import type { ResourceGameMode } from '@/types/resource'
import { matchDuration } from '@/utils/match-duration'
import { getGameMode } from '@/utils/get-game-mode'

function MatchHeader({
  matchData,
  gameModeData,
}: {
  matchData: MatchData
  gameModeData?: ResourceGameMode
}) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-center h-auto m-2">
        <span className="text-5xl text-green-500 font-bold">
          {matchData.radiant_score}
        </span>
      </div>
      <div className="flex flex-col m-2">
        <div>
          <span className="text-xl">
            {getGameMode(matchData.game_mode, gameModeData)}
          </span>
        </div>
        <div>
          <span className="text-xl">{matchDuration(matchData.duration)}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center h-auto m-2">
        <span className="text-5xl text-red-500 font-medium">
          {matchData.dire_score}
        </span>
      </div>
    </div>
  )
}

export default MatchHeader
