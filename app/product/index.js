System.register(['./models/product.model', './models/client.model', './models/client-products.model', './services/client-products.service', './components/product-list.component', './components/product.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (product_model_1_1) {
                exports_1({
                    "ProductModel": product_model_1_1["ProductModel"]
                });
            },
            function (client_model_1_1) {
                exports_1({
                    "ClientModel": client_model_1_1["ClientModel"]
                });
            },
            function (client_products_model_1_1) {
                exports_1({
                    "ClientProductsModel": client_products_model_1_1["ClientProductsModel"]
                });
            },
            function (client_products_service_1_1) {
                exports_1({
                    "ClientProductsService": client_products_service_1_1["ClientProductsService"]
                });
            },
            function (product_list_component_1_1) {
                exports_1({
                    "ProductListComponent": product_list_component_1_1["ProductListComponent"]
                });
            },
            function (product_component_1_1) {
                exports_1({
                    "ProductComponent": product_component_1_1["ProductComponent"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map