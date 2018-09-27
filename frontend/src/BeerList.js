import React from 'react'
import axios from "axios/index";
import Beer from './Beer'

class BeerList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        axios.get('http://localhost:8080/beers')
            .then(res => {
                console.log('Good Beers');
                console.log(res);
                this.setState({beers: res.data});
            })
            .catch(error=> {
                console.log('-- Error --');
                console.log(error)
            });

        setInterval(this.hello, 250);

        console.log(this.state);
    }

    render(){
        return (
            <div>
                <h1>List of beers</h1>
                <ul>
                    {this.state.beers.map( beer => <Beer key={beer.id} id={beer.id} name={beer.name}/>)}
                </ul>
            </div>
        );

    }
}
export default BeerList;