export const getAnimals = async () => {
    const res = await fetch(`${process.env.BETTER_AUTH_URL}/animals.json`);
    const data = await res.json();

    return data;
}