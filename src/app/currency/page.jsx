import { getServerSession } from 'next-auth'
import Currency from "../components/currency"
import Link from "next/link"

export default async function language() {

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
      <main className="full_page">
          <Currency />
      </main>
    )
  }
}