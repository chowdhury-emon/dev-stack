export interface Technology {
    id: string;
    name: string;
    category: TechnologyCategory;
    description: string;
    icon: string;
    rating: number;
    difficulty: TechnologyDifficulty;
    badge: string;
}

type TechnologyCategory = "Frontend" | "Backend" | "Database" | "Language" | "Styling" | "DevOps" | "Tools";
type TechnologyDifficulty= "Beginner-Friendly" | "Intermediate" | "Advanced";

