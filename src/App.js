import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { TodoApp } from "./TodoApp"
import { Login } from "./component/Login";
//import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('srd98', "clave123");
    }



    render() {
        /*const LoginView = () => (
            <Login />
        );
        const TodoAppView = () => (
            <TodoApp />
        );]*/

        if (localStorage.getItem("isLoggedIn")) {
            return (<div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">TODO React App</h1>
                </header>
                <TodoApp />
            </div>);
        }
        else {
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <Login />
                </div>
            );
        }
        /*return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            </Router>
        );*/
    }



}

export default App;
