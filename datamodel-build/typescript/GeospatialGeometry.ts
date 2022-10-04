import { Place,GeospatialGeometry } from "./Place,GeospatialGeometry";
import { GeospatialGeometry,Place } from "./GeospatialGeometry,Place";


export class GeospatialGeometry extends Intangible {
  geoContains: Place,GeospatialGeometry;
  geoIntersects: GeospatialGeometry,Place;
  geoTouches: Place,GeospatialGeometry;
  geoCoveredBy: Place,GeospatialGeometry;
  geoEquals: Place,GeospatialGeometry;
  geoCrosses: GeospatialGeometry,Place;
  geoCovers: GeospatialGeometry,Place;
  geoWithin: Place,GeospatialGeometry;
  geoDisjoint: GeospatialGeometry,Place;
  geoOverlaps: GeospatialGeometry,Place;


}
