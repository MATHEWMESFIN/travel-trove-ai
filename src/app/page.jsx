import { Suspense } from "react"
import FlightSearch from "./components/FlightSearch"
import Flights from "./components/Flights"

export default function Home() {

  return (
    <main>
      <FlightSearch />
      <Suspense fallback={<div>Loading...</div>}>
        <Flights />
      </Suspense>
    </main>
  )
}
