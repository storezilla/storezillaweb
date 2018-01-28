import { Manufacturer} from '../model/Manufacturer';

export class Product {
    productId: number;
    productName: string;
    productDescription: string;
    metaTagTitle: string;
    metaTagKeyWords: string;
    productTags: string;
    imagePath: string;
    model: string;
    sku: string;
    location: string;
    price: number;
    // private taxClass: TaxClass;
    quantity: number;
    minimumQuantity: number;
    subatractStock: boolean;
    // private stockStatus: StockStatus;
    requiredShipping: boolean;
    dateAvailable: Date;
    length: number;
    width: number;
    height: number;
    status: boolean;
    sortOrder: number;
    manufacturer: Manufacturer;
    // Collection<Category> categories = new ArrayList<Category>();
    // Collection<OpenStore> stores = new ArrayList<OpenStore>();
    isCreated: boolean;
    constructor() {
    }
}
