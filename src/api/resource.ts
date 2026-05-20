import openDotaClient from './open-dota-client'
import type { ResourceGameMode, ResourceHero } from '@/types/resource'

export async function fetchHeroResources() {
  const { data } = await openDotaClient.get('/constants/heroes')
  return data as ResourceHero
}

export async function fetchGameModeResources(): Promise<ResourceGameMode> {
  const { data } = await openDotaClient.get('/constants/game_mode')
  return data as ResourceGameMode
}
