import React, { useReducer } from 'react';
import './App.css';
import List from './componenet/List';
import TextBox from "./componenet/textbox";

export const userContext = React.createContext();
export const todoList = {
  List: [],
  count: 0,
}


const reducer = (state, action) => {
  switch(action.type) {
      case "add":
        return { ...state, List: [...state.List, { id: state.count + 1, data: action.item, read: action.read}], count: state.count + 1 };

      case "delete":
        let newList = [...state.List];
        let removedItem = action.id;
        console.log("index =" +removedItem);
        let index = newList.findIndex((item) => item.id == removedItem);
        console.log("got index in list = " +index);
        newList.splice(index, 1);
        return { ...state, List: newList};

        case "save":
          let newList2 = [...state.List];
          let index2 = newList2.findIndex((item) => item.id == action.id);
          newList2[index2].data = action.item;
          return { ...state, List: newList2};

        case "read":
          let newList3 = [...state.List];
          let index3 = newList3.findIndex((item) => item.id == action.id);
          newList3[index3].read= action.read; 
          return { ...state, List: newList3};
          

  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, todoList)
  const { List, count } = todo;
  console.log(List);
  return (
    <div className="App">
      <userContext.Provider value={{ list: List, method: dispatch}}>
      <div className="todo-box">
      <TextBox />
      {/* <List /> */}
      </div>
      </userContext.Provider>
    </div>
  );
}

export default App;
