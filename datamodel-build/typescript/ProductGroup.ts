import { Product } from "./Product";
import { string,DefinedTerm } from "./string,DefinedTerm";


export class ProductGroup extends Product {
  hasVariant: Product;
  productGroupID: string;
  variesBy: string,DefinedTerm;


}
