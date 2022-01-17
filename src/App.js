import './App.css';
import { useState } from 'react';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';

function App() {
  const onDelete =(todo) =>{
    console.log("hi i am on delete",todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e !==todo;
    }));
  }
  const [todos, setTodos] =useState([
    {
      sno: 1,
      title: "Goto shopping",
      desc: "Please go fast to market"
    },
    {
      sno: 2,
      title: "German Class",
      desc: "A1 Vocab"
    },
    {
      sno: 3,
      title: "IELT'S",
      desc: "Write essay"
    },
  ]);
  // const [counters, setCounters]=useState(0)
  // const [name, setName]=useState("")
  // const [email, setEmail]=useState("")
  // const [psswd, setPsswd]=useState("")
  // const names ="dhruvi"
  // const emailid = "dhruvi@kafqa.com"
  // const password = "12345"
  // function increment() {
  //   setCounters(counters+1)
  // }
  
  // function handleNameChange(event){
  //   setName(event.target.value);
  //   console.log(event.target.value)
  // }
  // function handleEmailChange(event){
  //   setEmail(event.target.value)
  // }
  // function handlePsswdChange(event){
  //   setPsswd(event.target.value)
  // }

  // function decrement(){
  //   setCounters(counters-1)
  // }
  // function verify(){
  //   if (names == name && email== emailid && psswd == password)
  //     alert("successful")
  //   else
  //     alert("sorry")
  // }
  return (
    <div className="App">
      {/* TO MAKE COUNTER
      <button onClick= {increment}>+</button>
      <span>
        {counters}
      </span>
      <button onClick= {decrement}>-</button>

      // TO MAKE SIMPLE FORM
      <form>
        <label>name: </label>
       <input type ="text" onChange= {handleNameChange}></input> <br/>
        <label>email: </label>
        <input type ="email" onChange= {handleEmailChange}></input> <br/>
        <label>password: </label>
        <input type ="password" onChange= {handlePsswdChange}></input> <br/>
        <button onClick= {verify}>submit</button>
      </form> */}
      <>
        <Header title="My Todos List" searchBar={true} />
        <Todos todos ={todos} onDelete={onDelete}/>
        <Footer/>
      </>
    </div>

  );
}

export default App;
