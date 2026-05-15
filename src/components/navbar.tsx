import type React from "react";
import { NavLink, useNavigate } from "react-router"

function Navbar() {
  let navigate = useNavigate()

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const matchId = e.target.searchMatchId.value.trim()

    console.log("matchId", matchId)

    navigate("/matches/" + matchId)
  }

  return (
    <nav className="relative bg-white">
      <div className="flex px-2">
        <div className="navbar-logo flex-none py-3 mx-3">
          <span>{`<Dotalyzer/>`}</span>
        </div>
        <div className="navbar-menu flex justify-start w-full py-3 bg-black">
          <NavLink to="/" className="px-2">Home</NavLink>
          <NavLink to="/matches" className="px-2">Matches</NavLink>
          <NavLink to="/heroes" className="px-2">Heroes</NavLink>
        </div>
        <div className="navbar-search flex-none py-3">
          <form onSubmit={handleSubmit}>
            <input type="search" name="searchMatchId" placeholder="Input your match ID" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
