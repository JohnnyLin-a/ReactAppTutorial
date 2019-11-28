import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/navbar';
import Counters from "./components/counters";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    constructor() {
        super();
        console.log('App - Constructor');
        //this is first
        // this.state = this.props.something
    }

    componentDidMount() {
        //this is third before vdom transfers to actual dom
        console.log('App - Mounted');
        //Ajax calls can go here
        // this.setState
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counter[index] = { ...counter };
        counters[index].value++;
        //console.log(this.state.counters[index]);
        this.setState(counters);
    }

    handleReset = () => {
        // console.log("reset clicked");
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        // console.log(counters);
        this.setState({ counters: counters });
    }

    handleDelete = (counterId) => {
        //console.log('Event Handler Called', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }

    render() {
        //this is second
        console.log('App - Rendered');

        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        )
    }
}

export default App;