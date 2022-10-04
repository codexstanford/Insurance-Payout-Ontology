import { ItemList,Answer } from "./ItemList,Answer";
import { Answer,ItemList } from "./Answer,ItemList";


export class Question extends Comment {
  suggestedAnswer: ItemList,Answer;
  acceptedAnswer: Answer,ItemList;
  answerCount: number;
  eduQuestionType: string;


}
