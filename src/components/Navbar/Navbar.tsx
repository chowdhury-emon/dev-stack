import { useState } from "react";
import { HiMenu } from "react-icons/hi";

function Navbar() {
    const navlinks: string[] = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];
    const [activeLink, setActiveLink] = useState<string>("Home");

    return (
        <header className="sticky top-0 z-100 border-b border-neutral-100 bg-white" >
            <div className="container m-auto flex justify-between items-center p-4">

                <HiMenu className="text-3xl md:hidden" />

                <div>
                    <img src="/logo.svg" alt="logo image of Dev Stack" />
                </div>


                <nav className="hidden md:flex items-center">
                    {navlinks.map((link: string, index: number) => (
                        <a key={index}
                            href="#"
                            className={`p-2 px-4 text-sm font-medium ${activeLink === link ? "text-primary font-semibold" : ""}`}
                            onClick={() => { setActiveLink(link) }}
                        > {link}
                        </a>
                    ))
                    }
                </nav>


                <div className="flex items-center">
                    <button className="min-w-fit px-4 py-2 rounded-full text-sm font-medium cursor-pointer">Sign In</button>
                    <button className="min-w-fit px-4 py-2 rounded-full text-sm font-medium cursor-pointer bg-primary text-white">Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar