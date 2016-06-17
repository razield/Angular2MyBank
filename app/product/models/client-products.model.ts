import {ClientModel, ProductModel} from '../index';


export class ClientProductsModel {
    constructor(
		public client: ClientModel,
		public productos: ProductModel[],
    public nombre_completo: string
    ) { }
}
