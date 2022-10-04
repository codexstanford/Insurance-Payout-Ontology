import { Person } from "./Person";


export class ComicIssue extends PublicationIssue {
  letterer: Person;
  colorist: Person;
  variantCover: string;
  inker: Person;
  penciler: Person;
  artist: Person;


}
