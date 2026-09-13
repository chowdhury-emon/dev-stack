import { use } from "react"
import type { Technology } from "../../../types/techonology.type"
import TechnologyCard from "./TechnologyCard";

interface TechnologyListProps {
    technologiesPromise: Promise<Technology[]>
    selectedStacks: Technology[];
    handleAddToSelectedStack: (technology: Technology) => void;
}

function TechnologyList({ technologiesPromise, selectedStacks, handleAddToSelectedStack }: TechnologyListProps) {
    const technologiesData = use(technologiesPromise);
    console.log(technologiesData)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:col-span-4 xl:col-span-3  gap-4">
            {
                technologiesData.map((data, index) => (
                    <TechnologyCard
                        key={index}
                        technology={data}
                        selectedStacks={selectedStacks}
                        handleAddToSelectedStack={handleAddToSelectedStack} />
                ))
            }

        </div>
    )
}

export default TechnologyList