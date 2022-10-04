import { MusicPlaylist } from "./MusicPlaylist";
import { MusicAlbum } from "./MusicAlbum";
import { MusicComposition } from "./MusicComposition";
import { Duration } from "./Duration";
import { Person,MusicGroup } from "./Person,MusicGroup";


export class MusicRecording extends CreativeWork {
  isrcCode: string;
  inPlaylist: MusicPlaylist;
  inAlbum: MusicAlbum;
  recordingOf: MusicComposition;
  duration: Duration;
  byArtist: Person,MusicGroup;


}
