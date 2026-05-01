import BookNow from "@/components/Animals/BookNow";
import { getAnimals } from "@/lib/fetchData";
import Image from "next/image";

const AnimalDetails = async ({ params }) => {
    const { id } = await params;
    const animals = await getAnimals();
    const selectedAnimal = animals.find((animal) => String(animal.id) === id)

    return (
        <div className="container mx-auto py-10 grid md:grid-cols-2 gap-5 px-2 md:px-0 animate__animated animate__fadeIn">
            <div>
                <Image src={selectedAnimal?.image} width={500} height={500} alt={selectedAnimal?.name} className="mx-auto" />
            </div>

            <div className="flex flex-col justify-center">
                <div className="">
                    <h1 className="text-xl font-bold pb-5">{selectedAnimal?.name}</h1>
                    <div className="text-gray-600">
                        <h1>Type: {selectedAnimal?.type}</h1>
                        <h1>Price: {selectedAnimal?.price} bdt</h1>
                        <h1>Weight: {selectedAnimal?.weight} kg</h1>
                        <h1>Age: {selectedAnimal?.age} years old</h1>
                        <h1>Breed: {selectedAnimal?.breed}</h1>
                        <h1>Location: {selectedAnimal?.location}</h1>
                        <h1>Category: {selectedAnimal?.category}</h1>
                    </div>
                    <h1 className="mt-5">{selectedAnimal?.description}</h1>
                </div>

                <BookNow />
            </div>
        </div>
    );
};

export default AnimalDetails;