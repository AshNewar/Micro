import express from "express"
import {expressMiddleware} from "@apollo/server/express4";
import createAppoloGraphqlServer from "./graphql";



const init = async () => {
    const app = express()
    const port = 4000
    app.use(express.json())
    app.use("/graphql",expressMiddleware(await createAppoloGraphqlServer()));
    
    app.get("/", (req, res) => {
        console.log("Hello World")
    });
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
    
    

    
}
init();




