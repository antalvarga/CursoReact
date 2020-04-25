import React, {Component} from 'react';
// aula 9 - (-03:52)
import Routes from './routes';

import './style.css';
import Header from './components/Header';
import Main from './pages/main';
/*
class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello World!</h1>
                <h1>Hello zord asvarga</h1>
            </div>
        );
    }
}
*/

const App = () => (
    <div className="App">
        <Header />
        <Routes />
    </div>
);

export default App;