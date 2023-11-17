import { Suspense } from "react"
import FlightSearch from "./components/FlightSearch"
import Flights from "./components/Flights"
import { getServerSession } from 'next-auth'
import Link from "next/link"

export default async function Home() {

  const session = await getServerSession();

  if (!session) {
    return (
      <main>
        <Link href="/login">
          <h1> Click Here to login </h1>
        </Link>
      </main>
    )
  } else if (session) {
    return (
      <main>
        <FlightSearch />
        <Suspense fallback={<div>Loading...</div>}>
          <Flights />
        </Suspense>
      </main>
    )
  }
}
