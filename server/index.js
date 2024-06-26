import express from "express";
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
// import connectDB from "./connectMongoDb.js";

dotenv.config();
// connectDB();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/',(req, res) => {
//     res.send("This is a stack overflow clone API")
// })

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
app.get('/',(req,res)=>{
    res.send("This is a stack overflow clone API")
})

const PORT = process.env.PORT || 5000;

//const DATABASE_URL = process.env.CONNECTION_URL
const DATABASE_URL = "mongodb+srv://admin:admin@stack-overflow-clone.p1irn7q.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)}))
    .catch((err)=>console.log(err.message))

// app.listen(PORT, () => {
//   console.log(`server running on port ${PORT}`);
// });
