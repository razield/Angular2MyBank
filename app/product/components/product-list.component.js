System.register(['angular2/core', 'angular2/router', '../index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent(_productService, params) {
                    this._productService = _productService;
                    this.typeDocument = 'nn';
                    this.document = 0;
                    this.docus = [{ 'nombre': 'Seleccione un tipo', 'valor': 'nn' }, { 'nombre': 'Cedula de Ciudadania', 'valor': 'cc' }, { 'nombre': 'Cedula de Extranjeria', 'valor': 'ce' }, { 'nombre': 'Cédula Adulto Mayor', 'valor': 'adultonn' }, { 'nombre': 'Tarjeta de Identidad', 'valor': 'ti' }];
                    this.b = 0;
                    this.token = params.get('token');
                    //console.log(params);
                }
                //client-products: ClientProductsModel;
                //ngOnInit() { this.getProducts(); }
                ProductListComponent.prototype.getProducts = function () {
                    var _this = this;
                    if (this.typeDocument != 'nn' && this.document != 0) {
                        this._productService.getProducts(this.token, this.typeDocument, this.document)
                            .subscribe(function (clients) {
                            if (clients.length > 0) {
                                _this.products = clients[0].productos.map(_this.parseSaldo);
                                _this.b = 1;
                                _this.nameClient = clients[0].nombre_completo;
                                console.log("nombre: " + _this.nameClient);
                            }
                        }, function (error) { return _this.errorMessage = error; });
                    }
                    else {
                        this.b = 0;
                        alert('Usuario no encontrado');
                    }
                };
                ProductListComponent.prototype.parseSaldo = function (producto) {
                    producto.saldo = parseFloat(producto.saldo);
                    return producto;
                };
                ProductListComponent.prototype.selectDocument = function (valor) {
                    this.typeDocument = valor;
                    //alert('Tipo de documento: '+this.typeDocument);
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'product-list',
                        templateUrl: 'product/components/product-list.component.html',
                        styles: ['.error {color:red;}']
                    }), 
                    __metadata('design:paramtypes', [index_1.ClientProductsService, router_1.RouteParams])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map