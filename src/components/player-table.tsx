import { getHeroImageUrl } from "@/utils/url-builder";

import type { PlayerData } from "@/types/match";
import type { ResourceHero } from "@/types/resource";

function PlayerTable({ playerData, heroResourcesData }: { playerData: PlayerData[], heroResourcesData: ResourceHero }) {
  return (
    <table className="table-auto w-full bg-red-950 text-white">
      <thead>
        <tr>
          <th></th>
          <th>Player</th>
          <th>Level</th>
          <th>Kill</th>
          <th>Death</th>
          <th>Assist</th>
          <th>GPM/XPM</th>
          <th>Hero Damage</th>
          <th>Tower Damage</th>
          <th>Hero Healing</th>
        </tr>
      </thead>
      <tbody>
        {
          playerData.map(el => (
              <tr key={el.player_slot}>
                <td><img alt={`hero-${el.hero_id}`} src={getHeroImageUrl(heroResourcesData[el.hero_id].img)} className="max-w-15"/></td>
                <td className="text-left">{el.personaname ?? "Anonymous"}</td>
                <td>{el.level}</td>
                <td>{el.kills}</td>
                <td>{el.deaths}</td>
                <td>{el.assists}</td>
                <td>{el.gold_per_min}/{el.xp_per_min}</td>
                <td>{el.hero_damage}</td>
                <td>{el.tower_damage}</td>
                <td>{el.hero_healing}</td>
              </tr>
            )
          )
        }
      </tbody>
    </table>
  )
}

export default PlayerTable