import type { PlayerData } from "@/types/match";

function PlayerTable({ data }: { data: PlayerData[]}) {
  return (
    <table className="table-auto w-full bg-red-950 text-white">
      <thead>
        <tr>
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
          data.map(el => (
            <tr key={el.player_slot}>
              <td>{el.personaname ?? "Anonymous"}</td>
              <td>{el.level}</td>
              <td>{el.kills}</td>
              <td>{el.deaths}</td>
              <td>{el.assists}</td>
              <td>{el.gold_per_min}/{el.xp_per_min}</td>
              <td>{el.hero_damage}</td>
              <td>{el.tower_damage}</td>
              <td>{el.hero_healing}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default PlayerTable