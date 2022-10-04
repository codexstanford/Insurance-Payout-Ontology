import { Person } from "./Person";
import { BookFormatType } from "./BookFormatType";


export class Book extends CreativeWork {
  isbn: string;
  illustrator: Person;
  numberOfPages: number;
  abridged: boolean;
  bookFormat: BookFormatType;
  bookEdition: string;


}
