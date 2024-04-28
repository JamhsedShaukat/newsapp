
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
   PageSize=3;
   state={progress:0}

   setprogress=(progress)=>{
    this.setState({progress:progress})
    
   }
  render() {
    return (
      <>
        <Router>
        <NavBar/>

        <LoadingBar
        color='#FF0000'
        height={3}
        progress={this.state.progress}
        />

          <Routes>
             <Route path="/" element={<News setprogress={this.setprogress}   key="general" pageSize={this.PageSize} country="in" category="general" />} />
             <Route path="/business" element={<News setprogress={this.setprogress}   key="business" pageSize={this.PageSize} country="in" category="business" />} />
             <Route path="/entertainment" element={<News setprogress={this.setprogress}   key="entertainment" pageSize={this.PageSize} country="in" category="entertainment" />} />
             <Route path="/general" element={<News setprogress={this.setprogress}   key="general" pageSize={this.PageSize} country="in" category="general" />} />
             <Route path="/science" element={<News setprogress={this.setprogress}   key="science" pageSize={this.PageSize} country="in" category="science" />} />
             <Route path="/sports" element={<News setprogress={this.setprogress}   key="sports" pageSize={this.PageSize} country="in" category="sports" />} />
             <Route path="/technology" element={<News setprogress={this.setprogress}   key="technology" pageSize={this.PageSize} country="in" category="technology" />} />
          </Routes>

        </Router>
      </>
    );
  }
}
