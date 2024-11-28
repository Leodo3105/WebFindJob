import Link from "next/link"
import * as Icon from "react-bootstrap-icons"
const Footer = () => {
    return (
        <>
            <footer className="flex items-center justify-between flex-shrink-0 p-4 border-t max-h-14 bg-white">
                <p className="text-xs">© {new Date().getFullYear()} All Rights Reserved </p>
                <div className="text-xs">
                    Made by
                    <span>&nbsp;</span>
                    <Link href="#">ImSaifun</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer