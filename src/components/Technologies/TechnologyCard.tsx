import { HiStar } from "react-icons/hi";
import type { Technology } from "./techonology.type"

interface TechnologyCardProps {
    technology: Technology;
}

function TechnologyCard({ technology }: TechnologyCardProps) {
    return (
        <article className="border-2 border-neutral-100 rounded-2xl p-4">
            <div className="flex justify-between">
                <img className="max-w-8" src={technology.icon} alt="" />
                <div className="bg-blue-50 text-blue-300 text-sm font-semibold border border-blue-100 rounded-full px-3 flex items-center">
                    {technology.badge}
                </div>
            </div>

            <h1 className="text-xl text-black font-bold my-4"> {technology.name}</h1>

            <p className="text-sm ">{technology.description}</p>

            <div className="flex justify-between items-center text-sm font-semibold border-t-2 border-neutral-100 py-4 my-4">
                <div className="bg-neutral-100 p-1 px-2 rounded-md">{technology.category}</div>
                <div>{technology.difficulty}</div>
                <div className="flex items-center gap-0.5">
                    <HiStar className="text-yellow-500" />
                    {technology.rating}
                </div>
            </div>
            <button className="bg-black text-white w-full p-2 rounded-lg ">Add to Stack</button>
        </article>
    )
}

export default TechnologyCard