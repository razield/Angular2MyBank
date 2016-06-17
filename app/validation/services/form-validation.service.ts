export class FormValidationService {

    static getErrorMessage(errorType: string) {
        let errorMessages = {
            'required': 'Información requerida',
            'invalidEmail': 'Correo electronico invalido',
            'invalidPassword': 'Contraseña invalida. Ingrese al menos 6 caracteres y 1 número',
            'invalidDoc': 'Documento invalido. Ingrese al menos 6 números'
        };
        return errorMessages[errorType];
    }

    static emailValidator(email) {
        if (email.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmail': true };
        }
    }

    static passwordValidator(password) {
        if (password.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
    
    static docValidator(password) {
        if (password.value.match(/^[0-9]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidDoc': true };
        }
    }
}
