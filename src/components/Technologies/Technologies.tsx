import { Suspense, useState } from "react";
import type { Technology } from "../../types/techonology.type"
import Loading from "../../ui/Loading";
import TechnologyList from "./TechnologyList";
import StackList from "./StackList/StackList";

const loadTechnologies = async (): Promise<Technology[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
}

function Technologies() {
  const [technologiesPromise] = useState(() => loadTechnologies());
  const [selectedStacks, setSelectedStacks] = useState<Technology[]>([]);

  const handleSelectedStack = (technology: Technology) => {
    setSelectedStacks(prev => [...prev, technology])
    console.log("Selected", selectedStacks)
  }

  const handleSelectedStackRemove = (id: string) => {
    const newSelectedItems = selectedStacks.filter(technology => technology.id !== id)
    setSelectedStacks(newSelectedItems);
  }

  const handleSelectedStackRemoveAll = () => {
    setSelectedStacks([])
  }

  return (
    <div>
      {/* Heading Part */}
      <div className="container mx-auto text-center md:text-start">
        <h2 className="text-2xl md:text-4xl/relaxed text-center md:text-start text-black font-black">
          Explore the <span className="text-primary">Technologies</span>
        </h2>
        <p className="text-sm">Pick one technology per category to build your ideal stack.</p>
      </div>

      {/* Technology cards grid section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        <Suspense fallback={<Loading />}>
          <TechnologyList
            technologiesPromise={technologiesPromise}
            handleSelectedStack={handleSelectedStack}
          />
        </Suspense>
        <StackList
          selectedStacks={selectedStacks}
          handleSelectedStackRemove={handleSelectedStackRemove}
          handleSelectedStackRemoveAll={handleSelectedStackRemoveAll}
        />
      </div>

    </div>
  )
}

export default Technologies