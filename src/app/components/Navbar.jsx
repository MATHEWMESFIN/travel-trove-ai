import Link from "next/link"
import '../style/Navbar.css'
import Logout from "./Logout";

export default async function Navbar({ session }) {
    return (
        <header>
            <div className="container">
                <Link href="/">
                    <h1>TravelTroveAI</h1>
                </Link>
                {!session && (
                    <Link href="/login">
                        <h1>Login</h1>
                    </Link>
                )}
                {!session && (
                    <Link href="/register">
                        <h1>Register</h1>
                    </Link>
                )}
                {!!session && (
                    <Link href="/">
                        <Logout />
                    </Link>
                )}
                <Link href="/about-us">
                    <h1>About</h1>
                </Link>
            </div>
        </header>
    )
}