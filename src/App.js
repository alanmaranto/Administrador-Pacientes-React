import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';

class App extends Component {
  render() { 
    return ( 
      <div className="container">
        <Header 
          titulo="Administrador Pacientes Veterinaria"
        />
      </div>
     );
  }
}
 
export default App;
