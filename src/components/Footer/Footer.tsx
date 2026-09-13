
function Footer() {
    return (
        <footer className="mt-20 px-4 border-t border-neutral-100 text-sm">
            <div className="container mx-auto ">
                <section className="grid lg:grid-cols-5 gap-10 py-20">
                    <div className="col-span-2 grid place-items-center gap-4 text-center text-pretty lg:place-items-start lg:text-start">
                        <img src="./logo.svg" alt="logo image of Dev Stack" />
                        <p>Curated tools, technologies, and resources for developers building
                            modern software.</p>
                        <div className="font-semibold flex gap-4 mt-2">
                            <a href="">GitHub</a>
                            <span className="lg:hidden">●</span>
                            <a href="">Twitter</a>
                            <span className="lg:hidden">●</span>
                            <a href="">Linkdin</a>
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-3 col-span-3">
                        <div>
                            <h1 className="text-black font-bold">PRODUCT</h1>
                            <div className="grid gap-2 mt-4">
                                <a href="">Home</a>
                                <a href="">Technologies</a>
                                <a href="">Projects</a>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-black font-bold">COMPANY</h1>
                            <div className="grid gap-2 mt-4">
                                <a href="">About</a>
                                <a href="">Contact</a>
                                <a href="">Careers</a>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-black font-bold">LEGAL</h1>
                            <div className="grid gap-2 mt-4">
                                <a href="">Privacy Policy</a>
                                <a href="">Terms of Service</a>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex justify-between py-10 pb-15 border-t border-neutral-100 text-xs">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-2">
                        <a href="#">Privecy</a>
                        <a href="#">Terms</a>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer