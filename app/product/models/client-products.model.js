System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClientProductsModel;
    return {
        setters:[],
        execute: function() {
            ClientProductsModel = (function () {
                function ClientProductsModel(client, productos, nombre_completo) {
                    this.client = client;
                    this.productos = productos;
                    this.nombre_completo = nombre_completo;
                }
                return ClientProductsModel;
            }());
            exports_1("ClientProductsModel", ClientProductsModel);
        }
    }
});
//# sourceMappingURL=client-products.model.js.map