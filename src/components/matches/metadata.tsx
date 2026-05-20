function MatchMetadata({
  matchId,
  region,
}: {
  matchId: number
  region: string
}) {
  return (
    <>
      <div className="flex-1">
        <div>
          <span className="font-bold">Match ID</span>
        </div>
        <div>
          <span>{matchId}</span>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <span className="font-bold">Region</span>
        </div>
        <div>{region}</div>
      </div>
    </>
  )
}

export default MatchMetadata
