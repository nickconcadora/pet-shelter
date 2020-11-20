import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router,Link} from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center flex-column">
        <h1 className="text-center">Pet Shelter</h1>
        <Link to="/">Home</Link>
      </div>
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Show path="/details/:id" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
