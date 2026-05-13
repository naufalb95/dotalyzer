export interface PlayerData {
  player_slot: number
  account_id?: number
  personaname: string | null
  level: number
  kills: number
  deaths: number
  assists: number
  gold_per_min: number
  xp_per_min: number
  hero_damage: number
  tower_damage: number
  hero_healing: number
}

export interface MatchData {
  players: PlayerData[]
}