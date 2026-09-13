import bannerStackImage from './../../assets/banner-stack.png'

function Hero() {
    return (
        <div className="container mx-auto md:min-h-screen grid gird-col-1 md:grid-cols-2 items-center mt-15 md:mt-auto">
            {/* Hero Details Column */}
            <div className="grid items-center gap-6 text-center md:text-left ">
                <h1 className="text-3xl md:text-5xl font-black text-black">
                    <div >Build Your Ideal</div>
                    <div className="w-fit mx-auto md:mx-0 bg-linear-to-r from-secondary to-[#8338E4] bg-clip-text text-transparent ">
                        Development Stack
                    </div>
                </h1>

                <p className="text-pretty">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <div className="w-fit mx-auto md:mx-0 grid grid-cols-2 gap-2 mt-8 border-red-500">
                    <button
                        className="p-2 px-3 text-sm rounded-lg bg-linear-to-r from-secondary to-primary text-white">
                        Explore Technologies
                    </button>
                    <button className="p-2 px-3 text-sm rounded-lg border border-neutral-300">Learn More</button>
                </div>
            </div>

            {/* Hero Image Column */}
            <div className="flex justify-center md:justify-end">
                <img src={bannerStackImage} alt="banner stack image" />
            </div>

        </div>
    )
}

export default Hero