import { authReducer } from '../../../src/auth/context/authReducer';

test('Debe de realizar el Toggle del todo', () => {

    const action = {
        type: '[TODO] Toggle Todo',
        payload: 1
    };

    const newState = authReducer( {}, {} );


});