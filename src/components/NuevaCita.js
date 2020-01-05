import React, { Component } from "react";
import PropTypes from 'prop-types';
import uuid from "uuid";

const initialState = {
  cita: {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  },
  error: false
};

class NuevaCita extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  //cuando el usuario escribe en el state
  handleChange = e => {
    const { cita } = this.state;
    console.log(`${e.target.name}: ${e.target.value}`);

    //colocar lo que el usuario escribe en el state
    this.setState({
      cita: {
        ...cita,
        [e.target.name]: e.target.value
      }
    });
  };

  //cuando el usuario envia el formualrio
  handleSubmit = e => {
    const { crearNuevaCita } = this.props;
    e.preventDefault();

    //extraer los valores del state
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

    //validar que todos los campos esten llenos
    if (
      mascota === "" ||
      propietario === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas === ""
    ) {
      this.setState({ error: true });

      //detener la ejecución
      return;
    }

    //generar objeto con los datos
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();

    //Agregar la cita al state de App
    crearNuevaCita(nuevaCita);

    //Colocar en el state el stateInicial
    this.setState(initialState)
  };

  render() {
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    const { error } = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>
          {error ? (
            <div className="alert alert-danger mt-2 mb-5">
              Todos los campos son obligatorios
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm4 col-lg-2 col-form-label">
                Nombre de la mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de la mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={mascota}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm4 col-lg-2 col-form-label">
                Nombre del dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del dueño"
                  name="propietario"
                  onChange={this.handleChange}
                  value={propietario}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={fecha}
                />
              </div>
              <label className="col-sm4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={hora}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm4 col-lg-2 col-form-label">
                Síntomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Describe los síntomas"
                  onChange={this.handleChange}
                  value={sintomas}
                />
              </div>
            </div>
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Nueva Cita"
            />
          </form>
        </div>
      </div>
    );
  }
};

NuevaCita.propTypes = {
  crearNuevaCita: PropTypes.func.isRequired,
}

export default NuevaCita;
