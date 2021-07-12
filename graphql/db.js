export const people = [
    {
        id: "0",
        name: "joon",
        age: 23,
        gender: "male"
    },
    {
        id: "1",
        name: "Minju",
        age: 24,
        gender: "female"
    },
    {
        id: "2",
        name: "Japan Guy",
        age: 18,
        gender: "male"
    },
    {
        id: "3",
        name: "Daal",
        age: 18,
        gender: "male"
    },
    {
        id: "4",
        name: "JD",
        age: 18,
        gender: "male"
    },
    {
        id: "5",
        name: "moondaddi",
        age: 18,
        gender: "male"
    },
    {
        id: "6",
        name: "soon",
        age: 20,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => people.id === id);
    return filteredPeople[0];
};