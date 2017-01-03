import React from 'react';
import ReactDOM from 'react-dom';
import nanoajax from 'nanoajax';
import ChatApp from './ChatApp';
import InputPanel from './InputPanel';

require('./../scss/app.scss');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      username: 'Santa',

    };
  }
  headerBackLinkHandler = (e) => {
    this.setState({ isLogged: false, username: 'Santa' });
  }
  loginHandle = (e) => {
    e.preventDefault();
    this.setState({ isLogged: true, username: this.state.username });
  }
  usernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  }
  render() {
    // Show main app if user is successfully logged in
    if (this.state.isLogged) return (<ChatApp username={this.state.username} showLoginForm={this.headerBackLinkHandler} />);


    // Show login form
    return (
      <div className="welcome-screen">
        <form onSubmit={this.loginHandle} >
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter a username..."
            required
          />
        </form>
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
