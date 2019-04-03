import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Library extends Component {
  constructor(props){
      super(props);
      this.state = {
          name: "React",
          value: 0,
      }
  }

  increment() {
      this.setState({value: this.state.value + 1});
  }

  render() {
    return (
          <div className="library">
            <div className="circle">{this.state.value}</div>
            <h1 className="value">{this.state.name}</h1>
            <div className='plusSign' onClick = {()=>{this.increment()}}>
              <div className="bar horizontal"></div>
              <div className="bar vertical"></div></div>
          </div>
    );
  }
}


let libraryId = 4;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            libraries: [0,1,2,3]
        }
    }

    addLibrary = () => {
        let libraries = [...this.state.libraries];
        libraries.push(libraryId);
        libraryId++;
        this.setState({ libraries: libraries });
    }

    render () {
        const { libraries } = this.state;
        return (
            <div className="main">
                <div className="header">
                    <h1>Vote for Your JS Library</h1>
                </div>
                <div className="library-list">
                    { libraries.map((id) => <Library key={id}/>) }
                </div>

            </div>
        )
    }
}

export default App;
