import { getAnimals } from "@/lib/fetchData";
import AnimalCard from "../Animals/AnimalCard";
import Link from "next/link";

const Animals = async () => {
    const animals = await getAnimals();

    const topFour = animals.sort((a, b) => b.weight - a.weight).slice(0, 4)

    return (
        <div className="container mx-auto py-20 px-2 lg:px-0">
            <div className="flex flex-row justify-between items-center">
                <h1 className="font-bold text-2xl">Featured Animals</h1>
                <Link href={"/animals"} className="text-sm hover:border-b">View All Animals</Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                {
                    topFour.map((animal, index) => <AnimalCard key={index} animal={animal} />)
                }
            </div>
        </div>
    );
};

export default Animals;