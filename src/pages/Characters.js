import React, { Component } from 'react'
import {graphql} from 'gatsby'
import Header from '../Components/Header'
import '../styles/Characters.css'
import axios from 'axios'

export const GatsbyQuery = graphql`
 {
   rickAndMorty {
     multipleCharacters(ids:[10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
       20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
       30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
       40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
       50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
       60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
       70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
       80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
       90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
       100]){
           name
           image
     }
   }
 }
`

class Characters extends Component {
    state = {
        loading: false,
        error: false,
        pupper: {
          img: "",
          breed: "",
        },
        dogs:[]
      }

      componentDidMount() {
        this.fetchRicksPupper()
      }

      fetchRicksPupper = async () => {
        this.setState({ loading: true })
      let res =  await axios.get(`https://dog.ceo/api/breeds/image/random/50`)
        console.log(res.data)
        this.setState({
            dogs:res.data.message
        })
      }

    render() {
        const {
            rickAndMorty: { multipleCharacters },
        } = this.props.data

        console.log(this.state)
        return (
            <div id='main'>
                <Header dogs={this.state.dogs} siteTitle={'title'} />

                {multipleCharacters.map((char, i) => {

                    return(
                        <div key={i} style={{ textAlign: "center", width: "400px", margin: "50px auto" }}>
                        <h1 id='char'>{char.name}</h1>
                        <div>
                            <img
                                src={char.image}
                                alt={char.name}
                                style={{ width: 300 }}
                            />
                        </div>

                    </div>
                    )
                })}
            </div>
        )
    }
}



export default Characters