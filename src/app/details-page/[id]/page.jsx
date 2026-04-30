import { getAnimals } from "@/lib/fetchData";

const AnimalDetails = async ({ params }) => {
    const { id } = await params;
    const animals = await getAnimals();
    const selectedAnimal = animals.find((animal) => String(animal.id) === id)

    return (
        <div className="min-h-screen container mx-auto py-10">
            <h1>AnimalDetails {selectedAnimal?.name}</h1>
        </div>
    );
};

export default AnimalDetails;