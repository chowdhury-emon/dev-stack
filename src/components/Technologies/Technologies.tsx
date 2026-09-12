import { Suspense, useState } from "react";
import type { Technology } from "./techonology.type"
import Loading from "../../utils/Loading";
import TechnologyList from "./TechnologyList";

const loadTechnologies = async (): Promise<Technology[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
}

function Technologies() {
  const [technologiesPromise] = useState(() => loadTechnologies());

  return (
    <div>
      {/* Heading Part */}
      <div className="container mx-auto">
        <h2 className="text-4xl text-black font-black">
          Explore the <span className="text-primary">Technologies</span>
        </h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      {/* Technology cards grid section */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        <Suspense fallback={<Loading />}>
          <TechnologyList technologiesPromise={technologiesPromise} />
        </Suspense>

      </div>



    </div>
  )
}

export default Technologies