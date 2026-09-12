import bannerStackImage from './../../assets/banner-stack.png'

function Hero() {
    return (
        <div className="container mx-auto min-h-100 grid grid-cols-2 items-center">
            {/* Hero Details Column */}
            <div className="grid gap-6 items-center">
                <h1 className="text-6xl font-black text-black">
                    <div >Build Your Ideal</div>
                    <div className="w-fit bg-linear-to-r from-secondary to-[#8338E4] bg-clip-text text-transparent">Development Stack</div>
                </h1>

                <p className='text-balance'>
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <div className="w-fit grid grid-cols-2 gap-4 mt-8">
                    <button className="p-2 px-3 text-sm rounded-lg border-3 border-neutral-100 bg-linear-to-r from-secondary to-primary text-white">Explore Technologies</button>
                    <button className="p-2 px-3 text-sm rounded-lg border-3 border-neutral-100">Learn More</button>
                </div>
            </div>

            {/* Hero Image Column */}
            <div className="flex justify-end">
                <img src={bannerStackImage} alt="banner stack image" />
            </div>

        </div>
    )
}

export default Hero