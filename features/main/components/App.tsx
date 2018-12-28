import "font-awesome/css/font-awesome.min.css"
import * as React from 'react';
import "simple-line-icons/css/simple-line-icons.css"
import './App.css';
import Routes from "./Routes"


class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <Routes/>
      </div>
    );
  }
}

export default App;
