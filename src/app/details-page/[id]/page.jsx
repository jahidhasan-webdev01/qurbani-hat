import BookNow from "@/components/Animals/BookNow";
import { getAnimals } from "@/lib/fetchData";
import Image from "next/image";

const AnimalDetails = async ({ params }) => {
    const { id } = await params;
    const animals = await getAnimals();
    const selectedAnimal = animals.find((animal) => String(animal.id) === id)

    return (
        <div className="min-h-screen container mx-auto py-10">
            <Image src={selectedAnimal?.image} width={500} height={500} alt={selectedAnimal?.name} className="mx-auto" />
            <div className="mt-5">
                <h1 className="text-xl font-bold">{selectedAnimal?.name}</h1>
                <h1>Type: {selectedAnimal?.type}</h1>
                <h1>Price: {selectedAnimal?.price} bdt</h1>
                <h1>Weight: {selectedAnimal?.weight} kg</h1>
                <h1>Age: {selectedAnimal?.age} years old</h1>
                <h1>Breed: {selectedAnimal?.breed}</h1>
                <h1>Location: {selectedAnimal?.location}</h1>
                <h1>Category: {selectedAnimal?.category}</h1>
                <h1 className="mt-5">{selectedAnimal?.description}</h1>
            </div>

            <BookNow />
        </div>
    );
};

export default AnimalDetails;