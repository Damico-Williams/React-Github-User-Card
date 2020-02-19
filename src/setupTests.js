// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';


// import React from 'react';
// import Githubcard from './components/Githubcard.js'
// import Followers from './components/Followers.js'
// import { Grid } from 'semantic-ui-react';



// const state = [
//   {
//     user: 'damico-williams',
//     userData: {},
//     userFollowers: []
//   }
// ]

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//        state
//     };
//   }

//   myUser = () => {
//     fetch(`https://api.github.com/users/${this.state.user}`)
//     .then(res => res.json())
//     .then(res => {
//       this.setState({ userData: res })
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }
//   myFollowers = () => {
//     fetch(`https://api.github.com/users/${this.state.user}/followers`)
//     .then(res => res.json())
//     .then(res => {
//       this.setState({ userFollowers: res })
//       .catch(error => {
//         console.log(error)
//       })
//     })
//   }

//   componentDidMount() {
//     this.getUser();
//     this.getFollowers();
//   }

//   render() {
//     return(
//       <div className="App">
//          <Grid celled>
//            <Grid.Row verticalAlign='top'>
//              <Grid.Column textAlign='center' width={4}>
//                 <h2>User</h2>
//                 <Githubcard user={this.state.userData}/>
//              </Grid.Column>
//              <Grid.Column textAlign='center' width={12}>
//                 <h2>Friends</h2>
//                 <Followers followers={this.state.userFollowers} />
//              </Grid.Column>
//            </Grid.Row>
//         </Grid>
//       </div>
//     )
//   }
// }

// export default App;
