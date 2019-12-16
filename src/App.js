import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";

const initialState = {
  citas: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  crearNuevaCita = datos => {
    const { citas } = this.state;
    console.log(datos);

    //copiar el state actual
    const nuevaCita = [...citas, datos];

    //agregar el nuevo state
    this.setState({ citas: nuevaCita });
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
