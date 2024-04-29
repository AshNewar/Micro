const queries={}
const mutations={
    createUser: async (_: any,{name,email,password}:{name:string;email:string;password:string}) => {
        console.log(name,email,password);
        return "Hello World";
    }
}
export const resolvers = {queries,mutations}