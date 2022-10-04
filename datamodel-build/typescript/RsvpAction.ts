import { RsvpResponseType } from "./RsvpResponseType";
import { Comment } from "./Comment";


export class RsvpAction extends InformAction {
  rsvpResponse: RsvpResponseType;
  comment: Comment;
  additionalNumberOfGuests: number;


}
