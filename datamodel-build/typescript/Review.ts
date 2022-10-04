import { Rating } from "./Rating";
import { Thing } from "./Thing";
import { ListItem,string,WebContent,ItemList } from "./ListItem,string,WebContent,ItemList";
import { Review } from "./Review";
import { WebContent,string,ListItem,ItemList } from "./WebContent,string,ListItem,ItemList";


export class Review extends CreativeWork {
  reviewRating: Rating;
  itemReviewed: Thing;
  negativeNotes: ListItem,string,WebContent,ItemList;
  reviewAspect: string;
  associatedClaimReview: Review;
  positiveNotes: WebContent,string,ListItem,ItemList;
  associatedReview: Review;
  associatedMediaReview: Review;
  reviewBody: string;


}
