import React, { Component } from 'react';
import Header from '../Components/Header'
import axios from 'axios'
class Dogs extends Component {
   state={
       dogs:[]
   }
    componentDidMount() {
        const dogs = this.props.location.state.dogs
        this.setState({
          dogs: dogs
        })
      }
    render() {
        console.log(this.state)
        return (
            <div>
                <Header></Header>
                <h1>Dogs</h1>
                <div>
                    {this.state.dogs.map((dog,i) => (
                        <img key={i} src={dog} alt="" style={{ width: 300 }}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Dogs;