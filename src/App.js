import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import './assets/css/login.css';

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route path="/home">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
