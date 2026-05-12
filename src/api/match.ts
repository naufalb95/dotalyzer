import openDotaClient from "./open-dota-client"

export async function fetchMatch(matchId: string) {
  const cleanMatchId = matchId.trim()

  if (!matchId.length) return new Error("Match ID can not be empty.")
    
  const url = "matches/" + cleanMatchId
  return await openDotaClient.get(url)
}