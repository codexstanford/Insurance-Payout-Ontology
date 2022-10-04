import { ProductModel } from "./ProductModel";
import { ProductModel,ProductGroup } from "./ProductModel,ProductGroup";


export class ProductModel extends Product {
  successorOf: ProductModel;
  predecessorOf: ProductModel;
  isVariantOf: ProductModel,ProductGroup;


}
