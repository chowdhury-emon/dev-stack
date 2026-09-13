import { HiX } from "react-icons/hi"
import type { Technology } from "../../../types/techonology.type"

interface StackCardProps {
  selectedTechnology: Technology
  handleRemoveFromSelectedStack: (technology: Technology) => void
}

function StackCard({ selectedTechnology, handleRemoveFromSelectedStack }: StackCardProps) {
  return (
    <article className="flex justify-between bg-white p-3 border border-neutral-100 rounded-xl transition-all hover:shadow-md/5">

    {/* Selected Technology Card  */}
      <div className="flex">
        <img className="max-w-10" src={selectedTechnology.icon} alt={`${selectedTechnology.name} icon`} />
        <div className="px-4">
          <h1 className=" text-black font-bold">{selectedTechnology.name}</h1>
          <p className="text-xs">{selectedTechnology.category}</p>
        </div>
      </div>

      <button className="text-2xl text-neutral-400 hover:shadow-none hover:text-red-500"
        onClick={() => handleRemoveFromSelectedStack(selectedTechnology)}>
        <HiX />
      </button>

    </article>
  )
}

export default StackCard