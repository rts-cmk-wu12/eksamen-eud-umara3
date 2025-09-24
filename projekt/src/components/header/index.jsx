import Link from "next/link";



export default function Header() {
    return(
        <div className="header">
        < div className="header-logo">
        <img src="./Logo (2).png" alt="header-logo" />
        </div>

        <nav className="header-nav">
            <Link href="">SwapHub</Link>
            <Link href="">Listings</Link>
            <Link href="">Community</Link>
            <Link href="">Contact</Link>
        </nav>

        <div className="auth-buttons">
            <button className="signin">signin</button>
             <button className="register">register</button>

        </div>
        </div>
    )
}