import { Component } from 'angular2/core';
import { RouteParams }             from 'angular2/router';
import { ProductModel, ClientModel, ClientProductsModel, ClientProductsService } from '../index';


@Component({
    selector   : 'product-list',
    templateUrl: 'product/components/product-list.component.html',
    styles     : ['.error {color:red;}']
})
export class ProductListComponent {
    private token;
    typeDocument = 'nn';
    document= 0;
    docus = [{'nombre':'Seleccione un tipo', 'valor':'nn'},{'nombre':'Cedula de Ciudadania', 'valor':'cc'},{'nombre':'Cedula de Extranjeria', 'valor':'ce'},{'nombre':'Cédula Adulto Mayor', 'valor':'adultonn'},{'nombre':'Tarjeta de Identidad', 'valor':'ti'}];

    constructor(private _productService: ClientProductsService, params: RouteParams) {
        this.token = params.get('token');
        //console.log(params);
    }

    errorMessage: string;
    products: ProductModel[];
    nameClient: string;
    documento: string;
    b = 0;
    //client-products: ClientProductsModel;

    //ngOnInit() { this.getProducts(); }

    getProducts() {

		if(this.typeDocument != 'nn' && this.document != 0){
        this._productService.getProducts(this.token, this.typeDocument, this.document)
            .subscribe(
            clients => {
              if(clients.length >0){
                this.products = clients[0].productos.map(this.parseSaldo);
                this.b = 1;
                this.nameClient = clients[0].nombre_completo;
                console.log("nombre: " + this.nameClient);
                }
            },
            error => this.errorMessage = <any>error);
            } else {
                this.b = 0;
				alert('Usuario no encontrado');
            }
    }

    parseSaldo(producto) {
      producto.saldo = parseFloat(producto.saldo);
      return producto;
    }

    selectDocument(valor) {
		this.typeDocument = valor;
		//alert('Tipo de documento: '+this.typeDocument);
    }

}
