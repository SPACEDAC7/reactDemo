import React from "react";
import { Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import './index.scss';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            beers: [],
            message: ''
        };
    }

    render() {
        return (
            <div>
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About</Link>
                </header>

                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-us" component={About} />
                </main>
            </div>
        );
    }
}

export default App;