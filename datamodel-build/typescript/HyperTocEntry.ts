import { HyperTocEntry } from "./HyperTocEntry";
import { MediaObject } from "./MediaObject";


export class HyperTocEntry extends CreativeWork {
  tocContinuation: HyperTocEntry;
  associatedMedia: MediaObject;
  utterances: string;


}
