import { Organization,Person } from "./Organization,Person";
import { MusicComposition } from "./MusicComposition";
import { MusicRecording } from "./MusicRecording";
import { Event } from "./Event";
import { CreativeWork } from "./CreativeWork";
import { Person } from "./Person";


export class MusicComposition extends CreativeWork {
  iswcCode: string;
  composer: Organization,Person;
  musicCompositionForm: string;
  includedComposition: MusicComposition;
  recordedAs: MusicRecording;
  firstPerformance: Event;
  musicArrangement: MusicComposition;
  lyrics: CreativeWork;
  musicalKey: string;
  lyricist: Person;


}
