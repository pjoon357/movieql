import { people } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        person: () => people
    }
};

export default resolvers;