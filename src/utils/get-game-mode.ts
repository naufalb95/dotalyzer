import type { ResourceGameMode } from '@/types/resource'
import gameModeData from '@/data/game_mode.json'

export const getGameMode = (
  gameModeId: number,
  gameModes?: ResourceGameMode,
) => {
  if (!gameModes) return 'Unknown'

  const gameModeName = gameModes[gameModeId]?.name as
    | keyof typeof gameModeData
    | undefined

  if (!gameModeName) return 'Unknown'

  return gameModeData[gameModeName] || 'Unknown'
}
