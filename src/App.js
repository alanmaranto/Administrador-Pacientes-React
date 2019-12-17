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

  //cuando la app carga: Aqui devolvemos el string a array al momento de setear el estado
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  //cuando eliminamos o agregamos una nueva cita(nota: localStorage solo soporta strings, por eso convertimos el arreglo)
    componentDidUpdate(){
      const { citas } = this.state;
      localStorage.setItem('citas', JSON.stringify(citas))
    }

  crearNuevaCita = datos => {
    const { citas } = this.state;
    console.log(datos);

    //copiar el state actual
    const nuevaCita = [...citas, datos];

    //agregar el nuevo state
    this.setState({ citas: nuevaCita });
  };

  //elimina las citas del state
  eliminarCita = id => {
    const { citas } = this.state;
    console.log(id)
    console.log('diste click')

    //tomar una copia del state
    const citasActuales = [...citas];

    //utilizar filter para crear un array con solo el id
    const citasRestantes = citasActuales.filter(cita => cita.id !== id )

    //actualizar el state
    this.setState({ 
      citas: citasRestantes
    })


  }

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
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
