import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import CreateTodo from './components/CreateTodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route
                    path="/todoList"
                    element={ <Header /> }
                />
                <Route
                    path="/home"
                    element={ <Home /> }
                />
                <Route
                    path="/CreateTodo"
                    element={ <CreateTodo /> }
                />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
