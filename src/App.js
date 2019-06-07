import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import './scss/main.css';
import CategoriesView from "./pages/Categories.js";


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Footer/>
        <CategoriesView/>
      </div>
    );
  }
}

export default App;
