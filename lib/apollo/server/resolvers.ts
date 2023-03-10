import { OPEN_API_URL } from "../../constants";

const resolvers = {
    Query: {
        getCuteCats: async () => {
            const request = await fetch(`${OPEN_API_URL}/search?limit=10`);

            return await request.json();;
        },
        getCuteCat: async (_parent: any, { id }: {id: string}) => {
            const request = await fetch(`${OPEN_API_URL}/${id}`);

            return await request.json();;
        }
    }
}

export default resolvers;