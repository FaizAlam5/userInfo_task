import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

function EntriesForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Clicked")
    try {
      await axios.post("http://localhost:8080/v2/users/", {
        name,
        email,
        number,
      });
      console.log("successfully added")
    } catch (error) {
      console.log(error);
    }finally{
      setName("")
      setEmail("")
      setNumber("")
    }
  };

  return (
    <VStack p={4}>
      <Container maxW="md">
        <FormControl isRequired>
          <FormLabel mt={4}>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormLabel mt={4}>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormLabel mt={4}>Phone Number</FormLabel>
          <Input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <Button
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
            mt={4}
            isDisabled={!name || !email || !number}
          >
            Add User
          </Button>
        </FormControl>
      </Container>
    </VStack>
  );
}

export default EntriesForm;
