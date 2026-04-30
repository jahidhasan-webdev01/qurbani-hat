import AnimalCard from "@/components/Animals/AnimalCard";
import { getAnimals } from "@/lib/fetchData";

const AnimalsPage = async () => {
    const animals = await getAnimals();

    return (
        <div className="min-h-screen container mx-auto py-10">
            <h1>ANIMALS PAGE {animals.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-2 md:px-0">
                {
                    animals.map((animal, index) =>
                        <AnimalCard key={index} animal={animal} />
                    )
                }
            </div>
        </div>
    );
};

export default AnimalsPage;