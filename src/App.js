import GlobalStyle from "./GlobalStyles";
import NewTask from "./Components/NewTask/NewTask";
import CurrentTasks from './Components/CurrentTasks/CurrentTasks'
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewTaskContext } from "./Components/Contexts/Context";
import { useState, useMemo } from "react";

function App() {
  const [value, setValue] = useState("");

  const NewTaskObject = useMemo(
    () => ({ value, setValue }), 
    [value, setValue]
    );

    const storeValue = (NewTaskObject) => {
      window.localStorage.setItem("gainedvalue", NewTaskObject);
    };
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NewTaskContext.Provider value={{NewTaskObject, storeValue}}>
      <Routes>
        <Route path="/">
          <Route index element = {<Home />} />
            <Route path="newtask" element={<NewTask />}/>
            <Route path="currenttasks" element={<CurrentTasks />}/>
        </Route>
      </Routes>
      </NewTaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;
