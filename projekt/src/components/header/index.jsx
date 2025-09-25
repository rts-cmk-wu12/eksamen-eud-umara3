import Link from "next/link";
import "./header.scss";



export default function Header() {
    return(
        <div className="header">
        < div className="header-logo">
        <img src="./Logo (2).png" alt="header-logo" />
        </div>

        <nav className="header-nav">
            
            <Link href="/">Listings</Link>
            <Link href="#">Community</Link>
            <Link href="/contact">Contact</Link>
        </nav>

        <div className="auth-buttons">
           <Link href="/login"> <button className="signin">signin</button></Link>
             <button className="register">register</button>

        </div>
        <hr color="lightgrey" />
        </div>
    )
}