import AnimalList from "@/components/Animals/AnimalList";
import { getAnimals } from "@/lib/fetchData";

const AnimalsPage = async () => {
    const animals = await getAnimals();

    return (
        <div className="min-h-screen container mx-auto py-10">
            <h1 className="font-bold text-2xl">All Animals</h1>

            <AnimalList animals={animals} />
        </div>
    );
};

export default AnimalsPage;