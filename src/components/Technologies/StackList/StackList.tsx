
import type { Technology } from "../../../types/techonology.type"
import StackCard from "./StackCard"

interface StackListProps {
    selectedStacks: Technology[]
    handleSelectedStackRemove: (technology: Technology) => void
    handleSelectedStackRemoveAll: () => void
}

function StackList({ selectedStacks, handleSelectedStackRemove, handleSelectedStackRemoveAll }: StackListProps) {
    const stackEmpty: boolean = selectedStacks.length === 0;
    return (
        <article className="grid">
            <div className="grid gap-10 h-fit border-2 border-neutral-100 rounded-2xl p-4">
                <header>
                    <h1 className="text-xl/relaxed font-bold text-black">Your Technology</h1>
                    <p className="text-sm"> {
                        stackEmpty ?
                            "No technologies selected yet" :
                            `${selectedStacks.length} Technology Selected`
                    }
                    </p>
                </header>

                <section className="grid gap-2">
                    <div className={`text-sm text-center p-8 border border-dashed border-neutral-200 rounded-xl ${stackEmpty ? "block" : "hidden"}`}>
                        <p>Your stack is empty</p>
                    </div>
                    {
                        selectedStacks.map((selectedTechnology) => (
                            <StackCard
                                selectedTechnology={selectedTechnology}
                                handleSelectedStackRemove={handleSelectedStackRemove}
                            />
                        ))
                    }
                </section>

                <button
                    className={`p-2 font-bold text-red-700 border border-current rounded-xl ${stackEmpty ? "hidden" : ""}`}
                    onClick={handleSelectedStackRemoveAll}>
                    Remove All
                </button>
            </div>
        </article>
    )
}

export default StackList