System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProductModel;
    return {
        setters:[],
        execute: function() {
            ProductModel = (function () {
                function ProductModel(nombre, tipo, saldo) {
                    this.nombre = nombre;
                    this.tipo = tipo;
                    this.saldo = saldo;
                }
                return ProductModel;
            }());
            exports_1("ProductModel", ProductModel);
        }
    }
});
//# sourceMappingURL=product.model.js.map