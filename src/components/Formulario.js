import React, {useState} from 'react'

const Formulario = () => {

    //State del formulario
    const [formulario, actualizarForm] = useState({
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    });
    
    //state de error
    const [error, actualizarError] = useState(false);

    //Actualizar state cuando se escriba en el input
    const actualizarState = e =>{
        actualizarForm({
            ...formulario,
            [e.target.name] : e.target.value
        });
    }

    //Destructuring
    const {nombre, email, telefono, mensaje} = formulario;

    //On submit formulario
    const onSubmit = e => {
        e.preventDefault();

        //Validar campos
        if(nombre.trim() ==='' || email.trim() ==='' || telefono.trim ==='' || mensaje.trim() ==='') {
            actualizarError(true);
            return;
        }

        actualizarError(false);

    }

    return ( 
        <div className="container p-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            { error ? <p className="text-danger">Todos los campos son obligatorios</p> : null}
                            <form onSubmit={onSubmit} className="needs-validation" novalidate>
                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input 
                                        type="text" 
                                        name="nombre" 
                                        className="form-control" 
                                        id="nombre" 
                                        placeholder="Nombre completo" 
                                        onChange={actualizarState}
                                        value={nombre}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="form-control" 
                                        id="email" 
                                        placeholder="name@examplecom" 
                                        onChange={actualizarState}
                                        value={email}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Telefono</label>
                                    <input 
                                        type="text" 
                                        name="telefono" 
                                        className="form-control" 
                                        id="telefono" 
                                        placeholder="Tu numero telefonico" 
                                        onChange={actualizarState}
                                        value={telefono}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tu mensaje</label>
                                    <textarea 
                                        className="form-control" 
                                        id="mensaje" 
                                        name="mensaje" 
                                        rows="3"
                                        onChange={actualizarState}
                                        value={mensaje}   
                                    ></textarea>
                                </div>
                                
                                <button className="btn btn-primary">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
}
 
export default Formulario;