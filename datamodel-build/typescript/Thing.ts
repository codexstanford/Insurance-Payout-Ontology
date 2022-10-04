import { CreativeWork,string } from "./CreativeWork,string";
import { Action } from "./Action";
import { string,ImageObject } from "./string,ImageObject";
import { Event,CreativeWork } from "./Event,CreativeWork";
import { string,string,PropertyValue } from "./string,string,PropertyValue";


export class Thing {
  mainEntityOfPage: CreativeWork,string;
  alternateName: string;
  name: string;
  potentialAction: Action;
  image: string,ImageObject;
  url: string;
  description: string;
  subjectOf: Event,CreativeWork;
  additionalType: string;
  disambiguatingDescription: string;
  sameAs: string;
  identifier: string,string,PropertyValue;


}
