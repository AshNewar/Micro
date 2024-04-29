import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.json({message:"Hello Docker"});
});
app.listen(8000,()=>{
    console.log("listening on 8000");
})