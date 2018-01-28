import { StoreDetails } from './storedetails';

export class OpenStore {
   storeId: string;
   storeName: string;
   storeURL: string;
   storeDetails: StoreDetails;
   isCreated: boolean;
   constructor() {
       this.storeDetails = new StoreDetails();
   }
}
