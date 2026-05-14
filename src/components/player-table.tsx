import { getHeroImageUrl } from "@/utils/url-builder";

import type { PlayerData } from "@/types/match";
import type { ResourceHero } from "@/types/resource";

function PlayerTable({ playerData, heroResourcesData }: { playerData: PlayerData[], heroResourcesData: ResourceHero }) {
  return (
    <table className="w-7xl bg-red-950 text-white">
      <thead>
        <tr>
          <th className="px-2 py-2"></th>
          <th className="px-2 py-2">Player</th>
          <th className="px-2 py-2">Level</th>
          <th className="px-2 py-2">Kill</th>
          <th className="px-2 py-2">Death</th>
          <th className="px-2 py-2">Assist</th>
          <th className="px-2 py-2">GPM/XPM</th>
          <th className="px-2 py-2">Hero Damage</th>
          <th className="px-2 py-2">Tower Damage</th>
          <th className="px-2 py-2">Hero Healing</th>
        </tr>
      </thead>
      <tbody>
        {
          playerData.map(el => (
              <tr key={el.player_slot}>
                <td className="px-2 py-2"><img alt={`hero-${el.hero_id}`} src={getHeroImageUrl(heroResourcesData[el.hero_id].img)} className="max-w-15"/></td>
                <td className="px-2 py-2 text-left">{el.personaname ?? "Anonymous"}</td>
                <td className="px-2 py-4">{el.level}</td>
                <td className="px-2 py-4">{el.kills}</td>
                <td className="px-2 py-4">{el.deaths}</td>
                <td className="px-2 py-4">{el.assists}</td>
                <td className="px-2 py-4">{el.gold_per_min}/{el.xp_per_min}</td>
                <td className="px-2 py-4">{el.hero_damage}</td>
                <td className="px-2 py-4">{el.tower_damage}</td>
                <td className="px-2 py-4">{el.hero_healing}</td>
              </tr>
            )
          )
        }
      </tbody>
    </table>
  )
}

export default PlayerTable