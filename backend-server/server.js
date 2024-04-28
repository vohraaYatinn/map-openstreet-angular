import { app } from "./app.js";
import { connectDB } from "./dataBase/db.js";


connectDB()

app.listen(4000,()=>{
    console.log(`server listening on port localhost 4000 in development mode`);
})