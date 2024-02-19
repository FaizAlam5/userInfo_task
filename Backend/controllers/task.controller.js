import { client as Client } from "../server.js";

const getAllTask = (req, res) => {
  Client.query("SELECT * FROM tasks").then((data) => {
    res.send({ message: "Successful!", data: data.rows });
  });
};

const getTaskById = (req, res) => {
  const id = req.params.id;
  Client.query("SELECT * FROM tasks WHERE id=$1", [id]).then((data) => {
    res.send({ message: "Successful!", data: data.rows });
  });
};

const createTask = (req, res) => {
  const { name, due_date } = req.body;
  console.log(req.query.myId);
  Client.query(
    "INSERT INTO tasks(name,due_date,user_id) VALUES ($1,$2,$3) RETURNING *",
    [name, due_date, req.query.myId]
  )
    .then((data) => {
      res.send({ message: "Successful", data: data.rows });
    })
    .catch((err) => {
      res.send({ message: "Not successful :-(", error: err });
    });
};

const updateTask = (req, res) => {
  const id = req.params.id;

  const { name } = req.body;
  if (!name) {
    res.send({ message: "All fields are not provided!" });
  }

  Client.query("UPDATE users SET name=$1 WHERE id=$2 RETURNING *", [
    name,
    id,
  ]).then((data) => {
    res.send({ message: "Successfully updated!", data: data.rows });
  });
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  Client.query("DELETE FROM users WHERE id=$1 RETURNING *", [id]).then(
    (data) => {
      res.send({ message: "Successfully deleted!", data: data });
    }
  );
};



export {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
