import { client as Client } from "../server.js";

const getTaskByUsers = (req, res) => {
  Client.query(
    "SELECT  A.name as task_name, A.due_date as due_date, B.name as name ,B.email as email,B.number  as number FROM tasks A LEFT JOIN users B ON A.user_id = B.id"
  )
    .then((data) => {
      console.log(data);
      res.send({ message: "Successful!", data: data.rows });
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
};

export { getTaskByUsers };
