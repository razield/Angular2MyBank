System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FormValidationService;
    return {
        setters:[],
        execute: function() {
            FormValidationService = (function () {
                function FormValidationService() {
                }
                FormValidationService.getErrorMessage = function (errorType) {
                    var errorMessages = {
                        'required': 'Información requerida',
                        'invalidEmail': 'Correo electronico invalido',
                        'invalidPassword': 'Contraseña invalida. Ingrese al menos 6 caracteres y 1 número',
                        'invalidDoc': 'Documento invalido. Ingrese al menos 6 números'
                    };
                    return errorMessages[errorType];
                };
                FormValidationService.emailValidator = function (email) {
                    if (email.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                        return null;
                    }
                    else {
                        return { 'invalidEmail': true };
                    }
                };
                FormValidationService.passwordValidator = function (password) {
                    if (password.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidPassword': true };
                    }
                };
                FormValidationService.docValidator = function (password) {
                    if (password.value.match(/^[0-9]{6,100}$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidDoc': true };
                    }
                };
                return FormValidationService;
            }());
            exports_1("FormValidationService", FormValidationService);
        }
    }
});
//# sourceMappingURL=form-validation.service.js.map