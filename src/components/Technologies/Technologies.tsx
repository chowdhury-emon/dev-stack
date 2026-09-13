import { Suspense, useState } from "react";
import type { Technology } from "../../types/techonology.type"
import Loading from "../../ui/Loading";
import TechnologyList from "./TechnologyList/TechnologyList";
import StackList from "./StackList/StackList";
import { toast } from "react-toastify";

const loadTechnologies = async (): Promise<Technology[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
}

function Technologies() {
  const [technologiesPromise] = useState(() => loadTechnologies());
  const [selectedStacks, setSelectedStacks] = useState<Technology[]>([]);

  const handleAddToSelectedStack = (technology: Technology) => {
    setSelectedStacks(prev => [...prev, technology])
    console.log("Selected", selectedStacks)
    toast.success(`${technology.name} has added to stack`)

  }

  const handleRemoveFromSelectedStack = (selectedTechnology: Technology) => {
    const newSelectedItems = selectedStacks.filter(technology => technology.id !== selectedTechnology.id)
    setSelectedStacks(newSelectedItems);
    toast.info(`${selectedTechnology.name} has been removed from stack`)

  }

  const handleRemoveAllFromSelectedStack = () => {
    setSelectedStacks([])
    toast.info("All items has been removed from stack")
  }

  return (
    <div>
      {/* Heading Part */}
      <div className="container mx-auto text-center md:text-start">
        <h2 className="text-2xl/loose md:text-4xl/relaxed text-center md:text-start text-black font-black">
          Explore the <span className="text-primary">Technologies</span>
        </h2>
        <p className="text-xs md:text-sm">Pick one technology per category to build your ideal stack.</p>
      </div>

      {/* Technology cards grid section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
        <Suspense fallback={<Loading />}>
          <TechnologyList
            technologiesPromise={technologiesPromise}
            selectedStacks={selectedStacks}
            handleAddToSelectedStack={handleAddToSelectedStack}
          />
        </Suspense>

        <StackList
          selectedStacks={selectedStacks}
          handleRemoveFromSelectedStack={handleRemoveFromSelectedStack}
          handleRemoveAllFromSelectedStack={handleRemoveAllFromSelectedStack}
        />
      </div>

    </div>
  )
}

export default Technologies