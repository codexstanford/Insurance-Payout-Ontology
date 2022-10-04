import { SportsTeam } from "./SportsTeam";
import { Place } from "./Place";
import { Diet } from "./Diet";
import { SportsActivityLocation } from "./SportsActivityLocation";
import { Distance } from "./Distance";
import { ExercisePlan } from "./ExercisePlan";
import { SportsEvent } from "./SportsEvent";
import { Person } from "./Person";


export class ExerciseAction extends PlayAction {
  sportsTeam: SportsTeam;
  course: Place;
  fromLocation: Place;
  diet: Diet;
  sportsActivityLocation: SportsActivityLocation;
  distance: Distance;
  exercisePlan: ExercisePlan;
  sportsEvent: SportsEvent;
  exerciseRelatedDiet: Diet;
  opponent: Person;
  exerciseCourse: Place;
  toLocation: Place;
  exerciseType: string;


}
