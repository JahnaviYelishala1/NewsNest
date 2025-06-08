import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { Component } from 'react';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <div>
        <Router >
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)} 
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} key="general" pagesize={5} category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} key="business" pagesize={5} category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize={5} category="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} key="health" pagesize={5} category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} key="science" pagesize={5} category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize={5} category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pagesize={5} category="technology" />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
