import type React from 'react'
import { NavLink, useNavigate } from 'react-router'

function Navbar() {
  let navigate = useNavigate()

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const matchId = e.target.searchMatchId.value.trim()

    navigate('/matches/' + matchId)
  }

  return (
    <nav className="relative bg-white">
      <div className="flex px-2">
        <NavLink to="/" className="navbar-logo w-50 h-full py-3">
          <span>
            &lt;<strong>Dota</strong>lyzer /&gt;
          </span>
        </NavLink>
        <div className="navbar-menu hidden flex justify-start w-full py-3 bg-black">
          <NavLink to="/" className="px-2">
            Home
          </NavLink>
          <NavLink to="/matches" className="px-2">
            Matches
          </NavLink>
          <NavLink to="/heroes" className="px-2">
            Heroes
          </NavLink>
        </div>
        <div className="navbar-search hidden flex-none py-3">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="searchMatchId"
              placeholder="Input your match ID"
            />
            <button>Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
