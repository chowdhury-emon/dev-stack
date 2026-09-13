import { HiStar } from "react-icons/hi";
import type { Technology } from "../../../types/techonology.type"

interface TechnologyCardProps {
    technology: Technology;
    selectedStacks: Technology[];
    handleAddToSelectedStack: (technology: Technology) => void
}

function TechnologyCard({ technology, handleAddToSelectedStack, selectedStacks }: TechnologyCardProps) {
    const isSelected = selectedStacks.includes(technology);

    const handleAddToStack = () => {
        handleAddToSelectedStack(technology);
    }

    return (
        <article className={`grid bg-white border border-neutral-100 rounded-2xl p-4 transition-all hover:shadow-lg/10
        ${isSelected ? "border-primary/30" : ""}`}>
            <section className="flex justify-between">
                <img className="max-w-8" src={technology.icon} alt="" />
                <div
                    style={{
                        background: `color-mix(in srgb, ${technology.color} 20%, transparent)`,
                        color: `color-mix(in srgb, ${technology.color} 80%, black)`,
                        borderColor: `color-mix(in srgb, ${technology.color} 30%, transparent)`
                    }}
                    className="text-xs font-bold border rounded-full p-1 px-2 h-fit w-fit flex items-center">
                    {technology.badge}
                </div>
            </section>

            <section>
                <h1 className="text-xl text-black font-bold my-4"> {technology.name}</h1>
                <p className="text-sm ">{technology.description}</p>

                <div className="flex justify-between items-center gap-1 text-sm font-semibold border-t border-neutral-100 py-4 my-4">
                    <div className="bg-neutral-100 p-1 px-2 rounded-md">{technology.category}</div>
                    <div>{technology.difficulty}</div>
                    <div className="flex items-center gap-0.5">
                        <HiStar className="text-yellow-500" />
                        {technology.rating}
                    </div>
                </div>
            </section>

            <button
                className="bg-black text-neutral-50 font-semibold w-full p-2 rounded-lg place-self-end  disabled:text-primary disabled:bg-primary/5 disabled:border disabled:border-primary/30"
                disabled={isSelected}
                onClick={handleAddToStack}>
                Add to Stack
            </button>
        </article>
    )
}

export default TechnologyCard