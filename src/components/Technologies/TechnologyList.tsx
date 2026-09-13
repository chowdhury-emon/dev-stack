import { use } from "react"
import type { Technology } from "../../types/techonology.type"
import TechnologyCard from "./TechnologyCard";

interface TechnologyListProps {
    technologiesPromise: Promise<Technology[]>
    handleSelectedStack: (technology: Technology) => void
}

function TechnologyList({ technologiesPromise, handleSelectedStack }: TechnologyListProps) {
    const technologiesData = use(technologiesPromise);
    console.log(technologiesData)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 col-span-3 gap-4">
            {
                technologiesData.map((data, index) => (
                    <TechnologyCard key={index} technology={data} handleSelectedStack={handleSelectedStack} />
                ))
            }

        </div>
    )
}

export default TechnologyList