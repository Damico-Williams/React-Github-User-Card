import React from 'react';
import axios from 'axios';
import Githubcard from './components/Githubcard.js'
import Followers from './components/Followers.js'
import { Grid } from 'semantic-ui-react';





class App extends React.Component {

  constructor() {
    super();
    this.state = {
      
      userData: [],
      userFollowers: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/damico-williams`)
    
    .then(res => {
      this.setState({ userData: res.data })
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })

    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
    
    .then(res => {
      this.setState({ userFollowers: res.data })
      })
      .catch(error => {
        console.log(error)
    })
  }

  render() {
    return(
      <div className="App">
         <Grid celled>
           <Grid.Row verticalAlign='top'>
             <Grid.Column textAlign='center' width={4}>
                <h2>User</h2>
                <Githubcard userData={this.state.userData}/>
             </Grid.Column>
             <Grid.Column textAlign='center' width={12}>
                <h2>Friends</h2>
                <Followers followers={this.state.userFollowers} />
             </Grid.Column>
           </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App;