import React from 'react'
import { useNavigate } from 'react-router'

function Main() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const matchId = e.target.searchMatchId.value.trim()

    if (!matchId?.length) return <></> //TODO: Add alert for invalid/missing match id

    navigate(`/matches/${matchId}`)
  }

  return (
    <main className="flex flex-col h-full">
      <div className="w-full items-center justify-center pt-15">
        <form onSubmit={handleSubmit}>
          <input
            name="searchMatchId"
            className="border py-1 px-2 rounded-md border-white"
            placeholder="Input your match ID here"
          />
          <button className="ml-3 bg-red-500 py-1 px-2 rounded-md text-white hover:bg-red-700">
            Find match
          </button>
        </form>
      </div>
    </main>
  )
}

export default Main
