import openDotaClient from './open-dota-client'
import type { ResourceHero } from '@/types/resource'

export async function fetchHeroResources() {
  const { data } = await openDotaClient.get('/constants/heroes')
  return data as ResourceHero
}
