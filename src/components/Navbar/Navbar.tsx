import { useState } from "react";

function Navbar() {
    const navlinks: string[] = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];
    const [activeLink, setActiveLink] = useState<string>("Home");

    return (
        <div className="border-b border-neutral-100" >
            <nav className="container m-auto flex justify-between py-4">

                <div>
                    <img src="/logo.svg" alt="logo image of Dev Stack" />
                </div>


                <div className="flex items-center">
                    {navlinks.map((link: string, index: number) => (
                        <a key={index}
                            href="#"
                            className={`p-2 px-4 text-sm font-medium ${activeLink === link ? "text-primary font-semibold" : ""}`}
                            onClick={() => { setActiveLink(link) }}
                        > {link}
                        </a>
                    ))
                    }
                </div>


                <div className="flex items-center">
                    <button className="min-w-fit px-4 py-2 rounded-full text-sm font-medium cursor-pointer">Sign In</button>
                    <button className="min-w-fit px-4 py-2 rounded-full text-sm font-medium cursor-pointer bg-primary text-white">Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar