import Link from "next/link"
import '../style/Navbar.css'

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <Link href="/">
                    <h1>TravelTroveAI</h1>
                </Link>
                <Link href="/about-us">
                    <h1>About</h1>
                </Link>
            </div>
        </header>
    )
}