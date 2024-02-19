import {
  Box,
  Center,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function Lists() {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/v2/allTask")
      .then((res) => {
        setTaskData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box mt={4}>
      <Center>
        <Heading color="teal">Tasks Details</Heading>
      </Center>
      <TableContainer mt={4}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Task Name</Th>
              <Th>Due Date</Th>
              <Th>Assigned to User</Th>
              <Th>Email</Th>
              <Th>Contact</Th>
            </Tr>
          </Thead>
          <Tbody>
            {taskData &&
              taskData.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.task_name}</Td>
                  <Td>{user.due_date}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.number}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Lists;

// {
//   userData && userData.map((user)=>(

//   ))
// }
