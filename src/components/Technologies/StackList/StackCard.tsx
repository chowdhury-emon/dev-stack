import { HiX } from "react-icons/hi"
import type { Technology } from "../../../types/techonology.type"

interface StackCardProps {
  selectedTechnology: Technology
  handleSelectedStackRemove: (technology: Technology) => void
}

function StackCard({ selectedTechnology, handleSelectedStackRemove }: StackCardProps) {
  return (
    <div className="flex justify-between p-3 border-2 border-neutral-100 rounded-xl">
      <div className="flex">
        <img className="max-w-10" src={selectedTechnology.icon} alt="Technology Icon" />
        <div className="px-4">
          <h1 className=" text-black font-bold">{selectedTechnology.name}</h1>
          <p className="text-xs">{selectedTechnology.category}</p>
        </div>
      </div>

      <button onClick={() => handleSelectedStackRemove(selectedTechnology)}>
        <HiX className="text-2xl text-neutral-400" />
      </button>

    </div>
  )
}

export default StackCard