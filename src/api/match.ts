import openDotaClient from "./open-dota-client"
import type { MatchData } from "@/types/match"

export async function fetchMatch(matchId: string) {
  const cleanMatchId = matchId.trim()

  if (!cleanMatchId.length) throw new Error("Match ID can not be empty.")

  const url = "/matches/" + cleanMatchId
  const { data } = await openDotaClient.get(url)
  return data as MatchData
}