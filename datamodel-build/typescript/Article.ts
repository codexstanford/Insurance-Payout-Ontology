import { string,number } from "./string,number";
import { string,CreativeWork } from "./string,CreativeWork";
import { string,SpeakableSpecification } from "./string,SpeakableSpecification";


export class Article extends CreativeWork {
  pageStart: string,number;
  articleSection: string;
  pageEnd: string,number;
  backstory: string,CreativeWork;
  wordCount: number;
  articleBody: string;
  speakable: string,SpeakableSpecification;
  pagination: string;


}
