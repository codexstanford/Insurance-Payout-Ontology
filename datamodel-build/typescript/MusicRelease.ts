import { MusicAlbum } from "./MusicAlbum";
import { MusicReleaseFormatType } from "./MusicReleaseFormatType";
import { Duration } from "./Duration";
import { Person,Organization } from "./Person,Organization";
import { Organization } from "./Organization";


export class MusicRelease extends MusicPlaylist {
  releaseOf: MusicAlbum;
  musicReleaseFormat: MusicReleaseFormatType;
  duration: Duration;
  creditedTo: Person,Organization;
  recordLabel: Organization;
  catalogNumber: string;


}
