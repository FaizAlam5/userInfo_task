import { client as Client } from "../server.js";

const getAllUser = (req, res) => {
  Client.query("SELECT * FROM users").then((data) => {
    res.send({ message: "Successful!", data: data.rows });
  });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  Client.query("SELECT * FROM users WHERE id=$1", [id]).then((data) => {
    res.send({ message: "Successful!", data: data.rows });
  });
};

const createUser = (req, res) => {
  const { name, email, number } = req.body;
  Client.query(
    "INSERT INTO users(name, email, number) VALUES ($1, $2, $3) RETURNING *",
    [name, email, number]
  ).then((data) => {
    res.send({ message: "Successful", data: data.rows });
  });
};

const updateUser = (req, res) => {
  const id = req.params.id;

  const { name, email, number } = req.body;
  if (!name || !email || !number) {
    res.send({ message: "All field are not provided!" });
  }

  Client.query(
    "UPDATE users SET name=$1, email=$2 , number=$3,updated_at=$4 WHERE id=$5 RETURNING *",
    [name, email, number,new Date(), id]
  ).then((data) => {
    res.send({ message: "Successfully updated!", data: data.rows });
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  Client.query("DELETE FROM users WHERE id=$1 RETURNING *", [id]).then(
    (data) => {
      res.send({ message: "Successfully deleted!", data: data.rows });
    }
  );
};

export { getAllUser, getUserById, createUser, updateUser, deleteUser };
