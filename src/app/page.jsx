import FlightSearch from "./components/FlightSearch"
import Users from "./user"

export default function Home() {
  return (
    <main>
      <Users />
      <h2>Dashboard</h2>
      <FlightSearch />
    </main>
  )
}
