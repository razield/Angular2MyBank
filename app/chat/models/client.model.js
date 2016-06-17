System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClientModel;
    return {
        setters:[],
        execute: function() {
            ClientModel = (function () {
                function ClientModel(nombre_completo, tipo_doc, documento, correo) {
                    this.nombre_completo = nombre_completo;
                    this.tipo_doc = tipo_doc;
                    this.documento = documento;
                    this.correo = correo;
                }
                return ClientModel;
            }());
            exports_1("ClientModel", ClientModel);
        }
    }
});
//# sourceMappingURL=client.model.js.map