
import type { Technology } from "../../../types/techonology.type"
import StackCard from "./StackCard"

interface StackListProps {
    selectedStacks: Technology[]
    handleRemoveFromSelectedStack: (technology: Technology) => void
    handleRemoveAllFromSelectedStack: () => void
}

function StackList({ selectedStacks, handleRemoveFromSelectedStack, handleRemoveAllFromSelectedStack }: StackListProps) {
    const stackEmpty: boolean = selectedStacks.length === 0;
    return (
            <article className="col-span-full xl:col-span-1 grid gap-10 h-fit min:w-fit lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] bg-white border border-neutral-100 rounded-2xl p-4">
                <header>
                    <h1 className="text-xl/relaxed font-bold text-black">
                        Your Technology
                    </h1>
                    <p className="text-sm"> {
                        stackEmpty ? "No technologies selected yet" :
                            `${selectedStacks.length} Technology Selected`
                    }
                    </p>
                </header>

                <section className="grid gap-2 min-h-20 overflow-auto">
                    <div className={`${stackEmpty ? "block" : "hidden"} text-sm text-center text-muted p-8 border border-dashed border-neutral-200 rounded-xl`}>
                        <p>Your stack is empty</p>
                    </div>

                    {!stackEmpty &&
                        selectedStacks.map((selectedTechnology) => (
                            <StackCard
                                selectedTechnology={selectedTechnology}
                                handleRemoveFromSelectedStack={handleRemoveFromSelectedStack}
                            />
                        ))
                    }
                </section>

                <button
                    className={`p-2 font-bold text-red-500 border border-current/30 rounded-xl ${stackEmpty ? "hidden" : ""}`}
                    onClick={handleRemoveAllFromSelectedStack}>
                    Remove All
                </button>
            </article>

    )
}

export default StackList