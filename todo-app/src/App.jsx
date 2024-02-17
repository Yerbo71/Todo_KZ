import './App.css'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Start from "./components/Start";
import NoPage from './components/NoPage';
import Todo from './components/Todo';
import NewTodo from './components/NewTodo';
import { createContext, useState } from 'react';
import Detail from './components/Detail';

export const AppContext = createContext();
const AppProvider = ({children}) =>{
  const [todos,setTodos] = useState([]);
  const [groups,setGroups] = useState([]);

const addTodo = (newTodo) => {
  setTodos([...todos, newTodo]);
};
const addGroup = (newTodo)=>{
  setGroups([...groups,newTodo]);
}
const removeTodo = (index) => {
  setTodos((prevTodos) => {
    const newTodos = [...prevTodos];
    newTodos.splice(index, 1);
    return newTodos;
  });
};

  return(
    <AppContext.Provider value={{todos,groups,addTodo,addGroup,removeTodo,setTodos,setGroups}}>
      {children}</AppContext.Provider>
  );
}

function App() {
  return (
<BrowserRouter>
  <AppProvider>
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/todo/:index' element={<Detail/>}/>
      <Route path='/newtodo' element={<NewTodo/>}/>
      <Route path='*' element={<NoPage/>}/>
    </Routes>
  </AppProvider>
</BrowserRouter>

  )
}
export default App
