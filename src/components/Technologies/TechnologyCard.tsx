import type { Technology } from "./techonology.type"

interface TechnologyCardProps {
    technology: Technology;
}

function TechnologyCard({ technology }: TechnologyCardProps) {
    return (
        <div>
            <h1> { technology.name}</h1>
        </div>
    )
}

export default TechnologyCard