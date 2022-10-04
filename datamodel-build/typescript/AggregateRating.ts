import { Thing } from "./Thing";


export class AggregateRating extends Rating {
  itemReviewed: Thing;
  reviewCount: number;
  ratingCount: number;


}
