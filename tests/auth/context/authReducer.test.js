import { authReducer } from "../../../src/auth/context/authReducer";

describe('Pruebas en el authReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer( {logged: false}, {});
    })
});