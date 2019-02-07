import React, { Component, Fragment } from "react";
import { voteAngular, voteReact, voteVuejs } from "./actions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    console.log(this.store);
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  };

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  };

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  };

  render() {
    return (
      <Fragment>
        <div className="main">
          <div className="container">
            <h2>What is your favorite front-end framework ?</h2>
            <h4>Click on the logos below to vote!</h4>
            <div className="logos">
              <img
                src="angular.png"
                alt="Angular logo"
                onClick={this.handleVoteAngular}
              />
              <img
                src="react.png"
                alt="React logo"
                onClick={this.handleVoteReact}
              />
              <img
                src="vuejs.png"
                alt="Vue.js logo"
                onClick={this.handleVoteVuejs}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
