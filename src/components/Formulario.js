import React, {useState} from 'react';
import clienteAxios from '../config/axios';

const Formulario = () => {

    //State del formulario
    const [formulario, actualizarForm] = useState({
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    });

    // const formContext = useContext(formularioContext);
    // const {envioForm} = formContext;
    
    //state de error
    const [error, actualizarError] = useState(false);

    //state de respuesta
    const [respuesta, actualizarRespuesta] = useState(false);

    //Actualizar state cuando se escriba en el input
    const actualizarState = e =>{
        actualizarForm({
            ...formulario,
            [e.target.name] : e.target.value
        });
    }

    //Destructuring
    const {nombre, email, telefono, mensaje} = formulario;

    ////Funciones
    const envioForm = async formulario => {
        try {
            const resultado = await clienteAxios.post('/api/contacto', formulario);
            console.log(resultado.data);
            actualizarRespuesta(true);
        } catch (error) {
            console.log(error);
        }

        if(!error){

        }
    }

    //On submit formulario
    const onSubmit = e => {
        e.preventDefault();

        //Validar campos
        if(nombre.trim() ==='' || email.trim() ==='' || telefono.trim ==='' || mensaje.trim() ==='') {
            actualizarError(true);
            return;
        }

        actualizarError(false);

        envioForm(formulario);

        actualizarForm({
            nombre:'',
            email:'',
            telefono:'',
            mensaje:''
        })

    }

    return ( 
        <div className="container p-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            { error ? <div className="alert alert-danger" role="alert"> Todos los campos son obligatorios </div> : null }
                            { respuesta ? <div className="alert alert-success" role="alert"> Enviado! </div> : null}
                            <form onSubmit={onSubmit} className="needs-validation">
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