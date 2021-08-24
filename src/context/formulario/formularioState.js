import React from 'react';
import formularioContext from './formularioContext';
import formularioReducer from './formularioReducer';
import {
    ENVIO_ERROR,
    ENVIO_EXITOSO
} from '../../types/index';
import clienteAxios from '../../config/axios';

const FormularioState = () => {

    initialState = {
        errorform: false
    }

    const [state, dispatch] = useReducer(formularioReducer, initialState);

    //Funciones
    const envioForm = async formulario => {
        try {
            const resultado = await clienteAxios.post('/api/contacto', formulario);
            dispatch({
                type: ENVIO_EXITOSO,
                payload: resultado.data
            })
            console.log(resultado.data)
        } catch (error) {
            console.log(error);
            dispatch({
                type: ENVIO_ERROR
            })
        }
    }

    return ( 
        <formularioContext.Provider
            value={{
                errorform: state.errorform,
                envioForm
            }}
        >
            {props.children}
        </formularioContext.Provider>
     );
}
 
export default FormularioState;