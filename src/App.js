import { BrowserRouter, Route,  Redirect} from 'react-router-dom';
import AllTasksPage from './pages/all_tasks_page'
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
        <Header></Header>
        <BrowserRouter>
            <Route exact path="/tasks">
                <AllTasksPage />
            </Route>
            <Route exact path="/">
                <Redirect to="/tasks" />
            </Route>
        </BrowserRouter>
        <Footer></Footer>
    </div>
  );
}

export default App;
