import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  pageSize = 6;

  state = {
    progress: 0,
    mode: 'light',
    text: "Enable Dark Mode"
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark', text:'Enable Light Mode' })
      document.body.style.backgroundColor = '#2E4F4F'
      console.log("in if")
    }
    else {
      this.setState({ mode: 'light',text:'Enable Dark Mode' })
      document.body.style.backgroundColor = 'white'
      console.log("in else")
    }
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} text={this.state.text} toggleMode={this.toggleMode} />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/general' element={< News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path='/business' element={< News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route exact path='/entertainment' element={< News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path='/health' element={< News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exact path='/science' element={< News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route exact path='/sports' element={< News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exact path='/technology' element={< News mode={this.state.mode} setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes>

        </Router>
      </div>
    )
  }
}


