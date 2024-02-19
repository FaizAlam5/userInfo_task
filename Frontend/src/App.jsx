import { BrowserRouter,NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import EntriesForm from './components/EntriesForm'
import Lists from './components/Lists'
import { HStack, Text } from '@chakra-ui/react'
import AssignTask from './components/AssignTask'

function App() {

  return (
    <>
    <BrowserRouter>
    <HStack spacing={3} p={3} bg='teal' color="white" fontWeight="bold">
    <NavLink to="/" ><Text fontSize='xl'>Add new User</Text></NavLink>
    <NavLink to="/tasks"> <Text fontSize='xl'>Task</Text></NavLink> 
    <NavLink to="/Lists"> <Text fontSize='xl'>View All User</Text></NavLink>   
    </HStack>
    <Routes>
      <Route path= "/" element= {<EntriesForm/>}/>
      <Route path= "tasks" element= {<AssignTask/>}/>
      <Route path= "/Lists" element= {<Lists/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
