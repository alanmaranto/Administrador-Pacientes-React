import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCitas from "./components/ListaCitas";

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
    const { citas } = this.state;
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas={citas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
