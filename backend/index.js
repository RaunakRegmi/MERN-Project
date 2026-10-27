// make express application
// attach port to it

import express, { json } from "express";
import firstRoute from "./src/routes/firstRoute.js";
import productRoute from "./src/routes/productRoute.js";
import userRoute from "./src/routes/userRoute.js";
import reviewRoute from "./src/routes/reviewRoute.js";
import connectToDb from "./src/connectToDb.js";
import jobRoute from "./src/routes/jobRoute.js";
import cors from "cors";
let app = express();

app.listen(8000, () => {
  console.log("application is listening at port 8000");
  connectToDb();
});
app.use(cors());
app.use(json());

app.use("/", firstRoute);
app.use("/product", productRoute);
app.use("/user", userRoute);
app.use("/review", reviewRoute);
app.use("/job", jobRoute);

/* 
database

c = create = post
r = read = get
u = update = put/patch
d = delete = delete

making api mean
defining response for each request


localhost:8000, post => I am post method
localhost:8000, get => I am get method
localhost:8000, patch => I am patch method
localhost:8000, delete => I am delete method
*/
