import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Dog from "./components/service/Dog";
import Cats from "./components/service/Cats";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
      <Header />
      <main className="app-main">
             
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/Dog" component={Dog} />
          <Route path="/Cat" component={Cats} />
        </Switch>
      </main>
      </Router>
    </div>

  );
}
export default App;

