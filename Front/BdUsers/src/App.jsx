import './App.css'
import styled from "styled-components";
import Form from "./components/Form.jsx";
import List from "./components/list.jsx";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Container = styled.div`
  display: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flec;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  text-align: center;
`;

function App() {

  const [users, setUsers] = useState([]);
  const [useEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try{
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
    } catch(error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [setUsers]); 

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form onEdit={useEdit} getUsers={getUsers} setOnEdit={setOnEdit}/>
        <List users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={1000}/>
    </>
  )
}

export default App
