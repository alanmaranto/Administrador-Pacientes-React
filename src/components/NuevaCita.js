import React, { Component } from "react";

const initialState = {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '', 
    }
}

class NuevaCita extends Component {
    constructor(props){
        super(props);
        this.state = initialState;
    }

    handleChange = e => {
        const { cita } = this.state;
        console.log(`${e.target.name}: ${e.target.value}`);

        //colocar lo que el usuario escribe en el state
        this.setState({
            cita: {
                ...cita,
                [e.target.name]: e.target.value
            }
        })
    }

  render() {
      const { cita } = this.state;
      console.log(cita)
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>
          <form>
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
                  value={cita.mascota}
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
                  value={cita.propietario}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm4 col-lg-2 col-form-label">
                Fecha
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={cita.fecha}
                />
              </div>
              <label className="col-sm4 col-lg-2 col-form-label">
                Hora
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={cita.hora}
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
                    value={cita.sintomas}
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
}

export default NuevaCita;
