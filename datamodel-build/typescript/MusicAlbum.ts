import { MusicAlbumProductionType } from "./MusicAlbumProductionType";
import { MusicAlbumReleaseType } from "./MusicAlbumReleaseType";
import { MusicRelease } from "./MusicRelease";
import { Person,MusicGroup } from "./Person,MusicGroup";


export class MusicAlbum extends MusicPlaylist {
  albumProductionType: MusicAlbumProductionType;
  albumReleaseType: MusicAlbumReleaseType;
  albumRelease: MusicRelease;
  byArtist: Person,MusicGroup;


}
