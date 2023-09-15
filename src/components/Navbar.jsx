import { Stack } from "@mui/material"
import { Link } from "react-router-dom"

import { logo } from "../utils/constants"
import { SearchBar } from './index'

function Navbar() {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: "#000", top: 0, justifyContent: 'space-between' }}>

      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      {/* Search Bar in navbar */}
      <SearchBar />
    </Stack>
  )
}

export default Navbar