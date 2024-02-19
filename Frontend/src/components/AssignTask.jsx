import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function AssignTask() {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");
  const [assignUserId, setAssignUserId] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/v2/users/")
      .then((res) => {
        setUsers(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = async () => {
    try {
      await axios
        .post(`http://localhost:8080/v2/tasks?myId=${assignUserId}`, {
          name: taskName,
          due_date: date,
        })
        .then((res) => {
          console.log(res.data);
          setTaskName("");
          setDate("");
         
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <VStack p={4}>
        <Container maxW="md">
          <FormControl>
            <FormLabel mt={4}>Assign Task</FormLabel>
            <Input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
            <FormLabel mt={4}>To user</FormLabel>
            <Select
              placeholder="Select option"
              onChange={(e) => setAssignUserId(e.target.value)}
            >
              {users &&
                users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
            </Select>
            <FormLabel mt={4}>Due Date</FormLabel>
            <Input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <Button
              colorScheme="teal"
              type="submit"
              onClick={handleSubmit}
              mt={4}
            >
              Submit
            </Button>
          </FormControl>
        </Container>
      </VStack>
    </>
  );
}

export default AssignTask;
