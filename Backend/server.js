import express from "express";
import userRouter from "./routes/user.route.js";
import taskRouter from "./routes/task.route.js";
import myRouter from "./routes/task_user.route.js";
import config from "./config/db.config.js";
import pkg from "pg";
import cors from 'cors'
const { Client } = pkg;

let app = express();

app.use(cors({ origin: "http://localhost:5173",}))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



const client = new Client({
  host: config.HOST,
  user: config.USER,
  database: config.DB,
  password: config.PASSWORD,
  port: config.PORT,
});

client
  .connect()
  .then(() => {
    console.log("Connected with database..");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/v2/users", userRouter);
app.use("/v2/tasks", taskRouter);
app.use("/v2/allTask", myRouter);

app.listen(8080, () => {
  console.log("Connected port 8080....");
});

export { client };
