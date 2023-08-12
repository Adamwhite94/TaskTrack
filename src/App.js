import GlobalStyle from "./GlobalStyles";
import NewTask from "./Components/NewTask/NewTask";
import CurrentTasks from "./Components/CurrentTasks/CurrentTasks";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="newtask" element={<NewTask />} />
            <Route path="currenttasks" element={<CurrentTasks />} />
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
