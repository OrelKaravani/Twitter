import React, { Component } from "react";
import {Provider} from "react-redux";
import store from "./store/Store";

import Twitter from './components/Twitter';

class App extends Component {
  render() {
    return (
      <div >
        <Provider store={store} >
            <Twitter />
        </Provider>
      </div>
    );
  }
}

export default App;
