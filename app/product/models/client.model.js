System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClientModel;
    return {
        setters:[],
        execute: function() {
            ClientModel = (function () {
                function ClientModel(NombreCompleto, tipoDocumento, NumeroDocumento) {
                    this.NombreCompleto = NombreCompleto;
                    this.tipoDocumento = tipoDocumento;
                    this.NumeroDocumento = NumeroDocumento;
                }
                return ClientModel;
            }());
            exports_1("ClientModel", ClientModel);
        }
    }
});
//# sourceMappingURL=client.model.js.map