import { Person,Audience,ContactPoint,Organization } from "./Person,Audience,ContactPoint,Organization";
import { string,Language } from "./string,Language";
import { Language } from "./Language";
import { Thing } from "./Thing";


export class CommunicateAction extends InteractAction {
  recipient: Person,Audience,ContactPoint,Organization;
  inLanguage: string,Language;
  language: Language;
  about: Thing;


}
