import express  from "express";
import connectDB from "./db/connectdb.js";
import web from "./routes/web.js"
import cors from 'cors'
const app = express()
app.use(cors())
const port = process.env.PORT || '8000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

connectDB(DATABASE_URL);

app.use(express.json())

app.use("/api",web)


app.listen(port,()=>{
    console.log(`server listening at port: ${port}`);
})