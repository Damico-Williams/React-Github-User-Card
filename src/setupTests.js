// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';


// Michael Hart:
// componentDidMount actually runs after the component is first rendered, so the first time it's rendered, this.state.userData is undefined. So you either need to set default data for it, initializing it to be empty strings or something for the values that Githubcard wants to show, or use conditional logic like {this.state.userData && <Githubcard user={this.state.userData}/> which will only show a card if this.state.userData exists 
